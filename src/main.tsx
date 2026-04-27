import "@fontsource-variable/montserrat";
import "./index.css";
import resumeMarkdown from "./resume.md?raw";
import { renderResumeApp } from "./resume-app";

declare const __RESUME_LAST_UPDATED_MAP__: Record<string, string>;

renderResumeApp({
  activeVariant: "hybrid",
  lastUpdated: __RESUME_LAST_UPDATED_MAP__["src/resume.md"],
  resumeMarkdown,
});
