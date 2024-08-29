import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Products",
    items: [
      { title: "Styling Rugs", link: "#" },
      { title: "Chair & Sofa Covers", link: "#" },
      { title: "Bedsheets", link: "#" },
      { title: "Gadgets", link: "#" },
      { title: "Other Products", link: "#" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { title: "Home", link: "#" },
      { title: "About Us", link: "#" },
      { title: "Cart", link: "#" },
      { title: "Contact Us", link: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Shipping Policy", link: "#" },
      { title: "Refund Policy", link: "#" },
      { title: "Privacy Policy", link: "#" },
      { title: "Terms of Services", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Footer top */}
        <div className="flex flex-col md:flex-row justify-between py-12 space-y-8 md:space-y-0">
          {/* About footer Starts */}
          <div className="aboutFoot">
            <Link
              href="/"
              className="text-gradient font-normal text-2xl pb-4 font-Cinzel"
            >
              <span>E</span>
              <span className="font-bold font-CinzelDecorative">V</span>ohome
            </Link>
            <p className="text-baba mb-4">
              Behind Subidhanagar Bigmart,
              <br />
              Kathmandu, Bagmati, Nepal 44660
            </p>
            <p className="text-baba">
              Phone:
              <a href="tel:980000000" className="hover:text-primary-400">
                980000000
              </a>
              <br />
              Email:
              <a
                href="mailto:evohome@gmail.com"
                className="hover:text-primary-400"
              >
                evohome@gmail.com
              </a>
            </p>
          </div>

          {/* Dynamic Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="text-baba">
              <h2 className="text-gradient font-normal text-2xl pb-4 font-Cinzel">
                {section.title}
              </h2>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li className="hover:text-primary-400 mb-2" key={itemIndex}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 py-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-baba mb-4 md:mb-0">
            2024 Evohome | All rights reserved.
          </p>
          <p className="text-footA">
            Design & Developed by <span className="text-gradient">WebX</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
