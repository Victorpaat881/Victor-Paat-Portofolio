export default function Skills() {
  const skills = [
    "JavaScript",
    "Jquery",
    "DataTables",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Bootstrap",
    "Node.js",
    "PHP",
    "CodeIgniter",
    "Laravel",
    "MySQL",
    "Python",
    "Machine Learning",
    "Neural Network",
    "Git",
  ];

  return (
    <section id="skills" className="bg-gray-170 py-20 dark:bg-gray-800">
      <h2 className="text-3xl font-bold sm:text-4xl text-gray-800 text-center mb-10 dark:text-white">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white px-4 py-2 rounded-lg border-2 text-gray-700 shadow dark:bg-gray-600 dark:text-gray-300 dark:border-0"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
