import { Hero } from "@/components/sections/Hero";
import { Certificate } from "@/components/sections/Certificate";
import { Career } from "@/components/sections/Career";
import { AIImpact } from "@/components/sections/AIImpact";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-workshop-purple to-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <img 
              src="/lovable-uploads/d7301b83-f046-475a-915d-1e6dfecd7210.png" 
              alt="Anishk Foundation Logo" 
              className="h-12 object-contain"
            />
            <div className="flex gap-6 text-workshop-cyan">
              <a href="#contact" className="hover:text-workshop-neonPurple transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with top padding for fixed nav */}
      <div className="pt-20">
        <Hero />
        <Certificate />
        <Career />
        <AIImpact />
        <Contact />
      </div>
    </div>
  );
};

export default Index;