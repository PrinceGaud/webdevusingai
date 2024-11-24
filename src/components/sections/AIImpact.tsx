import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, ChevronRight } from "lucide-react";

export const AIImpact = () => {
  const handleRegisterClick = () => {
    window.location.href = "https://rzp.io/rzp/BIRCmfX";
  };

  return (
    <section className="py-20 bg-workshop-purple/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          How AI is Changing the World
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6 bg-black/50 border border-workshop-cyan">
            <h3 className="text-2xl font-bold mb-6 text-workshop-cyan">
              Revolutionary Impact
            </h3>
            <ul className="space-y-4">
              {[
                "Automating repetitive development tasks",
                "Enhancing code quality and security",
                "Accelerating development cycles",
                "Creating more intuitive user experiences",
                "Enabling natural language programming",
              ].map((impact, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-workshop-cyan" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </Card>
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              AI is revolutionizing the way we approach web development, making it more efficient, 
              accessible, and powerful than ever before. Join us to be at the forefront of this 
              technological revolution.
            </p>
            <Button 
              onClick={handleRegisterClick}
              className="w-full bg-workshop-cyan hover:bg-workshop-purple text-black hover:text-white transition-all neon-border"
            >
              Join the AI Revolution
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};