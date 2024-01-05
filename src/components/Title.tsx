import Link from "next/link";
import React from "react";

interface ITitle {
  title: string;
  className?: string;
}

export default function Title({ title, className }: ITitle) {
  return (
    <h2 className={`textPrimary w-full text-2xl font-bold ${className}`}>
      {title}
    </h2>
  );
}
