import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({
  title,
  subtitle,
  image,
  className,
  children,
}) => {
  return (
    <div className={`${className} text-white w-full`}>
      {image && (
        <div className="relative rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            layout="responsive"
            className="rounded-xl brightness-[46%]"
          />
          <div className="absolute bottom-0 left-0 p-4">
            <div className="font-semibold">{title}</div>
            <div className="text-gray-50">{subtitle}</div>
          </div>
        </div>
      )}
      {/* Content */}
      {!image && <div className="text-black">{children}</div>}
    </div>
  );
};

export default Card;
