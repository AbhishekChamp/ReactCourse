import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA",
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D",
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF",
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33",
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB",
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00",
    },
];

function Avatar() {
    return (
        <div>
            <img src='./img/coderdeck_post.png' alt='Profile' />
            <h1>Coderdeck</h1>
        </div>
    );
}

function Intro() {
    return (
        <p>
            IT professional with 4 years of experience, specializing in
            versatile development across a wide range of technologies.
            Demonstrated expertise in Axiom, Oracle, Data Analytics, Machine
            Learning, App Development, and Web Development. Committed to
            continuous learning and skill expansion, staying up to date with
            industry trends. Passionate about sharing knowledge and actively
            engaged as a part-time content creator, educating and empowering
            others in coding. Proficient in utilizing over 20 Python libraries,
            applying them to drive efficient and innovative solutions.
        </p>
    );
}

function Skill({ skill, color, level }) {
    return (
        <div className='skill' style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
        </div>
    );
}

function SkillList() {
    return (
        <div className='skill-list'>
            {skills.map((skill) => (
                <Skill
                    skill={skill.skill}
                    color={skill.color}
                    level={skill.level}
                />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className='card'>
            <Avatar />
            <div className='data'>
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
