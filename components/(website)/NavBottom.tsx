"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link component
import { IconRug } from "../svg/IconRug";
import { IconMat } from "../svg/IconMat";
import { IconChair } from "../svg/IconChair";
import { IconBed } from "../svg/IconBed";
import { IconTowel } from "../svg/IconTowel";
import { IconGadget } from "../svg/IconGadget";
import { IconBag } from "../svg/IconBag";

const navLinks = [
  {
    title: "Stylish Rugs",
    icon: <IconRug className="h-8 w-8" />,
    link: "/rug",
  },
  {
    title: "Mattresses",
    icon: <IconMat className="h-8 w-8" />,
    link: "#",
  },
  {
    title: "Furniture cover",
    icon: <IconChair className="h-8 w-8" />,
    link: "#",
  },
  {
    title: "Bedsheets",
    icon: <IconBed className="h-8 w-8" />,
    link: "#",
  },
  {
    title: "Bath Towel",
    icon: <IconTowel className="h-8 w-8" />,
    link: "#",
  },
  {
    title: "Gadgets",
    icon: <IconGadget className="h-8 w-8" />,
    link: "#",
  },
  {
    title: "Other Products",
    icon: <IconBag className="h-8 w-8" />,
    link: "#",
  },
];

const NavBottom = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 35); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all gradient duration-300 ease-in-out ${
        isSticky ? "fixed top-0 left-0  shadow-lg" : "relative"
      }`}
    >
      <ul className="container mx-auto flex flex-wrap justify-between items-center uppercase font-Cinzel leading-normal text-base py-6 cursor-pointer ">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="flex items-center gap-1 hover:text-primary-100 text-sm md:text-base"
          >
            <Link href={link.link} className="flex items-center gap-1">
              {link.icon}
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBottom;
