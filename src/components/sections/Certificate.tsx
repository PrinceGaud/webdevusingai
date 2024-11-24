import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

export const Certificate = () => {
  return (
    <section className="py-20 bg-workshop-purple/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Earn Your AI Web Development Certificate
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Upon completion of the workshop, receive an industry-recognized certificate validating your expertise in AI-powered web development.
          </p>
        </div>
        <Card className="p-6 bg-black/50 border border-workshop-cyan neon-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-workshop-cyan">Certificate Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Industry-recognized certification",
                  "Validates AI development skills",
                  "Enhances your portfolio",
                  "Lifetime validity",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-workshop-cyan" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-workshop-purple/30 p-8 rounded-lg border border-workshop-cyan">
            <div className="animate-float">
          <img 
            src=" /lovable-uploads/Sample Certificate.png" 
            alt="Workshop Banner" 
            className="rounded-lg shadow-2xl"
          />
        </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};