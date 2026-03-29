import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      image: "/2.png",
      title: "Sistem Memprediksi Kebutuhan Obat",
      description: "Neural Network LSTM untuk memprediksi kebutuhan obat.",
    },
    {
      image: "/3.png",
      title: "Pengelolahan Harga Produksi Pangan",
      description: "Sistem manajemen harga pangan di kabupaten minahasa",
    },
  ];

  return (
    <section id="projects" className="bg-slate-300 pt-36 pb-16">
      <div className="w-full px-4">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl">
            Projects
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
        {projects.map((project, index) => (
          <div key={index} className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={510}
                height={250}
              />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-black">
              {project.title}
            </h3>
            <p className="text-base font-medium text-gray-800">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
