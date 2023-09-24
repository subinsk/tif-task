// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    base: "0px",
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  },
  colors: {
    primary: "#0E2368",
    secondary: "#E23744",
    body: "#444957",
    gradient: {
      primary:
        "linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
