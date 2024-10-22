"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4",
        className
      )}
      style={{
        background:
          "linear-gradient(98deg, rgba(18,30,91,1) 0%, rgba(4,7,29,1) 60%)",
      }}
    >
      <div className="group-hover/bento:translate-x-2 translate-y-0 transition duration-200">
        <div
          className={cn(
            "font-sans font-bold text-xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2",
            titleClassName
          )}
        >
          {title}
        </div>

        {/* Ensure description is a string before using dangerouslySetInnerHTML */}
        {typeof description === "string" ? (
          <div
            className="font-sans text-neutral-600 text-xl font-semibold dark:text-neutral-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className="font-sans text-neutral-600 text-xl font-semibold dark:text-neutral-300">
            {description}
          </div>
        )}

        <div className="flex justify-center items-center h-full">
          {img && (
            <div className="relative flex justify-center items-center">
              <Image
                src={img}
                alt={title as string}
                className={cn("object-cover", imgClassName)}
                layout="intrinsic"
                width={300}
                height={300}
                objectFit="fill"
              />
            </div>
          )}
        </div>
        {spareImg && (
          <Image
            src={spareImg}
            alt={title as string}
            className={cn("w-full h-auto", imgClassName)}
            width={100}
            height={100}
          />
        )}
      </div>
    </div>
  );
};
