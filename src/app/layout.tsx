import React from "react";

import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import './globals.css'
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/providers/ThemeProvider";
import {TooltipProvider} from "@/components/ui/tooltip";

const inter = Unbounded({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Luigelo Davila',
  description: 'Personal portfolio of Luigelo Davila',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body
              className={cn(
                  "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
                  inter.className
              )}
          >
              <ThemeProvider attribute="class" defaultTheme="light">
                  <TooltipProvider delayDuration={0}>
                      {children}
                  </TooltipProvider>
              </ThemeProvider>
          </body>
      </html>
)
}
