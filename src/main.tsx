import ReactDOM from "react-dom/client";
import React from "react";
import "@fontsource-variable/montserrat";
import "./index.css";
import resumeMarkdown from "./resume.md?raw";
import { ResumeApp } from "./resume-app";

declare const __RESUME_LAST_UPDATED__: string;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResumeApp markdown={resumeMarkdown} lastUpdated={__RESUME_LAST_UPDATED__} />
  </React.StrictMode>
);
