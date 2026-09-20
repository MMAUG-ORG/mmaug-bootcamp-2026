import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const daysDirectory = path.join(root, "days");
const labMapPath = path.join(root, "resources", "session-labs.json");
const sourceUrl = process.env.PROGRAMME_SOURCE_URL || "https://mmaug.com/api/sessionize/sessions";
const reviewDeadline = "Wednesday, 30 September 2026 at 14:00 CEST (Malta time)";
const capstoneDeadline = "Saturday, 14 November 2026 at 23:59 CET (Malta time)";

const response = await fetch(sourceUrl, { headers: { accept: "application/json" } });
if (!response.ok) throw new Error(`Programme endpoint returned HTTP ${response.status}.`);
const payload = await response.json();
if (!payload || !Array.isArray(payload.sessions)) throw new Error("Programme endpoint did not return a sessions array.");

const publishedSessions = payload.sessions
  .filter((session) => session && typeof session.id === "string" && typeof session.title === "string" && typeof session.startsAt === "string")
  .filter((session) => session.startsAt.slice(0, 7) === "2026-10");
const capstoneSessions = [
  { id: "capstone-recruitment-assistant", title: "Hands-on Project: Recruitment Assistant", description: "Build an AI-assisted recruitment workflow that can review candidate information, support shortlisting and explain its recommendations responsibly.", startsAt: "2026-10-28T18:00:00+01:00", endsAt: "2026-10-28T19:00:00+01:00", speakers: [{ name: "MMAUG Capstone Facilitators" }] },
  { id: "capstone-insurance-claims-agent", title: "Hands-on Project: Insurance Claims Agent", description: "Create an agent that captures a claim, validates supplied information and produces a traceable recommendation for human review.", startsAt: "2026-10-28T19:00:00+01:00", endsAt: "2026-10-28T20:00:00+01:00", speakers: [{ name: "MMAUG Capstone Facilitators" }] },
  { id: "capstone-school-login-portal", title: "Hands-on Project: School Login Portal", description: "Build a secure school portal login experience with role-aware access, validation and clear authentication error handling.", startsAt: "2026-10-29T18:00:00+01:00", endsAt: "2026-10-29T20:00:00+01:00", speakers: [{ name: "MMAUG Capstone Facilitators" }] },
  { id: "capstone-taxi-recommender", title: "Hands-on Project: Taxi Recommender using Bolt and Uber APIs", description: "Design a taxi recommendation experience that compares available options through the Bolt and Uber APIs while handling credentials, availability and API failures safely.", startsAt: "2026-10-30T18:00:00+01:00", endsAt: "2026-10-30T20:00:00+01:00", speakers: [{ name: "MMAUG Capstone Facilitators" }] },
  { id: "capstone-financial-fraud-detection", title: "Hands-on Project: Financial Fraud Detection Agent", description: "Develop an explainable fraud-detection agent that evaluates transaction signals, flags suspicious activity and keeps a human reviewer in control.", startsAt: "2026-10-31T18:00:00+01:00", endsAt: "2026-10-31T20:00:00+01:00", speakers: [{ name: "MMAUG Capstone Facilitators" }] },
];
const publishedKeys = new Set(publishedSessions.map((session) => `${session.title.trim().toLowerCase()}|${session.startsAt.slice(0, 10)}`));
const sessions = [...publishedSessions, ...capstoneSessions.filter((session) => !publishedKeys.has(`${session.title.toLowerCase()}|${session.startsAt.slice(0, 10)}`))]
  .sort((left, right) => left.startsAt.localeCompare(right.startsAt));
const existingLabMap = JSON.parse(await readFile(labMapPath, "utf8").catch(() => "{}"));
const labMap = Object.fromEntries(sessions.map((session) => [session.id, typeof existingLabMap[session.id] === "string" ? existingLabMap[session.id] : ""]));

const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Malta" });
const timeFormatter = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone: "Europe/Malta" });
const generatedOn = dateFormatter.format(new Date());
const cleanTitle = (value) => value.trim().replace(/\s+/g, " ");
const speakerNames = (session) => session.speakers?.map((speaker) => speaker.name?.trim()).filter(Boolean).join(", ") || "MMAUG facilitator to be confirmed";
const sessionTime = (session) => `${timeFormatter.format(new Date(session.startsAt))}–${timeFormatter.format(new Date(session.endsAt || session.startsAt))}`;
const markdownText = (value) => String(value || "Session details will be provided by the facilitator.").trim().replace(/\r\n/g, "\n").replace(/[<>]/g, "").replace(/\n{3,}/g, "\n\n");
const tableText = (value) => String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
const labCell = (session) => labMap[session.id] ? `[Open lab repository](${labMap[session.id]})` : "_Awaiting speaker submission_";
const isoDate = (day) => `2026-10-${String(day).padStart(2, "0")}`;
const fileName = (day) => `day-${String(day).padStart(2, "0")}.md`;

const byDate = new Map();
for (const session of sessions) {
  const date = session.startsAt.slice(0, 10);
  byDate.set(date, [...(byDate.get(date) || []), session]);
}

await mkdir(daysDirectory, { recursive: true });
for (const file of await readdir(daysDirectory)) {
  if (/^day-\d{2}.*\.md$/.test(file)) await rm(path.join(daysDirectory, file));
}

