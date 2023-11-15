import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between bg-pr1 p-10">
      <div>Copyright © 2023</div>
      <div className="flex text-xl cursor-pointer items-center gap-1">
        <FaSquareXTwitter />
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaGithubSquare />
      </div>
    </div>
  );
};

export default Footer;
