export function Skills() {
  const skills = [
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills">
      <div className="mb-2 flex items-center gap-2 px-4">
        <span className="text-sm">✦</span>
        <h2 className="text-sm font-medium text-[#5B5A5C]">My Skills</h2>
      </div>{" "}
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
        {skills.map((skill) => (
          <p
            key={skill}
            className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#141316] shadow-sm"
          >
            {skill}
          </p>
        ))}
      </div>
    </section>
  );
}