const indexRows = [];
const scheduleRows = [];
for (let day = 1; day <= 31; day += 1) {
  const date = isoDate(day);
  const dateLabel = dateFormatter.format(new Date(`${date}T12:00:00Z`));
  const daySessions = byDate.get(date) || [];
  const isSunday = new Date(`${date}T12:00:00Z`).getUTCDay() === 0;
  let body;

  if (daySessions.length) {
    const sections = daySessions.map((session, index) => {
      const repository = labMap[session.id] ? `[${labMap[session.id]}](${labMap[session.id]})` : "_Awaiting speaker submission and MMAUG content review._";
      return `${daySessions.length > 1 ? `## Session ${index + 1}: ` : "## "}${cleanTitle(session.title)}\n\n- **Time:** ${sessionTime(session)} Malta time\n- **Speaker(s):** ${speakerNames(session)}\n- **Public lab repository:** ${repository}\n\n### Session overview\n\n${markdownText(session.description)}\n\n### Lab resource requirements\n\nThe public repository should provide prerequisites, setup steps, guided exercises, sample files, validation steps, and cleanup guidance where cloud resources can incur cost. Speaker materials are due by **${reviewDeadline}**.\n\n### Learner checklist\n\n- Review the prerequisites before the live session.\n- Open or clone the approved lab repository when its link is published.\n- Complete the guided activity and keep notes in your personal bootcamp repository.\n- Record questions, blockers, and evidence of your completed work.`;
    }).join("\n\n---\n\n");
    body = `# Day ${String(day).padStart(2, "0")} — ${daySessions.map((session) => cleanTitle(session.title)).join(" / ")}\n\n**Date:** ${dateLabel}\n\n${sections}\n`;
    for (const session of daySessions) scheduleRows.push(`| ${dateFormatter.format(new Date(session.startsAt))} | ${sessionTime(session)} | [${tableText(cleanTitle(session.title))}](days/${fileName(day)}) | ${tableText(speakerNames(session))} | ${labCell(session)} |`);
    indexRows.push(`| ${day} | ${dateLabel} | [${tableText(daySessions.map((session) => cleanTitle(session.title)).join(" / "))}](${fileName(day)}) | ${tableText(daySessions.map(speakerNames).join(" / "))} |`);
  } else if (isSunday) {
    body = `# Day ${String(day).padStart(2, "0")} — Rest day\n\n**Date:** ${dateLabel}\n\nThere is no scheduled live bootcamp session. Use the day to rest, catch up on incomplete labs, organize your notes, and check the [live programme](https://mmaug.com/bootcamp) for later updates.\n`;
  } else {
    body = `# Day ${String(day).padStart(2, "0")} — Schedule pending\n\n**Date:** ${dateLabel}\n\nNo session is currently published for this date. The [MMAUG bootcamp calendar](https://mmaug.com/bootcamp) is the source of truth and this page should be regenerated after an administrator publishes a session.\n`;
    indexRows.push(`| ${day} | ${dateLabel} | [Schedule pending](${fileName(day)}) | To be announced |`);
  }
  if (day === 31) body += `\n## Final capstone submission\n\nLearners have two weeks from the final workshop to complete and submit one documented capstone project. The submission deadline for certificate review is **${capstoneDeadline}**.\n`;
  await writeFile(path.join(daysDirectory, fileName(day)), `${body}\n`, "utf8");
}

const index = `# Daily Programme Index\n\nThis folder mirrors the sessions currently published on the [MMAUG bootcamp page](https://mmaug.com/bootcamp). It was generated on **${generatedOn}** with \`node scripts/sync-live-programme.mjs\`. All times are Malta local time.\n\n| Day | Date | Published session or status | Speaker(s) |\n| --- | --- | --- | --- |\n${indexRows.join("\n")}\n\n## Updating the programme\n\n1. Add or update sessions in the MMAUG administration calendar.\n2. Add reviewed public lab URLs to [\`resources/session-labs.json\`](../resources/session-labs.json), keyed by session ID.\n3. Run \`node scripts/sync-live-programme.mjs\` from the repository root.\n4. Review the generated changes before committing them.\n\nThe generator preserves repository URLs for sessions that remain in the feed and adds an empty mapping for each new session.\n`;
await writeFile(path.join(daysDirectory, "README.md"), index, "utf8");

const schedule = `# 2026 Live Programme and Speaker Lab Repositories\n\nThis schedule reflects the sessions published on the [MMAUG bootcamp page](https://mmaug.com/bootcamp) as of **${generatedOn}**. All times are Malta local time. The website calendar remains the source of truth.\n\nSpeakers should publish practical resources in a public GitHub repository and send the link by **${reviewDeadline}**. Add approved URLs to [\`resources/session-labs.json\`](resources/session-labs.json), then run \`node scripts/sync-live-programme.mjs\`.\n\n| Date | Time | Session | Speaker(s) | Speaker lab repository |\n| --- | --- | --- | --- | --- |\n${scheduleRows.join("\n")}\n\n## Minimum lab repository checklist\n\nEach public speaker repository should contain:\n\n- a clear README and learning objectives;\n- prerequisites and setup instructions;\n- step-by-step lab instructions;\n- sample code, templates, prompts, or other learner files;\n- cleanup instructions where cloud resources can incur cost; and\n- a license or reuse statement for the published materials.\n\nDo not add a repository link until it opens without authentication and the content review is complete.\n`;
await writeFile(path.join(root, "PROGRAMME-SCHEDULE.md"), schedule, "utf8");
await writeFile(labMapPath, `${JSON.stringify(labMap, null, 2)}\n`, "utf8");
console.log(`Synchronized ${sessions.length} published sessions across 31 October day files.`);
