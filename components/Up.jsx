"use client";
import { useState, useEffect } from "react";

export default function Up() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#top"
      className={`${show ? "flex" : "hidden"} bg-[#E9EBED] fixed bottom-4 right-4 z-9999 h-13 w-13 items-center justify-center rounded-full p-4 hover:animate-pulse dark:bg-black`}
      id="to-top"
    >
      <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
    </a>
  );
}
