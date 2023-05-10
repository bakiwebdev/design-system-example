"use client";
import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {
  const [buttonStyle, setButtonStyle] = useState<
    "default" | "outline" | "text"
  >("default");
  const [buttonSize, setButtonSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [buttonType, setButtonType] = useState<
    "primary" | "affirmative" | "negative"
  >("primary");
  const Select = (
    value: string,
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    onChange: (size: any) => void,
    options: string[]
  ) => {
    return (
      <select
        className="block appearance-none w-full max-w-fit bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={(event) => {
          onChange(event?.target?.value || "");
        }}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  return (
    <main className="w-screen h-screen mx-auto">
      <section className="w-full h-full flex flex-col justify-center items-center">
        <Button size={buttonSize} type={buttonType} style={buttonStyle}>
          Click me
        </Button>
        <div className="flex gap-2 m-2">
          {/* size dropdown */}
          {Select(
            buttonSize,
            (size: "small" | "medium" | "large") => {
              setButtonSize(size);
            },
            ["small", "medium", "large"]
          )}
          {/* style dropdown */}
          {Select(
            buttonStyle,
            (style: "text" | "default" | "outline") => {
              setButtonStyle(style);
            },
            ["text", "default", "outline"]
          )}
          {/* type dropdown */}
          {Select(
            buttonType,
            (type: "primary" | "affirmative" | "negative") => {
              setButtonType(type);
            },
            ["primary", "affirmative", "negative"]
          )}
        </div>
      </section>
    </main>
  );
}
