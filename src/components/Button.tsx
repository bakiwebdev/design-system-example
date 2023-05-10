"use client";
import clsx from "clsx";

interface IButton {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  style?: "default" | "outline" | "text";
  type?: "primary" | "affirmative" | "negative";
}

const Button = ({ children, size, style, type }: IButton) => {
  return (
    <button
      className={clsx(
        "cursor-pointer px-5 py-2 rounded-md transform transition-colors first-letter:capitalize",
        {
          // deal with button size
          "text-sm": size === "small", // small
          "text-md": size === "medium", // medium
          "text-lg": size === "large", // large
        },
        {
          // deal with button type
          "bg-blue-500 border border-blue-500 hover:bg-blue-600":
            type === "primary", // primary
          "bg-red-500 border border-red-500 hover:bg-red-600":
            type === "negative", // negative
          "bg-green-500 border border-green-500 hover:bg-green-600":
            type === "affirmative", // affirmative
        },
        {
          // deal with button style
          "text-white": style === "default", //default
          //
          //
          "bg-transparent hover:bg-transparent": style === "outline", //outline
          "text-blue-500 hover:border-blue-600 hover:text-blue-600":
            style === "outline" && type === "primary", // outline & primary
          "text-red-500 hover:border-red-600 hover:text-red-600":
            style === "outline" && type === "negative", // outline & negative
          "text-green-500 hover:border-green-600 hover:text-green-600":
            style === "outline" && type === "affirmative", // outline & affirmative
          //
          //
          "border-0 bg-transparent": style === "text", //text
          "text-blue-500 hover:bg-blue-50":
            style === "text" && type === "primary", // outline & primary
          "text-red-500 hover:bg-red-50":
            style === "text" && type === "negative", // outline & negative
          "text-green-500 hover:bg-green-50":
            style === "text" && type === "affirmative", // outline & affirmative
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
