import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-pr1 md:p-[40px]">
      <div className="mb-5 flex flex-col md:flex-row gap-10 text-pr3 border-pr3 border-b pb-5">
        <div>
          <p className="font-bold mb-3 text-base text-pr4">Services</p>
          <div className="text-sm flex flex-col gap-1">
            <span>Web Devolopment</span>
            <span>Web Design</span>
            <span>Poster, Banner Design</span>
            <span>Data Analytics</span>
            <span>Web Devolopment</span>
          </div>
        </div>
        <div>
          <p className="font-bold mb-3 text-base text-pr4">Pages</p>
          <div className="text-sm flex flex-col gap-1">
            <Link href={"/about-us"}>
              <span>About Us</span>
            </Link>
            <Link href={"/contact-us"}>
              <span>Contact Us</span>
            </Link>
            <Link href={"/term-condition"}>
              <span>Term of Conditions</span>
            </Link>
            <Link href={"/services"}>
              <span>Services</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-pr4 gap-3 justify-center items-center md:justify-between">
        <div className="order-2">Copyright © 2023</div>
        <div className="flex text-xl cursor-pointer items-center gap-1">
          <FaSquareXTwitter />
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaGithubSquare />
        </div>
      </div>
    </div>
  );
};

export default Footer;
