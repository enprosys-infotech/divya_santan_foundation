import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { I18nProvider } from "@/i18n";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function RootLayout() {
  return (
    <I18nProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
