import { Card } from "@/components/ui/card";
import { Code, Brain, Users } from "lucide-react";

export const Career = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Career Opportunities with AI
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-8 w-8" />,
              title: "AI-Powered Development",
              description: "Build cutting-edge applications using AI tools and frameworks",
            },
            {
              icon: <Brain className="h-8 w-8" />,
              title: "AI Integration Specialist",
              description: "Help companies integrate AI solutions into their existing systems",
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "AI Consultant",
              description: "Guide businesses in implementing AI-driven development practices",
            },
          ].map((career, index) => (
            <Card key={index} className="p-6 bg-black/50 border border-workshop-cyan hover:neon-border transition-all">
              <div className="text-workshop-cyan mb-4">{career.icon}</div>
              <h3 className="text-xl font-bold mb-2">{career.title}</h3>
              <p className="text-gray-300">{career.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};