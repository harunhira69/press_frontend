
import "./globals.css";
import { Roboto, EB_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const ebGaramondHeading = EB_Garamond({subsets:['latin'],variable:'--font-heading'});

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", roboto.variable, ebGaramondHeading.variable)}
    >
      <body className="min-h-full flex flex-col">



        <Toaster position="top-right" richColors/>        
        {children}
        </body>
    </html>
  );
}
