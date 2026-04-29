import Navbar from "@/components/Navbar";
import ReduxProvider from "@/redux/provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-50">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}