import React from "react";
import Button from "@/components/Button";
import { ArrayBottomIcon } from "@/components/Icons";
// import MenuMegaTitle from './MenuMegaTitle';

export default function Nav() {
  const navBarList = [
    {
      title: "Department",
      link: "#",
      children: [
        {
          type: "group",
          title: "All Department",
        },
      ],
    },
    {
      title: "Grocery",
      link: "#",
    },
    {
      title: "Beauty",
      link: "#",
    },
  ];

  return (
    <nav className="ml-36">
      <ul className="flex items-center gap-[30px]">
        {navBarList.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="flex cursor-pointer items-center gap-[6px] text-[15px] font-medium leading-[50px] text-textPrimary "
            >
              {item.title}
              <ArrayBottomIcon />
            </a>

            {/* <div className="absolute inset-x-0 pt-[54px]">
              <div className="bg-bgWhite shadow-[0_40px_90px_20px_rgba(200,200,200,0.40)] rounded-[20px] py-[30px] pl-[30px] pr-[62px]">
                <MenuMegaTitle title="All Departments" backgroundIcon={} icon={} />
              </div>
            </div> */}
          </li>
        ))}
      </ul>
    </nav>
  );
}
