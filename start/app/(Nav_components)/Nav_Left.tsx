import React from "react";
import Image from "next/image";
import Link from "next/link";
function Nav_Left() {
  return (
    <Link href={"/"} className="w-auto h-auto flex flex-row items-center">
      <Image
        src={"/crowdlogo.jpg"}
        width={40}
        height={40}
        alt="Hyat Myat"
        className="  cursor-pointer  hover:animate-slowspin  "
      />
      <span
        className=" font-bold  text-gray-300  ml-[10px] hidden 310:flex "
      >
        CrowdScape
      </span>
    </Link>
  );
}

export default Nav_Left;
