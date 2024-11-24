import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ChevronRight, Gift } from "lucide-react";
import FloatingPhoto from "@/components/FloatingPhoto";

export const Hero = () => {
  const handleRegisterClick = () => {
    window.location.href = "https://pages.razorpay.com/pay-for-workshop-anishk";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,27,105,0.5)_0%,rgba(0,0,0,0.8)_100%)]" />
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-6">
          <div className="flex items-start justify-between">
            <Badge className="bg-workshop-purple text-workshop-cyan border-workshop-cyan animate-pulse">
              Live Workshop
            </Badge>
            <FloatingPhoto />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Master Class on Web Dev Using AI!
          </h1>
          <p className="text-lg text-gray-300">
            Join us for an intensive 3-hour session to maximize your web development skills with AI-powered tools.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleRegisterClick}
                className="bg-workshop-cyan hover:bg-workshop-purple text-black hover:text-white transition-all neon-border"
              >
                Register Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center gap-4 text-gray-300">
                <CalendarDays className="h-5 w-5 text-workshop-cyan" />
                <span>27 November 2024</span>
                <Clock className="h-5 w-5 text-workshop-cyan" />
                <span>4:00 PM - 7:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Gift className="h-5 w-5 text-workshop-cyan" />
              <span>Donation: Rs. 21 - Considered for noble causes</span>
            </div>
          </div>
        </div>
        <div className="animate-float">
          <img 
            src="/lovable-uploads/4c1d6be9-b681-4ffd-85a4-9a26e589aab9.png" 
            alt="Workshop Banner" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};