import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import FreeServicesPage from "./pages/FreeServicesPage";
import GarbhSanskarPage from "./pages/GarbhSanskarPage";
import JoinPage from "./pages/JoinPage";
import KnowledgePage from "./pages/KnowledgePage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResearchPage from "./pages/ResearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/free-services" element={<FreeServicesPage />} />
          <Route path="/garbh-sanskar" element={<GarbhSanskarPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms-and-conditions" element={<LegalPage />} />
          <Route path="/grievance-redressal" element={<LegalPage />} />
          <Route path="/cookie-policy" element={<LegalPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
