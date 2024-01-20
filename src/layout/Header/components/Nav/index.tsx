import React, { useRef, useState } from "react";
import Button from "@/components/Button";
import { ArrayBottomIcon, ArrowMegaMenu } from "@/components/Icons";
import menuIcon from "@/assets/images/menu-icon.png";
import MenuItem from "./components/Menu/MenuItem";
import { Transition } from "@headlessui/react";
import { isEmpty, isNumber } from "lodash";

export default function Nav() {
  const [selected, setSelected] = useState<number | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

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

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (isEmpty(boxRef.current)) return;
    if (boxRef.current.contains(event.target as Node)) return;
    setSelected(null);
  };

  return (
    <nav className="ml-36">
      <ul className="flex items-center gap-main">
        {navBarList.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={"#"}
              className="flex cursor-pointer items-center gap-[6px] text-[15px] font-medium leading-[50px] text-textPrimary"
            >
              {item.label}
              <ArrayBottomIcon />
            </a>
          </li>
        ))}
      </ul>
      <Transition
        as={React.Fragment}
        show={isNumber(selected)}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 -translate-y-2"
        enterTo="transform opacity-100 translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="transform opacity-100 translate-y-0"
        leaveTo="transform opacity-0 -translate-y-2"
      >
        <div
          ref={boxRef}
          onMouseEnter={() => setSelected(selected)}
          onMouseLeave={() => setSelected(null)}
          className="absolute inset-x-0 top-full mt-6 w-full rounded-[20px] bg-white p-7 dark:bg-bgPrimary dark:text-white shadow-[0px_40px_90px_20px_rgba(23,28,40,0.1)]"
        >
          {/* arrow */}
          {/* <div
            ref={ArrowMegaMenuR
            className="absolute left-1/2 top-[-12px] -translate-x-1/2 transform text-white"
          >
            <ArrowMegaMenu />
          </div> */}
          {/* bridge */}
          <div className="absolute -top-14 left-0 h-1/2 w-full bg-transparent" />
          <div className="grid grid-cols-4">
            {isNumber(selected) &&
              navBarList[selected]?.children.map((item, index) => (
                <MenuItem
                  key={index}
                  label={item.label}
                  image={item.image}
                  list={item.list}
                />
              ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
}
