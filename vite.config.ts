import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const getResumeLastUpdated = (): string => {
  try {
    const result = execSync("git log -1 --format=%cs -- src/resume*.md", {
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
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        permanent: fileURLToPath(new URL("./permanent.html", import.meta.url)),
        contract: fileURLToPath(new URL("./contract.html", import.meta.url)),
      },
    },
  },
  define: {
    __RESUME_LAST_UPDATED__: JSON.stringify(getResumeLastUpdated()),
  },
});
