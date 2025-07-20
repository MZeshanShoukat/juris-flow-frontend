import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Calendar, 
  FileText, 
  CreditCard, 
  Shield, 
  Clock,
  Users,
  Briefcase,
  BarChart3,
  Zap,
  Globe,
  CheckCircle
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Communication",
      description: "Secure messaging between lawyers and clients with file sharing capabilities",
      category: "Communication",
      color: "bg-blue-500"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking with calendar integration and reminders",
      category: "Productivity",
      color: "bg-green-500"
    },
    {
      icon: Briefcase,
      title: "Case Management",
      description: "Comprehensive case tracking with status updates and deadline management",
      category: "Management",
      color: "bg-purple-500"
    },
    {
      icon: FileText,
      title: "Document Hub",
      description: "Centralized document storage with version control and secure sharing",
      category: "Documents",
      color: "bg-orange-500"
    },
    {
      icon: CreditCard,
      title: "Billing & Payments",
      description: "Automated invoicing with Stripe integration for seamless payments",
      category: "Finance",
      color: "bg-emerald-500"
    },
    {
      icon: Shield,
      title: "Bank-level Security",
      description: "End-to-end encryption with compliance to legal industry standards",
      category: "Security",
      color: "bg-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Insights into practice performance with detailed reporting",
      category: "Analytics",
      color: "bg-indigo-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user support with role-based permissions and workflows",
      category: "Collaboration",
      color: "bg-pink-500"
    },
    {
      icon: Globe,
      title: "Multi-jurisdiction",
      description: "Support for various legal systems and international practices",
      category: "Global",
      color: "bg-cyan-500"
    }
  ];

  const benefits = [
    "Reduce administrative overhead by 70%",
    "Increase client satisfaction scores",
    "Streamline billing and payments",
    "Improve case organization",
    "Enhanced security and compliance"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Zap className="h-4 w-4 mr-2" />
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Run Your Legal Practice
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From case management to client communication, our comprehensive platform 
            provides all the tools you need to grow your practice efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Legal Professionals Choose Us
              </h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of legal professionals who have transformed their practice 
                with our comprehensive platform.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-primary rounded-xl p-8 text-center text-white">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90 mb-4">Platform Availability</div>
                <div className="text-sm opacity-75">
                  Access your practice management tools anytime, anywhere
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;