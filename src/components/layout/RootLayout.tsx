import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { I18nProvider } from "@/i18n";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { ExternalAskShreeProvider } from "@/components/site/ExternalAskShreeModal";

export function RootLayout() {
  return (
    <I18nProvider>
      <ExternalAskShreeProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <a
            href="#main-content"
            className="sr-only fixed left-4 top-4 z-[200] rounded-md bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground focus:not-sr-only"
          >
            Skip to main content
          </a>
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ExternalAskShreeProvider>
    </I18nProvider>
  );
}
