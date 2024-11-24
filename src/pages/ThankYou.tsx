import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ThankYou = () => {
  useEffect(() => {
    toast.success("Payment Successful!", {
      description: "Welcome to the AI Web Development Master Class!",
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 max-w-2xl w-full mx-auto space-y-8 animate-fade-up">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="rounded-full bg-green-500/10 p-3">
            <CheckCircle className="w-12 h-12 text-green-500 animate-checkmark" />
          </div>
          
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neon-purple/10 text-neon-purple animate-glow">
              Registration Complete
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Thank You for Joining!
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              You're now enrolled in our Web Development Master Class using AI. Get ready for an amazing learning experience!
            </p>
          </div>

          <div className="neon-border rounded-xl p-6 w-full max-w-md bg-black/20">
            <h2 className="text-lg font-semibold mb-2">Next Steps:</h2>
            <p className="text-gray-400 mb-4">
              Join our WhatsApp group to connect with other participants and receive important updates.
            </p>
            <Button
              className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity"
              onClick={() => window.open("https://chat.whatsapp.com/G1NIZEugWhKA9XEaxgQ158", "_blank")}
            >
              Join WhatsApp Group
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            Class starts on November 27, 2024 • 4:00 PM to 7:00 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;