import Footer from "@/components/ui/footer";
import "./globals.css";
import Header from "@/components/ui/header";



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
