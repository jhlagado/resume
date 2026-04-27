import fs from "node:fs";
import path from "node:path";

const srcDir = path.resolve(process.cwd(), "src");
const resumeFiles = fs
  .readdirSync(srcDir)
  .filter((fileName) => /^resume.*\.md$/.test(fileName))
  .sort();

const requiredSections = [
  "Professional Summary",
  "Skills",
  "Experience",
  "Personal interests",
  "References",
];

const extractSection = (source, heading) => {
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

const requiredContactKeys = [
  "Status",
  "GitHub",
  "LinkedIn",
  "Location",
  "Phone",
  "Email",
];

const allErrors = [];

for (const fileName of resumeFiles) {
  const filePath = path.resolve(srcDir, fileName);
  const source = fs.readFileSync(filePath, "utf8").replace(/\r\n/g, "\n");
  const errors = [];

  const name = source.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const title = source.match(/^##\s+(.+)$/m)?.[1]?.trim();

  if (!name) errors.push("Missing top-level name heading (# ...)");
  if (!title) errors.push("Missing title heading (## ...)");

  for (const section of requiredSections) {
    if (!extractSection(source, section)) {
      errors.push(`Missing or empty section: ### ${section}`);
    }
  }

  const introUntilSummary = source
    .split(/^### Professional Summary$/m)[0]
    ?.split("\n")
    .slice(2)
    .join("\n");

  const foundContact = new Set();
  for (const line of introUntilSummary.split("\n")) {
    const match = line.match(/^-\s+\*\*(.+?):\*\*\s+(.+)$/);
    if (match) foundContact.add(match[1].trim());
  }

  for (const key of requiredContactKeys) {
    if (!foundContact.has(key)) {
      errors.push(`Missing contact list item: **${key}:** ...`);
    }
  }

  const skillsSection = extractSection(source, "Skills");
  const skills = [...skillsSection.matchAll(/`([^`]+)`/g)].map((match) => match[1].trim());
  if (skills.length < 10) {
    errors.push(`Expected at least 10 skills in backticks; found ${skills.length}`);
  }

  const experienceSection = extractSection(source, "Experience");
  const experienceBlocks = experienceSection
    .split(/\n(?=#### )/)
    .map((block) => block.trim())
    .filter((block) => block.startsWith("#### "));

  if (experienceBlocks.length === 0) {
    errors.push("Expected at least 1 experience entry starting with '#### '");
  }

  for (const [index, block] of experienceBlocks.entries()) {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const label = `Experience #${index + 1}`;

    if (!/^####\s+.+\|.+$/.test(lines[0] ?? "")) {
      errors.push(`${label}: first line must be '#### period | location'`);
    }

    if (!/^\*\*.+\*\*$/.test(lines[1] ?? "")) {
      errors.push(`${label}: second non-empty line must be bold company (**...**)`);
    }

    if (!/^\*.+\*$/.test(lines[2] ?? "")) {
      errors.push(`${label}: third non-empty line must be italic engagement (*...*)`);
    }

    if (!/^\*\*.+\*\*$/.test(lines[3] ?? "")) {
      errors.push(`${label}: fourth non-empty line must be bold role (**...**)`);
    }

    if (!/^\*.+\*$/.test(lines[4] ?? "")) {
      errors.push(`${label}: fifth non-empty line must be italic team (*...*)`);
    }
  }

  const referencesSection = extractSection(source, "References");
  if (!referencesSection || referencesSection.length < 5) {
    errors.push("References section appears empty");
  }

  if (errors.length > 0) {
    allErrors.push({ fileName, errors });
  }
}

if (allErrors.length > 0) {
  console.error("Resume markdown validation failed:\n");
  for (const { fileName, errors } of allErrors) {
    console.error(`${fileName}:`);
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    console.error("");
  }
  process.exit(1);
}

console.log(`Resume markdown validation passed for ${resumeFiles.length} file(s).`);
