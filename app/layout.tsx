import Footer from "@/components/ui/Footer";
import "./globals.css";
import Header from "@/components/ui/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>   
      <Header /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
