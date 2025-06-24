"use client"


import { ThemeProvider as NextThemeProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";
import { type ThemeProviderProps } from "next-themes";

// <ThemeProvider cooper ="very cool" defaultState/>
export function ThemeProvider({ children, ...props}: ThemeProviderProps) {
  return (
    <NextThemeProvider 
    forcedTheme="dark" 
    {...props}>
      {children}
    </NextThemeProvider>
  );
}
