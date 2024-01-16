import React from "react";

import { CartIcon, HeartIcon } from "@/components/Icons";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionItem, ScrollShadow } from "@nextui-org/react";
import MenuItem from "../Nav/components/Menu/MenuItem";
import menuIcon from "/public/assets/images/menu-icon.png";

interface IContentProps {
  onClickClose: () => void;
}

export default function Content({ onClickClose }: IContentProps) {
  const actions = [
    {
      label: "Cart",
      icon: <CartIcon />,
      number: 2,
      onClick: () => {},
    },
    {
      label: "Favorite",
      icon: <HeartIcon />,
      number: 2,
      onClick: () => {},
    },
  ];

  const menu = [
    {
      label: "Departments",
      children: [
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
      label: "Departments 2",
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

  const itemClasses = {
    base: "p-0 w-full",
    title: "text-[16px] font-medium text-textPrimary",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-11 flex items-center",
    indicator: "text-textPrimary",
  };

  return (
    <div className=" flex h-full flex-col overflow-y-auto bg-white p-5 shadow-xl dark:bg-bgPrimary">
      <ArrowLeftIcon
        className="h-6 w-6 cursor-pointer text-textPrimary"
        onClick={onClickClose}
      />
      <div>
        {actions.map((action) => (
          <div key={action.label} className="my-5 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-textPrimary">
                {action.icon}
                <p className="text-[15px] font-medium">{action.label}</p>
              </div>
              <span className="text-[15px] font-medium text-textPrimary">
                {action.number}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Accordion
          className="p-0"
          showDivider={false}
          itemClasses={itemClasses}
        >
          {menu.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.label}
              title={item.label}
            >
              <ScrollShadow className="max-h-[500px] w-full px-1">
                {item?.children?.map((child) => (
                  <MenuItem
                    key={child.label}
                    image={child.image}
                    label={child.label}
                    list={child.list}
                  />
                ))}
              </ScrollShadow>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
