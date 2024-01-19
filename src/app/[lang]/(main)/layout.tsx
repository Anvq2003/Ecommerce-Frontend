import React from "react";
import Header from "@/layout/Header";

export default function DefaultLayout({ children }: any) {
  return (
    <div className="bg-bgSecondary">
      <Header />
      <main>{children}</main>
    </div>
  );
}
