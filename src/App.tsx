import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import JoinPage from "./pages/JoinMissionPage";
import KnowledgePage from "./pages/KnowledgePage";
import LegalPage from "./pages/LegalPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResearchPage from "./pages/ResearchPage";
import AudienceJourneyPage from "./pages/AudienceJourneyPage";
import ServicesPage from "./pages/ServicesPage";
import { AUDIENCE_JOURNEY_ROUTES, MISSION_ROUTES } from "./content/registry";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/free-services" element={<ServicesPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path={MISSION_ROUTES.volunteer} element={<JoinPage pageId="volunteer" />} />
          <Route
            path={MISSION_ROUTES.institutionalCollaboration}
            element={<JoinPage pageId="institutionalCollaboration" />}
          />
          <Route
            path="/join/collaborator"
            element={<JoinPage pageId="institutionalCollaboration" />}
          />
          <Route path={MISSION_ROUTES.consultant} element={<JoinPage pageId="consultant" />} />
          <Route
            path={MISSION_ROUTES.academicResearcher}
            element={<JoinPage pageId="academicResearcher" />}
          />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route
            path={AUDIENCE_JOURNEY_ROUTES.planningCouple}
            element={<AudienceJourneyPage journeyId="planningCouple" />}
          />
          <Route
            path={AUDIENCE_JOURNEY_ROUTES.pregnantWoman}
            element={<AudienceJourneyPage journeyId="pregnantWoman" />}
          />
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms-and-conditions" element={<LegalPage />} />
          <Route path="/grievance-redressal" element={<LegalPage />} />
          <Route path="/cookie-policy" element={<LegalPage />} />
          <Route path="/mobile-app" element={<Navigate to="/#mobile-app-cta" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
