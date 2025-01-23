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
          <li>Mentoring</li>
          <li>MobX</li>
          <li>NextJS</li>
          <li>NodeJS</li>
          <li>Nuxt</li>
          <li>Performance</li>
          <li>React Router</li>
          <li>React Testing Library</li>
          <li>Redux / RTK</li>
          <li>Responsive Design</li>
          <li>REST protocol</li>
          <li>Service Workers</li>
          <li>Storybook</li>
          <li>Styled Components</li>
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
          <li>Vue 2 & 3 </li>
          <li>Vuex</li>
          <li>WAI WCAG 2</li>
          <li>Web Efficiency</li>
        </ul>
      </section>
      <section className="experience">
        <h3>Experience</h3>
        <article>
          <dl>
            <dt>
              <h4>03/2024 - Present</h4>
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
                At the University of Melbourne’s Digital Channel Operations, I
                contributed to upgrading the <em>Pursuit</em> online magazine,
                focusing on enhancing front-end components and optimizing
                performance. My work involved improving content authoring
                components to boost visual appeal and interactivity of tier 3
                articles, including quizzes, video and parallax backdrops, and
                animated effects.
              </p>
              <p>
                A key aspect of my role was modernizing the University's
                component library while reducing page load times, improving
                rendering efficiency, and ensuring responsiveness across
                devices. This included refining critical rendering paths,
                optimizing JavaScript and CSS delivery, and addressing
                performance bottlenecks. I collaborated with backend developers
                and designers to implement efficient content rendering and
                improve performance using Google's Web Vitals metrics.
              </p>
              <p>
                I also enhanced accessibility for the <em>Pursuit</em> site,
                ensuring WCAG compliance through features like keyboard
                navigation, proper color contrast ratios, and screen reader
                support.
              </p>
              <p>
                Beyond <em>Pursuit</em>, I helped upgrade the University’s
                component library used across critical systems like "Study" and
                "Find a Course." This project focused on improving reusability,
                maintainability, and performance to ensure consistent user
                experience across digital platforms.
              </p>
              <ul className="bullets">
                <li>
                  Developed front-end components for high-performance web
                  applications
                </li>
                <li>
                  Ensured reliability through comprehensive testing with Vue
                  Testing Library
                </li>
                <li>
                  Created reusable UI components to maintain cross-project
                  consistency
                </li>
                <li>
                  Mentored team members, conducted code reviews, and
                  communicated with stakeholders
                </li>
              </ul>
            </dd>
            <dt>
              <h4>07/2020 - 01/2024</h4>
              <h5>Melbourne</h5>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Senior Frontend Developer</h4> <h5>Workjam</h5>
              <p>
                As a Senior Frontend Developer at Workjam, I led technical
                implementation for web applications supporting frontline
                workforce management. While coordinating with cross-functional
                teams, my primary focus was driving frontend architecture using
                React, Tailwind, and modern web development practices.
              </p>
              <p>
                I contributed to the development of a UI component
                library using React, Tailwind CSS, and Storybook. This library
                established consistent design patterns across applications while
                enabling component reuse. Migrated state management solutions
                from Redux and MobX to GraphQL for more efficient data fetching
                and API interactions.
              </p>
              <p>
                Optimized application performance through Next.js server-side
                rendering implementation, improving both load times and SEO
                outcomes. Established testing standards using Jest and React
                Testing Library to ensure code reliability, with particular
                focus on critical user flows and interaction patterns.
              </p>
              <p>
                Collaborated with engineers to implement full-stack features
                including real-time updates and mobile-responsive interfaces.
                Integrated the component library with backend services to
                support scalable solutions for shift management, scheduling, and
                workforce communication features.
              </p>
              <p>
                I mentored junior developers on React best practices and modern frontend
                patterns through code reviews and pair programming sessions. I also
                worked closely with product teams to translate business
                requirements into technical specifications, particularly for
                features requiring complex state management and cross-device
                compatibility. Maintained performance benchmarks using core web
                vitals metrics while ensuring accessibility compliance across
                all user interfaces.
              </p>
              <ul className="bullets">
                <li>
                  Built high-performance React apps for frontline workforce management
                </li>
                <li>
                  Developed React/Tailwind UI component library with Storybook
                </li>
                <li>
                  Architected state management using Redux, MobX, and GraphQL
                </li>
                <li>
                  Implemented testing with Jest/React Testing Library
                </li>
                <li>
                  Optimized performance via Next.js SSR and REST/GraphQL APIs
                </li>
                <li>
                  Collaborated with cross-functional and international teams
                </li>              </ul>
            </dd>
            <dt>
              <h4>03/2017 - 07/2020</h4>
              <h5>Melbourne</h5>
              <p>Cognizant</p>
              <p>
                <i>Consultant</i>
              </p>
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
