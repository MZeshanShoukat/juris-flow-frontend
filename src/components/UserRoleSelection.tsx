import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Users, 
  Settings, 
  Briefcase, 
  MessageSquare, 
  Calendar, 
  FileText, 
  CreditCard,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const UserRoleSelection = () => {
  const roles = [
    {
      id: "lawyer",
      title: "Legal Professionals",
      subtitle: "Law Firms & Independent Lawyers",
      description: "Manage your practice, connect with clients, and grow your business",
      icon: Scale,
      color: "bg-primary",
      features: [
        { icon: Briefcase, text: "Case Management" },
        { icon: Users, text: "Client Communication" },
        { icon: Calendar, text: "Appointment Scheduling" },
        { icon: FileText, text: "Document Management" },
        { icon: CreditCard, text: "Billing & Invoicing" }
      ],
      popular: true
    },
    {
      id: "client",
      title: "Clients",
      subtitle: "Individuals & Businesses",
      description: "Find the right legal help and manage your legal matters",
      icon: Users,
      color: "bg-accent",
      features: [
        { icon: Scale, text: "Find Qualified Lawyers" },
        { icon: MessageSquare, text: "Direct Communication" },
        { icon: Calendar, text: "Easy Scheduling" },
        { icon: FileText, text: "Document Access" },
        { icon: CreditCard, text: "Secure Payments" }
      ],
      popular: false
    },
    {
      id: "admin",
      title: "Platform Admin",
      subtitle: "System Administration",
      description: "Manage the platform, users, and business operations",
      icon: Settings,
      color: "bg-muted-foreground",
      features: [
        { icon: Users, text: "User Management" },
        { icon: CreditCard, text: "Payment Oversight" },
        { icon: Settings, text: "System Configuration" },
        { icon: FileText, text: "Reports & Analytics" },
        { icon: Scale, text: "Dispute Resolution" }
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Role</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your role to access features tailored specifically for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.id} 
                className={`relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                  role.popular ? 'ring-2 ring-primary/20 shadow-glow' : ''
                }`}
              >
                {role.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${role.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{role.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {role.subtitle}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {role.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {role.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <FeatureIcon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Button 
                    className={`w-full group mt-6 ${
                      role.popular 
                        ? 'bg-gradient-primary hover:opacity-90' 
                        : 'border border-primary/20 hover:bg-primary/5'
                    }`}
                    variant={role.popular ? "gradient" : "outline"}
                  >
                    {role.popular ? "Get Started" : "Learn More"}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which role fits you best?
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary-hover">
            Contact our team for guidance
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserRoleSelection;