import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about-us"}>About Us</Link>
      <Link href={"/contact-us"}>Contact Us</Link>
      <Link href={"/services"}>Services</Link>
    </div>
  );
};

export default Nav;
