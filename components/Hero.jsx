export default function Hero() {
  return (
    <section
      id="home"
      className="text-center py-32 bg-gray-170 dark:bg-gray-800"
    >
      <h1 className="text-base font-semibold md:text-xl">
        Halo Semua 👋, saya
      </h1>
      <h1 className="text-5xl font-bold text-gray-800 mb-4 dark:text-white">
        Victor Paat
      </h1>

      <p className="text-xl text-gray-600 mb-6 dark:text-gray-400">
        Full Stack Web Developer
      </p>

      <a
        href="#projects"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 dark:border"
      >
        View My Projects
      </a>
    </section>
  );
}
