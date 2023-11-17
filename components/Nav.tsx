import connectDB from "@/db";
import { userSchema } from "@/models/user";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";
import React from "react";

const Nav = async () => {

  // redirect("https://github.com")
  return (
    <div className="flex h-[60px] items-center text-pr1 top-0 left-0 px-[40px] justify-between">
      <div>Logo</div>
      <div className="flex gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/about-us"}>About Us</Link>
        <Link href={"/contact-us"}>Contact Us</Link>
        <Link href={"/services"}>Services</Link>
      </div>
    </div>
  );
};


export default Nav;
