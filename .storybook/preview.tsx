import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { Onest as FontSans } from "next/font/google";
import React from "react";

const fontSans = FontSans({ subsets: ["latin"] });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: (story) => <main className={fontSans.className}>{story()}</main>,
};

export default preview;
