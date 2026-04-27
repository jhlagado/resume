import "@fontsource-variable/montserrat";
import "./index.css";
import resumeMarkdown from "./resume.md?raw";
import React from "react";
import ReactDOM from "react-dom/client";
import { ResumeApp } from "./resume-app";

declare const __RESUME_LAST_UPDATED_MAP__: Record<string, string>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResumeApp
      activeVariant="hybrid"
      lastUpdated={__RESUME_LAST_UPDATED_MAP__["src/resume.md"]}
      resumeMarkdown={resumeMarkdown}
    />
  </React.StrictMode>,
);
