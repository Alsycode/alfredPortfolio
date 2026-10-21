import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaLayerGroup,
  FaUsers,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiFigma,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  { id: "html-css", name: "HTML & CSS", level: 85, Icon: FaCode },
  { id: "react", name: "React JS", level: 92, Icon: FaReact },
  { id: "javascript", name: "JavaScript", level: 78, Icon: SiJavascript },
  { id: "next", name: "Next.js", level: 88, Icon: SiNextdotjs },
  { id: "node", name: "Node.js", level: 82, Icon: FaNodeJs },
  { id: "mongodb", name: "MongoDB", level: 76, Icon: SiMongodb },
  { id: "uiux", name: "UI/UX Design", level: 80, Icon: SiFigma },
];

export const stats = [
  { id: "years", value: "3+", label: ["Years", "Experience"], Icon: FaCode },
  { id: "projects", value: "20+", label: ["Projects", "Completed"], Icon: FaLayerGroup },
  { id: "clients", value: "100%", label: ["Client", "Focused"], Icon: FaUsers },
];

export const techStack = [
  { id: "react", name: "React", Icon: FaReact, color: "#61dafb" },
  { id: "next", name: "Next.js", Icon: SiNextdotjs, color: "#eae7f4" },
  { id: "node", name: "Node.js", Icon: FaNodeJs, color: "#5fa04e" },
  { id: "javascript", name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { id: "typescript", name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { id: "mongodb", name: "MongoDB", Icon: SiMongodb, color: "#13aa52" },
  { id: "express", name: "Express.js", Icon: SiExpress, color: "#eae7f4" },
  { id: "tailwind", name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { id: "sass", name: "Sass", Icon: SiSass, color: "#cf649a" },
  { id: "git", name: "Git", Icon: FaGitAlt, color: "#f1502f" },
  { id: "figma", name: "Figma", Icon: FaFigma, color: "#a259ff" },
  { id: "vscode", name: "VS Code", Icon: VscVscode, color: "#22a7f0" },
  { id: "docker", name: "Docker", Icon: FaDocker, color: "#2496ed" },
];

export const aboutParagraphs = [
  "I'm a Full Stack Developer with 3 years of professional experience building and shipping web applications. Throughout my career, I've had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
  "My passion for development goes beyond just code — I enjoy solving real-world problems, creating modern and intuitive user experiences, and continuously learning new technologies.",
];
