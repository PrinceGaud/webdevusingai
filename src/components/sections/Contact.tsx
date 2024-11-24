import { Card } from "@/components/ui/card";
import { Phone, Globe } from "lucide-react";

const ContactLink = ({ icon: Icon, href, text }: { icon: any; href: string; text: string }) => (
  <a 
    href={href} 
    className="p-4 hover:bg-workshop-purple/20 rounded-full transition-all flex items-center gap-3"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="h-6 w-6 text-workshop-cyan hover:text-workshop-neonPurple" />
    <span className="text-workshop-cyan hover:text-workshop-neonPurple">{text}</span>
  </a>
);

export const Contact = () => {
  const contacts = [
    { icon: Phone, href: "tel:+919424131387", text: "+91 9424131387" },
    { icon: Globe, href: "https://www.anishkfoundation.org", text: "www.anishkfoundation.org" }
  ];

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Connect With Us
          </h2>
          <Card className="p-8 bg-black/50 border border-workshop-cyan hover:neon-border transition-all">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {contacts.map((contact, index) => (
                <ContactLink key={index} {...contact} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};