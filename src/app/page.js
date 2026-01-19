import Navbar from "@/components/Navbar";
import HomePage from "./home/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        
        <main>

          <HomePage /> 
          
        </main>
      </body>
    </html>
  );
}