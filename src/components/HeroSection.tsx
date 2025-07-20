import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, Shield, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium border border-primary/20">
              <Shield className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Legal Professionals
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-primary">Connect</span>{" "}
            <span className="text-foreground">Legal</span>{" "}
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Professionals
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-normal">
              with Clients Seamlessly
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            The premier platform connecting law firms and independent lawyers with clients. 
            Manage cases, schedule appointments, handle billing, and grow your practice—all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 group shadow-elegant">
              <Users className="h-5 w-5 mr-2" />
              I'm a Lawyer
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <Scale className="h-5 w-5 mr-2" />
              I Need Legal Help
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">Legal Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">50,000+</div>
              <div className="text-sm text-muted-foreground">Cases Managed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-bounce delay-500"></div>
    </section>
  );
};

export default HeroSection;