"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Scroll = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  //navigate to top of page on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
};

export default Scroll;
