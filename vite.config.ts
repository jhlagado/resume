import { execSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const formatDate = (date: Date): string => date.toISOString().slice(0, 10);

const resumeSources = [
  "src/resume.md",
  "src/resume-permanent.md",
  "src/resume-contract.md",
] as const;

const getResumeLastUpdated = (resumeSource: string): string => {
  const resumePath = path.resolve(process.cwd(), resumeSource);
  const fileModifiedDate = formatDate(statSync(resumePath).mtime);

  try {
    const result = execSync(`git log -1 --format=%cs -- ${resumeSource}`, {
      encoding: "utf8",
    }).trim();

    if (result) {
      return result > fileModifiedDate ? result : fileModifiedDate;
    }
  } catch {
    // fall through to default
  }

  return fileModifiedDate;
};

const resumeLastUpdatedMap = Object.fromEntries(
  resumeSources.map((resumeSource) => [resumeSource, getResumeLastUpdated(resumeSource)]),
);

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/resume",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), "index.html"),
        permanent: path.resolve(process.cwd(), "permanent.html"),
        contract: path.resolve(process.cwd(), "contract.html"),
      },
    },
  },
  define: {
    __RESUME_LAST_UPDATED_MAP__: JSON.stringify(resumeLastUpdatedMap),
  },
});
