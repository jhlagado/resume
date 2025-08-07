import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/montserrat";
import "./index.css";
import {
  MdLocationOn,
  MdLocalPhone,
  MdEmail,
  MdDiamond,
  MdSettingsSuggest,
} from "react-icons/md";

export const Resume = () => {
  return (
    <div className="resume">
      <section className="contact">
        <h1>John Hardy</h1>
        <h2>Senior Frontend Developer</h2>
        <ul className="contact">
          <li>
            <div>
              <b>Status:</b> Australian citizen
            </div>
            <div>
              <b>GitHub:</b>
              <a target="_blank" href="https://github.com/jhlagado">
                https://github.com/jhlagado
              </a>
            </div>
            <div>
              <b>LinkedIn:</b>
              <a target="_blank" href="https://rb.gy/jaa61w">
                https://rb.gy/jaa61w
              </a>
            </div>
          </li>
          <li>
            <div>
              <MdLocationOn />
              Melbourne
            </div>
            <div>
              <MdLocalPhone />
              <a href="tel:+61 436 005 419">+61 436 005 419</a>
            </div>
            <div>
              <MdEmail />
              <a href="mailto:jh@lagado.com">jh@lagado.com</a>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h3>Professional Summary</h3>
        <p>
          I'm a frontend developer with over 20 years of experience delivering
          high-performance, user-friendly web applications using React and
          related technologies. I thrive in collaborative environments and enjoy
          contributing to focused engineering teams working on meaningful
          projects. I bring deep experience in Agile development at scale, with
          a strong emphasis on test-driven development and continuous delivery.
        </p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Accessibility</li>
          <li>WAI</li>
          <li>WCAG 2</li>
          <li>Agile</li>
          <li>User Stories</li>
          <li>AI Tooling</li>
          <li>Amazon Q</li>
          <li>GitHub Copilot</li>
          <li>Chrome Extensions</li>
          <li>CSS</li>
          <li>Animation</li>
          <li>GSAP</li>
          <li>Tailwind</li>
          <li>Git</li>
          <li>JIRA</li>
          <li>GraphQL</li>
          <li>REST</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>Jest</li>
          <li>React Testing Library</li>
          <li>Vue Testing Library</li>
          <li>Mentoring</li>
          <li>Team Leadership</li>
          <li>MobX</li>
          <li>NextJS</li>
          <li>Nuxt</li>
          <li>NodeJS</li>
          <li>Performance</li>
          <li>Web Efficiency</li>
          <li>Playwright</li>
          <li>Vitest</li>
          <li>React</li>
          <li>React Router</li>
          <li>Redux</li>
          <li>Redux Toolkit</li>
          <li>Responsive Design</li>
          <li>Service Workers</li>
          <li>Storybook</li>
          <li>Styled Components</li>
          <li>SWR</li>
          <li>Swagger</li>
          <li>Test Automation</li>
          <li>Test Driven Development</li>
          <li>UI Components</li>
          <li>Vite</li>
          <li>Vue 2</li>
          <li>Vue 3</li>
          <li>Vuex</li>
        </ul>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        <article>
          <dl>
            <dt>
              <h4>04/2024 – Present</h4>
              <h5>Melbourne</h5>
              <p>National Australia Bank</p>
              <p>
                <i>Contractor</i>
              </p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Senior Analyst Engineer (Frontend)</h4>
              <h5>Customer Identity Service, NAB</h5>
              <p>
                Returned to NAB and joined DAF (Kronos team), where I've been
                building and maintaining internal mini-apps that support
                customer identity, authorisation, and device management
                workflows. My focus has been on improving accessibility,
                updating legacy components, and aligning the frontend with NAB's
                design standards. This has included some coordination with the
                Nab-X design team to ensure visual consistency across platforms.
              </p>
              <p>
                Strengthened working knowledge of Amazon Q, Playwright, Redux
                Toolkit, and GraphQL. Currently supporting the Kronos team with
                onboarding of new mini-apps and continuing API integration work.
              </p>
            </dd>

            <dt>
              <h4>03/2024 – 03/2025</h4>
              <h5>Melbourne</h5>
              <p>John A Hardy P/L</p>
              <p>
                <i>Contractor</i>
              </p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Core Frontend Developer</h4>
              <h5>Digital Channel Operations, Melbourne University</h5>
              <p>
                Contributed to frontend upgrades for the Pursuit online magazine
                and broader UI components across the University's digital
                platforms. Improved interactivity, accessibility, and rendering
                performance. Supported Web Vitals optimisation and design
                consistency for key properties like "Study" and "Find a Course."
              </p>
              <ul className="bullets">
                <li>
                  Enhanced frontend components for performance and accessibility
                </li>
                <li>Improved rendering efficiency using Web Vitals metrics</li>
                <li>
                  Contributed to reusable UI component upgrades across key sites
                </li>
                <li>
                  Collaborated with backend and content teams for consistent
                  delivery
                </li>
              </ul>
            </dd>

            <dt>
              <h4>07/2020 – 01/2024</h4>
              <h5>Melbourne</h5>
              <p>Workjam</p>
              <p>
                <i>Employee</i>
              </p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Senior Frontend Developer</h4>
              <h5>Workjam</h5>
              <p>
                Led frontend development of React applications for
                enterprise-scale workforce management. Built and maintained a
                reusable UI library, implemented scalable state management, and
                optimised performance through server-side rendering. Supported
                test automation practices with Jest and React Testing Library.
              </p>
              <ul className="bullets">
                <li>
                  Built and maintained reusable component library in
                  React/Tailwind
                </li>
                <li>Implemented Redux/MobX state patterns and GraphQL APIs</li>
                <li>
                  Improved SSR performance and developer testing practices
                </li>
                <li>
                  Collaborated across time zones on feature delivery and QA
                </li>
              </ul>
            </dd>
            <dt>
              <h4>03/2017 – 07/2018</h4>
              <h5>Melbourne</h5>
              <p>Cognizant</p>
              <p>
                <i>Consultant</i>
              </p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>NAB: Stargaze Project – API Gateway</h4>
              <h5>Senior Analyst and Frontend Developer</h5>
              <p>
                Led frontend development for NAB's Stargaze API Gateway,
                designing the React architecture and establishing the NAB UI
                component library (NUI) to support internal reuse. Worked with
                analysts and dev teams on feature design, story writing, and
                backend authentication integration.
              </p>
            </dd>
            <dt>
              <h4>03/2018 – 07/2020</h4>
              <h5>Melbourne</h5>
              <p>Cognizant</p>
              <p>
                <i>Consultant</i>
              </p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>NAB Connect</h4>
              <h5>Senior Analyst and Frontend Developer</h5>
              <p>
                Developed banker-facing features for NAB Connect using React,
                AngularJS, and JavaScript. Worked in a cross-functional team
                delivering iterative enhancements in partnership with PMs and
                stakeholders.
              </p>
            </dd>
            <dt>
              <h4>01/2013 – 03/2017</h4>
              <h5>Adelaide</h5>
              <p>XAPIApps</p>
              <p>
                <i>Employee</i>
              </p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Lead Frontend Developer</h4>
              <h5>XAPIApps</h5>
              <p>
                Led frontend architecture and UI design for training and
                analytics tools. Worked with product, UX, and dev teams to build
                accessible, testable components and onboarded junior engineers
                across projects.
              </p>
            </dd>

            <dt>
              <h4>01/2004 – 12/2012</h4>
              <h5>Melbourne</h5>
              <p>Lagado Partners</p>
              <p>
                <i>Principal and Partner</i>
              </p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Principal and Partner</h4>
              <h5>Lagado Partners</h5>
              <p>
                Built and maintained CMS for Crikey.com.au, enabling journalists
                to self-publish articles and newsletters. Also led UI
                development for Victoria's FirstRate5 home energy rating tool.
              </p>
            </dd>
          </dl>
        </article>
      </section>

      <section className="interests">
        <h3>Personal interests</h3>
        <ul>
          <li>
            <MdDiamond size={48} />
            <div>
              <h4>Retro-computing, electronics</h4>
              <a target="_blank" href="https://github.com/tec1group">
                https://github.com/tec1group
              </a>
            </div>
          </li>
          <li>
            <MdSettingsSuggest size={48} />
            <div>
              <h4>Administrator TEC-1 Z80 Computer Group</h4>
              <a
                target="_blank"
                href="https://www.facebook.com/groups/623556744820045/"
              >
                https://www.facebook.com/groups/623556744820045/
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="references">
        <h3>References</h3>
        <p>Available on request</p>
      </section>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
