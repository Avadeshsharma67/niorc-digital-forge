
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import EnterpriseMobility from "./pages/services/EnterpriseMobility";
import ProductEngineering from "./pages/services/ProductEngineering";
import QualityEngineering from "./pages/services/QualityEngineering";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SocialMedia from "./pages/services/SocialMedia";
import ContentMarketing from "./pages/services/ContentMarketing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/enterprise-mobility" element={<EnterpriseMobility />} />
          <Route path="/services/product-engineering" element={<ProductEngineering />} />
          <Route path="/services/quality-engineering" element={<QualityEngineering />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
