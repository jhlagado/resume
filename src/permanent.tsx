import "@fontsource-variable/montserrat";
import "./index.css";
import resumeMarkdown from "./resume-permanent.md?raw";
import React from "react";
import ReactDOM from "react-dom/client";
import { ResumeApp } from "./resume-app";

declare const __RESUME_LAST_UPDATED_MAP__: Record<string, string>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResumeApp
      lastUpdated={__RESUME_LAST_UPDATED_MAP__["src/resume-permanent.md"]}
      resumeMarkdown={resumeMarkdown}
    />
  </React.StrictMode>,
);
