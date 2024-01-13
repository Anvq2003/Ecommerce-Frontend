import Image from "next/image";
import * as React from "react";
import product from "@/images/product.png";
import { BagIcon, CartIcon, CompareIcon, StarIcon } from "@/components/Icons";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { ISelectOption } from "@/shared/types";

export interface IProductInfoProps {}

export default function ProductInfo(props: IProductInfoProps) {
  const sizes: ISelectOption[] = [
    {
      label: "Small",
      value: "small",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "Large",
      value: "large",
    },
  ];

  const unit: ISelectOption[] = [
    {
      label: "Kg",
      value: "kg",
    },
    {
      label: "Gram",
      value: "gram",
    },
    {
      label: "Pound",
      value: "pound",
    },
  ];

  const listInfo = [
    {
      label: "Compare",
      icon: <CompareIcon size={20} />,
    },
    {
      label: "Delivery",
      icon: <CartIcon />,
      description: "From $6 for 1-3 days",
    },
    {
      label: "Compare",
      icon: <BagIcon />,
      description: "Out of 2 store, today",
    },
  ];

  return (
    <div className="flex">
      <div className="w-5/12">
        <Image src={product} alt="" width={500} height={500} quality={100} />
      </div>
      <div className="flex w-7/12 flex-col gap-[30px] bg-bgPrimary p-[60px]">
        <h1 className="line-clamp-2 text-[26px] font-medium text-textPrimary">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </h1>

        <div className="flex gap-[60px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex gap-4">
              <StarIcon isFilled={true} />
              <h3 className="text-textPrimary">(3.5) 1100 reviews</h3>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-[22px] font-medium text-textPrimary">
                Size/Weight
              </h2>
              {/* <Select
                labelPlacement="outside"
                label="Favorite Animal"
                className="max-w-xs"
              >
                  <SelectItem key={1} value={1}>
                    {1}
                  </SelectItem>
              </Select> */}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            {listInfo.map((item, index) => (
              <div key={index} className="flex gap-4">
                {item.icon}
                <div className="flex flex-col gap-2 text-textPrimary">
                  <h3 className="text-lg font-medium leading-4">
                    {item.label}
                  </h3>
                  {item.description && <p>{item?.description}</p>}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-5 rounded-md border-[#B9BABE] p-5">
              <div className="flex gap-[10px]">
                <h5 className="text-black">$500.00</h5>
                <div className="bg-[#67B044] px-2 py-0.5 text-[#67B044]">
                  10%
                </div>
              </div>
              <h1 className="text-black">$540.00</h1>
              <div className="flex gap-5">
                <Button>
                  Buy Now
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
