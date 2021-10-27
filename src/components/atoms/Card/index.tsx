import React from "react";

import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, subtitle, image, children }) => {
  return (
    <div className="p-4 text-white">
      {image && (
        <div className="relative rounded-xl" style={{ minHeight: 200 }}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-xl w-full h-full brightness-[46%]"
          />
          <div className="absolute bottom-4 left-4">
            <div className="font-semibold">{title}</div>
            <div className="text-gray-50">{subtitle}</div>
          </div>
        </div>
      )}
      {/* Content */}
      <div className="text-black"></div>
    </div>
  );
};

export default Card;
