'use client';

import { useState, useEffect } from "react";

const MOBILE_WIDTH = 768;

export type TScreenType = "mobile" | "tablet" | "desktop";

export const useDeviceType = (layout: TScreenType = "desktop") => {
  const [device, setDevice] = useState<TScreenType>(layout);

  useEffect(() => {
    let _layout = layout;
    const handleResize = () => {
      if (window.innerWidth < MOBILE_WIDTH && _layout != "mobile") {
        _layout = "mobile";
        setDevice("mobile");
      } else if (window.innerWidth >= MOBILE_WIDTH) {
        _layout = "desktop";
        setDevice("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return device;
};
