import "@fontsource-variable/montserrat";
import "./index.css";
import resumeMarkdown from "./resume-permanent.md?raw";
import { renderResumeApp } from "./resume-app";

declare const __RESUME_LAST_UPDATED_MAP__: Record<string, string>;

renderResumeApp({
  activeVariant: "permanent",
  lastUpdated: __RESUME_LAST_UPDATED_MAP__["src/resume-permanent.md"],
  resumeMarkdown,
});
