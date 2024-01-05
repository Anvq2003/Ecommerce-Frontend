import { useState, useEffect } from "react";

const MOBILE_WIDTH = 768;

export const useDeviceType = (
  layout: "mobile" | "tablet" | "desktop" = "desktop",
) => {
  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">(layout);

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
  }, []);

  return device;
};
