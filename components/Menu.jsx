"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function Menu({ className, onLinkClick = () => {} }) {
  const pathname = usePathname();

  return links.map((link, i) => (
    <Link
      key={i}
      href={link.path}
      onClick={onLinkClick}
      className={`${className}${
        link.path === pathname ? " text-accent border-b-2 border-accent" : ""
      }`}
    >
      {link.name}
    </Link>
  ));
}

export default Menu;
