"use client";

import { useState, useEffect } from "react";

const MOBILE_WIDTH = 768;

const TABLET_WIDTH = 1024;

export type TScreenType = "mobile" | "tablet" | "desktop";

export const useDeviceType = () => {
  const [device, setDevice] = useState<TScreenType>();

  const handleResize = () => {
    const { innerWidth } = window;

    if (innerWidth < MOBILE_WIDTH) {
      setDevice("mobile");
    } else if (innerWidth < TABLET_WIDTH) {
      setDevice("tablet");
    } else {
      setDevice("desktop");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return device;
};
