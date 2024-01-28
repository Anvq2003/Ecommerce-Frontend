import React, { useRef, useState } from "react";
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
              className="flex cursor-pointer items-center gap-[6px] text-[15px] font-medium leading-[50px] text-primary"
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


// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
// import {
//   ChevronDownIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
// import {
//   Bars4Icon,
//   GlobeAmericasIcon,
//   NewspaperIcon,
//   PhoneIcon,
//   RectangleGroupIcon,
//   SquaresPlusIcon,
//   SunIcon,
//   TagIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/solid";
 
// const navListMenuItems = [
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: SquaresPlusIcon,
//   },
//   {
//     title: "About Us",
//     description: "Meet and learn about our dedication",
//     icon: UserGroupIcon,
//   },
//   {
//     title: "Blog",
//     description: "Find the perfect solution for your needs.",
//     icon: Bars4Icon,
//   },
//   {
//     title: "Services",
//     description: "Learn how we can help you achieve your goals.",
//     icon: SunIcon,
//   },
//   {
//     title: "Support",
//     description: "Reach out to us for assistance or inquiries",
//     icon: GlobeAmericasIcon,
//   },
//   {
//     title: "Contact",
//     description: "Find the perfect solution for your needs.",
//     icon: PhoneIcon,
//   },
//   {
//     title: "News",
//     description: "Read insightful articles, tips, and expert opinions.",
//     icon: NewspaperIcon,
//   },
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: RectangleGroupIcon,
//   },
//   {
//     title: "Special Offers",
//     description: "Explore limited-time deals and bundles",
//     icon: TagIcon,
//   },
// ];
 
// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description }, key) => (
//       <a href="#" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
//             {" "}
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 text-gray-900 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm font-bold"
//             >
//               {title}
//             </Typography>
//             <Typography
//               variant="paragraph"
//               className="text-xs !font-medium text-blue-gray-500"
//             >
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     ),
//   );
 
//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-medium">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }
 
// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
//       </Typography>
//       <NavListMenu />
//       <Typography
//         as="a"
//         href="#"
//         variant="small"
//         color="blue-gray"
//         className="font-medium"
//       >
//         <ListItem className="flex items-center gap-2 py-2 pr-4">
//           Contact Us
//         </ListItem>
//       </Typography>
//     </List>
//   );
// }
 
// export function MegaMenuWithHover() {
//   const [openNav, setOpenNav] = React.useState(false);
 
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//   }, []);
 
//   return (
//     <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           variant="h6"
//           className="mr-4 cursor-pointer py-1.5 lg:ml-2"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           className="lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//       </Collapse>
//     </Navbar>
//   );
// }