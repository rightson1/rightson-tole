import Image from "next/image";
import React from "react";

const ChariImage = () => {
  return (
    <div>
      <Image
        src="/chari.png"
        className="w-full"
        alt="chari"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ChariImage;
