"use client";

import "src/styles/globals.css";
import { type ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClientProvider } from "@tanstack/react-query";
import Providers, { ConvexClientProvider } from "@/components/Providers";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
          >
            <ConvexClientProvider>
              {/* <ConvexProviderWithClerk client={convex} useAuth={useAuth}> */}
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                disableTransitionOnChange
              >
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
                <Toaster />
              </ThemeProvider>
            </ConvexClientProvider>
            {/* </ConvexProviderWithClerk> */}
          </ClerkProvider>
        </Providers>
      </body>
    </html>
  );
}
