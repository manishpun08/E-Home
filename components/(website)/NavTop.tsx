"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { IconSearch } from "../svg/IconSearch";
import { IconCart } from "../svg/IconCart";

const headerLink = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About us",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavTop = () => {
  return (
    <Disclosure as="nav" className="bg-background">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-gradient font-normal text-2xl font-Cinzel"
            >
              <span> E</span>
              <span className="font-bold font-CinzelDecorative">V</span>ohome
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* NavLinks for larger screens */}
          <div className="hidden sm:block sm:ml-6 text-white font-PlusJakartaSans leading-normal text-sm">
            <ul className="flex gap-10 items-center">
              {headerLink.map((item, index) => (
                <Link
                  key={index}
                  className={item.title === "Home" ? "text-gradient" : ""}
                  href={item.link}
                >
                  {item.title}
                </Link>
              ))}
              <IconSearch className="cursor-pointer leading-normal text-2xl" />
              <IconCart className="cursor-pointer leading-normal text-2xl" />
              <Link href="/">Sign In</Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3">
          {headerLink.map((item) => (
            <DisclosureButton
              key={item.title}
              as="a"
              href={item.link}
              className={classNames(
                item.title === "Home"
                  ? "text-gradient"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium font-PlusJakartaSans text-center"
              )}
            >
              {item.title}
            </DisclosureButton>
          ))}
          <IconSearch className="cursor-pointer text-light leading-normal text-2xl" />
          <IconCart className="cursor-pointer text-light leading-normal text-2xl" />
          <DisclosureButton
            as="a"
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-center"
          >
            Sign In
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavTop;
