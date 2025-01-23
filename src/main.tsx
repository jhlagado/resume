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
              <p><i>Contractor</i></p>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Core Frontend Developer</h4>
              <h5>Digital Channel Operations, Melbourne University</h5>
              <p>
                At the University of Melbourne’s Digital Channel Operations, I
                contributed to the upgrade of the <em>Pursuit</em> online
                magazine, focusing on enhancing front-end components and
                optimizing performance. My work involved improving writing
                components to enhance the visual appeal and interactivity of
                tier 3 articles. This included quizzes, video and parallax
                backdrops and animated effects.
              </p>
              <p>
                A key aspect of my role was in modernising the University's
                component library as well as working on reducing page load
                times, improving rendering efficiency and ensuring responsiveness
                across all devices. This included refining critical
                rendering paths, optimizing JavaScript and CSS delivery,
                and addressing performance bottlenecks. I collaborated with backend
                developers and designers to implement efficient content
                rendering and improving performance using Google's Web Vitals metrics.
              </p>
              <p>
                I also contributed to improving the accessibility of the{" "}
                <em>Pursuit</em> site, ensuring compliance with WCAG standards.
                This involved implementing features such as keyboard navigation,
                proper color contrast, and screen reader support, making the
                site more inclusive.
              </p>
              <p>
                Beyond <em>Pursuit</em>, I worked on the upgrade of the
                University’s component library, which is used across critical
                systems like "Study" and "Find a Course." This project focused
                on enhancing the library’s reusability, maintainability, and
                performance, ensuring a consistent user experience across the
                university’s digital platforms.
              </p>
              <p>
                Additionally, I supported the development of the university's
                Visual Identity project, ensuring that front-end components
                aligned with the updated branding guidelines, contributing to a
                cohesive and professional digital experience.
              </p>
              <ul className="bullets">
                <li>
                  Developed front-end components using Vue.js, Vuex, and Nuxt
                  for high-performance web applications.
                </li>
                <li>
                  Optimized app performance with Nuxt.js (SSR) and Vite for
                  faster builds and improved development workflows.
                </li>
                <li>
                  Ensured reliability with Vue Testing Library for comprehensive
                  test coverage.
                </li>
                <li>
                  Collaborated on the creation of reusable UI components,
                  maintaining consistency across projects.
                </li>
                <li>
                  Mentoring, code reviews, communication with stake holders
                </li>
              </ul>
            </dd>
            <dt>
              <h4>07/2020 - 01/2024</h4>
              <h5>Melbourne</h5>
            </dt>
            <dd className="col-span-3 border-l pl-4">
              <h4>Senior Frontend Developer & Squad Lead</h4>
              <h5>Workjam</h5>
              <p>
                As a Senior Frontend Developer & Squad Lead at Workjam, I led a
                multi-disciplinary team of up to 15 developers, overseeing the
                delivery of web applications for frontline workforce management.
                I was responsible for managing daily agile ceremonies, including
                sprint planning, project refinement, and estimation, while
                maintaining clear communication with product owners and
                stakeholders across multiple time zones.
              </p>
              <p>
                In collaboration with fellow engineers, I utilized technologies
                such as React, Tailwind, and Storybook to build and maintain a
                UI component library that supported consistent design and
                reusable components across the application. We leveraged state
                management tools like Redux, MobX, and GraphQL to maintain
                application efficiency and scalability. Server-side rendering
                with NextJS was also a key technology in our stack, improving
                both performance and SEO. To ensure robust code quality, the
                team worked with Jest and React Testing Library for unit testing
                and test coverage.
              </p>
              <p>
                On the people management side, I conducted regular performance
                assessments and provided actionable feedback to align individual
                goals with team objectives. I worked closely with developers to
                support their technical growth and career development, offering
                mentorship when needed. My focus was on maintaining a
                collaborative environment where developers had the resources and
                direction to meet their professional goals and contribute to the
                team's success.
              </p>
              <p>
                By fostering open communication and promoting collaborative
                development practices, such as code reviews and pair
                programming, we ensured the team maintained high technical
                standards and worked effectively together to achieve project
                goals. This approach to leadership and technical execution
                contributed to the successful delivery of complex projects
                aligned with organizational objectives.
              </p>
              <ul className="bullets">
                <li>
                  Built and maintained high-performance web apps for frontline
                  worker management
                </li>
                <li>
                  Developed UI component library using React, Tailwind, and
                  Storybook
                </li>
                <li>Managed application state with Redux, MobX, and GraphQL</li>
                <li>
                  Implemented unit testing with Jest and React Test Library
                </li>
                <li>Handled server communication via REST and GraphQL BFF</li>
                <li>
                  Utilized server-side rendering with Next.js for performance
                  optimization
                </li>
                <li>
                  Collaborated with cross-functional teams, including
                  architects, designers, and backend developers
                </li>
                <li>
                  Coordinated with international teams across multiple time
                  zones
                </li>
                <li>
                  Led a multi-disciplinary team of up to 7 developers, managing
                  agile processes
                </li>
                <li>
                  Mentored developers and conducted onboarding, code reviews,
                  and performance assessments
                </li>
                <li>
                  Provided people management, goal setting, and career guidance
                </li>
              </ul>{" "}
            </dd>
            <dt>
              <h4>03/2017 - 07/2020</h4>
              <h5>Melbourne</h5>
              <p>Cognizant</p>
              <p><i>Consultant</i></p>
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
