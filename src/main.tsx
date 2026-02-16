import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/montserrat";
import "./index.css";
import resumeMarkdown from "./resume.md?raw";
import { MdDiamond, MdEmail, MdLocalPhone, MdLocationOn, MdSettingsSuggest } from "react-icons/md";

declare const __RESUME_LAST_UPDATED__: string;

type LinkValue = {
  text: string;
  href?: string;
};

type Experience = {
  period: string;
  location: string;
  company: string;
  engagement: string;
  role: string;
  team: string;
  paragraphs: string[];
  bullets: string[];
};

type Interest = {
  title: string;
  link: LinkValue;
};

type ResumeData = {
  name: string;
  title: string;
  contact: Record<string, LinkValue>;
  summary: string;
  skills: string[];
  experiences: Experience[];
  interests: Interest[];
  references: string;
};

const unwrapMarkdown = (line: string, marker: "**" | "*"): string => {
  const trimmed = line.trim();
  if (marker === "**" && trimmed.startsWith("**") && trimmed.endsWith("**")) {
    return trimmed.slice(2, -2).trim();
  }
  if (marker === "*" && trimmed.startsWith("*") && trimmed.endsWith("*")) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
};

const parseLinkValue = (value: string): LinkValue => {
  const match = value.match(/^\[(.+?)\]\((.+?)\)$/);
  if (!match) {
    return { text: value.trim() };
  }

  return { text: match[1].trim(), href: match[2].trim() };
};

const extractSection = (source: string, heading: string): string => {
  const marker = `### ${heading}\n`;
  const start = source.indexOf(marker);
  if (start === -1) return "";

  const contentStart = start + marker.length;
  const nextHeadingStart = source.indexOf("\n### ", contentStart);
  const content =
    nextHeadingStart === -1
      ? source.slice(contentStart)
      : source.slice(contentStart, nextHeadingStart);

  return content.trim();
};

