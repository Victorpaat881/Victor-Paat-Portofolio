import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      image: "/1.png",
      title: "Task Manager",
      description: `Task Manager adalah aplikasi web sederhana yang digunakan untuk membantu pengguna mengelola aktivitas atau daftar tugas harian. Aplikasi ini memungkinkan pengguna untuk menambahkan, menandai, dan menghapus tugas sehingga membantu meningkatkan produktivitas dalam mengatur pekerjaan.
        
        Aplikasi ini juga ada fitur filter tugas (All, Active, Completed) dan penghitung tugas yang belum selesai.`,
      techStack: "React.js/Next.js | TailwindCSS | REST API",
    },
    {
      image: "/2.png",
      title: "Sistem Memprediksi Kebutuhan Obat",
      description: `Sistem Memprediksi Kebutuhan Obat merupakan aplikasi berbasis web yang menggunakan algoritma Neural Network dengan metode Long Short-Term Memory (LSTM) untuk memprediksi kebutuhan obat di Puskesmas Kelurahan Lansot, Tomohon.

      Model machine learning dilatih menggunakan data historis penggunaan obat untuk membantu tenaga kesehatan dalam memperkirakan jumlah permintaan obat di masa mendatang sehingga dapat mengurangi risiko kekurangan atau kelebihan stok.`,
      techStack:
        "Python | Machine Learning | Neural Network | PHP | Codeigniter | MySQL | JavaScript | REST API",
    },
    {
      image: "/3.png",
      title: "Pengelolahan Harga Produksi Pangan",
      description:
        "Sistem Pengelolaan Harga Produksi Pangan adalah aplikasi web yang digunakan untuk mengelola data harga komoditas pangan di Kabupaten Minahasa. Sistem ini memungkinkan admin untuk menambahkan, memperbarui, dan mengelola data harga produk pangan sehingga informasi harga dapat dipantau dengan lebih terstruktur dan efisien.",
      techStack: "PHP | Codeigniter | DataTables | MySQL",
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
            <p className="text-base mb-3 font-medium text-gray-800 whitespace-pre-line">
              {project.description}
            </p>
            <p className="text-base font-normal text-gray-500">
              Tech Stack: <br />
              {project.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
