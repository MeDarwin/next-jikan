import typography from "@tailwindcss/typography";
import type { Config as DaisyUIConfig } from "daisyui";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const daisyUiConfig: DaisyUIConfig = {
  logs: false,
  themes: [
    {
      neonime: {
        primary: "#6e35ae",
        secondary: "#73d0b9",
        accent: "#f9a8d4",
        neutral: "#5b21b6",
        "base-100": "#1a0a2e",
        info: "#7e22ce",
        success: "#6ee7b7",
        warning: "#f9a8d4",
        error: "#f87171",
      },
    },
  ],
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [daisyui, typography],
  daisyui: daisyUiConfig,
};
export default config;
