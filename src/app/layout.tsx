import type { Metadata } from "next";
import '/styles/globals.css';
import '/styles/fonts.css';  // Importe o arquivo CSS da fonte
import { cn } from "@/lib/utils";
import { ClerkProvider, SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";
import { ThemeProvider } from "@/components/ui/theme-provider";



export const metadata: Metadata = {
  title: "Educora",
  description: "Educação para o futuro."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    localization={ptBR}>
      <html lang="en">
        <body className={cn("font-Nacelle")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem>
              
          <main>
            {children}
          </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
