export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-900 text-white">
      <p className="text-sm">
        Dibuat menggunakan{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="font-bold text-sky-500"
        >
          Tailwind CSS
        </a>{" "}
        dan{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          className="font-bold text-sky-500"
        >
          Next.JS
        </a>
      </p>
    </footer>
  );
}