const parseExperiences = (section: string): Experience[] => {
  const lines = section.split("\n");
  const items: Experience[] = [];
  let i = 0;

  const nextContentLine = () => {
    while (i < lines.length && lines[i].trim() === "") i += 1;
    return lines[i]?.trim() ?? "";
  };

  while (i < lines.length) {
    const start = lines[i].trim();
    if (!start.startsWith("#### ")) {
      i += 1;
      continue;
    }

    const heading = start.replace(/^####\s+/, "");
    const [period = "", location = ""] = heading.split("|").map((s) => s.trim());
    i += 1;

    const company = unwrapMarkdown(nextContentLine(), "**");
    i += 1;
    const engagement = unwrapMarkdown(nextContentLine(), "*");
    i += 1;
    const role = unwrapMarkdown(nextContentLine(), "**");
    i += 1;
    const team = unwrapMarkdown(nextContentLine(), "*");
    i += 1;

    const paragraphs: string[] = [];
    const bullets: string[] = [];

    while (i < lines.length && !lines[i].trim().startsWith("#### ")) {
      if (lines[i].trim() === "") {
        i += 1;
        continue;
      }

      if (lines[i].trim().startsWith("- ")) {
        bullets.push(lines[i].trim().replace(/^-\s+/, ""));
        i += 1;
        continue;
      }

      const paragraphLines: string[] = [];
      while (
        i < lines.length &&
        lines[i].trim() !== "" &&
        !lines[i].trim().startsWith("- ") &&
        !lines[i].trim().startsWith("#### ")
      ) {
        paragraphLines.push(lines[i].trim());
        i += 1;
      }
      paragraphs.push(paragraphLines.join(" "));
    }

    items.push({
      period,
      location,
      company,
      engagement,
      role,
      team,
      paragraphs,
      bullets,
    });
  }

  return items;
};

const parseResumeMarkdown = (source: string): ResumeData => {
  const normalized = source.replace(/\r\n/g, "\n");
  const name = normalized.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? "";
  const title = normalized.match(/^##\s+(.+)$/m)?.[1]?.trim() ?? "";

  const introUntilSummary = normalized
    .split(/^### Professional Summary$/m)[0]
    ?.split("\n")
    .slice(2)
    .join("\n");

  const contact: Record<string, LinkValue> = {};
  for (const line of introUntilSummary.split("\n")) {
    const match = line.match(/^-\s+\*\*(.+?):\*\*\s+(.+)$/);
    if (!match) continue;
    contact[match[1].trim()] = parseLinkValue(match[2].trim());
  }

  const summary = extractSection(normalized, "Professional Summary").replace(/\n+/g, " ").trim();

  const skillsSection = extractSection(normalized, "Skills");
  const skills = [...skillsSection.matchAll(/`([^`]+)`/g)].map((m) => m[1].trim());

  const experienceSection = extractSection(normalized, "Experience");
  const experiences = parseExperiences(experienceSection);

  const interestsSection = extractSection(normalized, "Personal interests");
  const interests = interestsSection
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^-\s+\*\*(.+?):\*\*\s+(.+)$/);
      if (!match) return null;
      return {
        title: match[1].trim(),
        link: parseLinkValue(match[2].trim()),
      };
    })
    .filter((item): item is Interest => item !== null);

  const references = extractSection(normalized, "References").replace(/\n+/g, " ").trim();

  return {
    name,
    title,
    contact,
    summary,
    skills,
    experiences,
    interests,
    references,
  };
};

const LinkOrText = ({ value }: { value?: LinkValue }) => {
  if (!value) return null;

  if (!value.href) return <>{value.text}</>;

  const isExternal = !value.href.startsWith("mailto:") && !value.href.startsWith("tel:");
  return (
    <a
      href={value.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
    >
      {value.text}
    </a>
  );
};

const Resume = () => {
  const data = parseResumeMarkdown(resumeMarkdown);
  const interestIcons = [<MdDiamond size={48} key="diamond" />, <MdSettingsSuggest size={48} key="settings" />];

  return (
    <div className="resume">
      <section className="contact">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <ul className="contact">
          <li>
            <div>
              <b>Status:</b> <LinkOrText value={data.contact.Status} />
            </div>
            <div>
              <MdLocationOn />
              <LinkOrText value={data.contact.Location} />
            </div>
            <div>
              <MdLocalPhone />
              <LinkOrText value={data.contact.Phone} />
            </div>
            <div>
              <MdEmail />
              <LinkOrText value={data.contact.Email} />
            </div>
          </li>
          {(data.contact.GitHub ||
            data.contact.LinkedIn ||
            data.contact.Resume ||
            data.contact.Blog) && (
            <li>
              {data.contact.GitHub && (
                <div>
                  <b>GitHub:</b> <LinkOrText value={data.contact.GitHub} />
                </div>
              )}
              {data.contact.LinkedIn && (
                <div>
                  <b>LinkedIn:</b> <LinkOrText value={data.contact.LinkedIn} />
                </div>
              )}
              {data.contact.Resume && (
                <div>
                  <b>Resume:</b> <LinkOrText value={data.contact.Resume} />
                </div>
              )}
              {data.contact.Blog && (
                <div>
                  <b>Blog:</b> <LinkOrText value={data.contact.Blog} />
                </div>
              )}
            </li>
          )}
        </ul>
      </section>

      <section>
        <h3>Professional Summary</h3>
        <p>{data.summary}</p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          {data.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        <article>
          <dl>
            {data.experiences.map((exp) => (
              <React.Fragment key={`${exp.period}-${exp.company}-${exp.role}`}>
                <dt>
                  <h4>{exp.period}</h4>
                  <h5>{exp.location}</h5>
                  <p>{exp.company}</p>
                  <p>
                    <i>{exp.engagement}</i>
                  </p>
                </dt>
                <dd>
                  <h4 className="experience-role">{exp.role}</h4>
                  <h5 className="experience-team">{exp.team}</h5>
                  {exp.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {exp.bullets.length > 0 && (
                    <ul className="bullets">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </article>
      </section>

      <section className="interests">
        <h3>Personal interests</h3>
        <ul>
          {data.interests.map((interest, index) => (
            <li key={interest.title}>
              {interestIcons[index]}
              <div>
                <h4>{interest.title}</h4>
                <LinkOrText value={interest.link} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="references">
        <h3>References</h3>
        <p>{data.references}</p>
        <p className="last-updated">Last updated: {__RESUME_LAST_UPDATED__}</p>
      </section>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
