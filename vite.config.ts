import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const getResumeLastUpdated = (): string => {
  try {
    const result = execSync("git log -1 --format=%cs -- src/resume.md", {
      encoding: "utf8",
    }).trim();

    if (result) {
      return result;
    }
  } catch {
    // fall through to default
  }

  return "Unknown";
};

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/resume",
  plugins: [react()],
  define: {
    __RESUME_LAST_UPDATED__: JSON.stringify(getResumeLastUpdated()),
  },
});
