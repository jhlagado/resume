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
        <h1 className="">John Hardy</h1>
        <h2 className="">Senior Frontend Developer</h2>
        <ul className="contact">
          <li>
            <div>
              <b>Status:</b> Australian citizen
            </div>
            <div>
              <b>Availability:</b> immediate start
            </div>
            <div>
              <b>GitHub:</b>{" "}
              <a target="_blank" href="https://github.com/jhlagado">
                https://github.com/jhlagado
              </a>
            </div>
            <div>
              <b>LinkedIn:</b>{" "}
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
          I am a professional frontend developer with over 20 years of
          experience and a proven track-record for delivering high performance
          and easy to use web applications using React and other web
          technologies. I enjoy working in collaborative environments,
          contributing to focused teams of engineers on engaging web projects. I
          am experienced in scaled Agile development methodologies, Test Driven
          Development and Continuous Delivery.
        </p>
      </section>
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>Accessibility</li>
          <li>Agile</li>
          <li>Chrome extensions</li>
          <li>CSS / Animation</li>
          <li>Git</li>
          <li>GraphQL</li>
          <li>GSAP</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>Jest</li>
          <li>JIRA</li>
          <li>Mentorship</li>
          <li>MobX</li>
          <li>NextJS</li>
          <li>NodeJS</li>
          <li>Performance</li>
          <li>React Router</li>
          <li>React Testing Library</li>
          <li>Redux / RTK</li>
          <li>Responsive Design</li>
          <li>REST protocol</li>
          <li>Service Workers</li>
          <li>Storybook</li>
          <li>Swagger</li>
          <li>SWR</li>
          <li>Tailwind</li>
          <li>Team Leadership</li>
          <li>Test Automation</li>
          <li>Test Driven</li>
          <li>Typescript</li>
          <li>UI Components</li>
          <li>User stories</li>
          <li>Vite / Vitest</li>
          <li>WAI WCAG 2</li>
          <li>Web development</li>
        </ul>
      </section>
      <section className="experience">
        <h3>Experience</h3>
        <article>
          <dl>
            <dt>
              <h4 className="">07/2020 - 01/2024</h4>
              <h5>Melbourne</h5>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4 className="">Senior Frontend Developer & Squad Lead</h4>
              <h5 className="">Workjam</h5>
              <ul className="bullets">
                <li>
                  Built and maintained high-performing web apps for a frontline
                  worker management system
                </li>
                <li>
                  Helped build UI library of reusable components in React,
                  Tailwind and Storybook
                </li>
                <li>
                  Managed web application state using Redux, MobX and GraphQL
                </li>
                <li>
                  Ensured unit test coverage using Jest and React Test Library
                </li>
                <li>Server communication with REST and GraphQL BFF</li>
                <li>Server-side rendering with NextJS</li>
                <li>
                  Collaborated with architects, designers, & backend developers
                </li>
                <li>
                  Coordinated with international teams across multiple time
                  zones
                </li>
                <li>
                  Served as lead for a team for a multi-disciplinary squad of 7
                  developers
                </li>
                <li>
                  Engaged in sprint planning, feature estimation, design review,
                  & task breakdown
                </li>
                <li>
                  Mentored developers, initiated onboarding and conducting code
                  reviews
                </li>
                <li>People management, goal setting and career guidance</li>
              </ul>
            </dd>
            <dt>
              <h4>03/2017 - 07/2020</h4>
              <h5>Melbourne</h5>
              Cognizant
            </dt>
            <dd>
              <h4>Nab: Stargaze Project - API Gateway</h4>
              <h5>Senior Analyst and Frontend Developer</h5>
              <p>
                Led the development of the user interface and React architecture
                for Stargaze Project API Gateway. Established the Nab user
                interface component library (NUI) to improve code reusability
                and maintainability. Collaborated with team members by
                interpreting requirements, writing user stories, and providing
                mentoring and support. Developed using React, NodeJS, Express,
                TypeScript, and Redux. Contributed to the back-end Node server,
                including upgrading its authentication system.
              </p>
            </dd>
            <dt></dt>
            <dd>
              <h4>Nab Connect</h4>
              <h5>Senior Analyst and Frontend Developer</h5>
              <p>
                Worked as a React / AngularJS / JavaScript developer with a
                cross functional team of 6 developers/testers and reported to
                project managers and key stakeholders.
              </p>
            </dd>
            <dt>
              <h4>01/2013 - 03/2017</h4>
              <h5>Adelaide</h5>
            </dt>
            <dd>
              <h4>Lead Frontend Developer</h4>
              <h5>XAPIApps</h5>
              <ul className="bullets">
                <li>
                  Partnered with architect, UX designer, and developers to build
                  a user-friendly interface.
                </li>
                <li>
                  Led stakeholder discussions, captured user stories, and
                  defined project scope through JIRA tasks.
                </li>
                <li>
                  Designed functional web interfaces, built reusable web
                  components, and established automated testing practices.
                </li>
                <li>
                  Onboarded new members, provided ongoing mentorship, and
                  effectively managed team workload.
                </li>
              </ul>
            </dd>
            <dt>
              <h4>01/2004 - 12/2012</h4>
              <h5>Melbourne</h5>
            </dt>
            <dd>
              <h4>Principal and Partner</h4>
              <h5>Lagado Partners</h5>
              <b>Crikey.com.au</b>
              <p>
                Built and maintained CMS for popular Australian news site.
                Empowered journalists to directly manage content (publishing,
                newsletters)
              </p>
              <b>Sustainable Energy Authority</b>
              <p>
                Led 3-person team in developing Victoria's top house energy
                rating software (FirstRate5). Created interactive UI for
                builders/architects to input plans and calculate thermal
                efficiency
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
