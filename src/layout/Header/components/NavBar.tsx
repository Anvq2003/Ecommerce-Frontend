import React from "react";
import Button from "@/components/Button";
import { ArrayBottomIcon } from "@/components/Icons";
import menuIcon from "@/assets/images/menu-icon.png";
import MenuItem from "./Menu/MenuItem";
// import MenuMegaTitle from './MenuMegaTitle';

export default function Nav() {
  const navBarList = [
    {
      label: "Departments",
      link: "/departments",
      children: [
        {
          image: menuIcon,
          label: "Departments",
          link: "/departments",
          list: [
            {
              label: "Departments",
              link: "/departments",
            },
            {
              label: "Departments 2",
              link: "/departments ",
            },
          ],
        },
        {
          image: menuIcon,
          label: "Departments",
          list: [
            {
              label: "Departments",
              link: "/departments",
            },
            {
              label: "Departments 2",
              link: "/departments ",
            },
          ],
        },
        {
          image: menuIcon,
          label: "Departments",
          list: [
            {
              label: "Departments",
              link: "/departments",
            },
            {
              label: "Departments 2",
              link: "/departments ",
            },
          ],
        },
        {
          image: menuIcon,
          label: "Departments",
          list: [
            {
              label: "Departments",
              link: "/departments",
            },
            {
              label: "Departments 2",
              link: "/departments ",
            },
          ],
        },
        {
          image: menuIcon,
          label: "Departments",
          list: [
            {
              label: "Departments",
              link: "/departments",
            },
            {
              label: "Departments 2",
              link: "/departments ",
            },
          ],
        },
        {
          image: menuIcon,
          label: "Departments",
          list: [
            {
              label: "Departments",
              link: "/departments",
            },
            {
              label: "Departments 2",
              link: "/departments ",
            },
          ],
        },
      ],
    },
    {
      label: "Departments",
      children: [
        {
          image: menuIcon,
          label: "Departments 2",
          list: [
            {
              label: "Departments 2",
              link: "/departments 2",
            },
          ],
        },
      ],
    },
  ];


  return (
    <nav className="ml-36">
      <ul className="flex items-center gap-[30px]">
        {navBarList.map((item, index) => (
          <li className="group/item" key={index}>
            <a
              href={"#"}
              className="flex cursor-pointer items-center gap-[6px] text-[15px] font-medium leading-[50px] text-textPrimary"
            >
              {item.label}
              <ArrayBottomIcon />
            </a>

            <div className="absolute inset-x-0 invisible w-full rounded-[20px] bg-white p-7 group-hover/item:visible ease-out duration-300">
              <div className="grid grid-cols-4">
                {item?.children?.map((child, index) => (
                  <MenuItem
                    key={index}
                    label={child.label}
                    image={child.image}
                    list={child.list}
                  />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
