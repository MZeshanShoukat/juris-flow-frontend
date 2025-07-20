import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, User, Users, Building, ArrowRight } from 'lucide-react';

export interface PlanType {
  id: 'individual' | 'organization-5' | 'organization-custom';
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  badge?: string;
  icon: React.ComponentType<any>;
  minUsers?: number;
  customPrice?: boolean;
}

interface LawyerPlanSelectionProps {
  onPlanSelect: (plan: PlanType) => void;
}

const LawyerPlanSelection = ({ onPlanSelect }: LawyerPlanSelectionProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: PlanType[] = [
    {
      id: 'individual',
      name: 'Individual',
      price: '$10/month',
      originalPrice: '$10/month',
      description: 'Perfect for solo practitioners',
      badge: 'Free 1st Month',
      icon: User,
      features: [
        'Case management for up to 50 cases',
        'Client communication portal',
        'Document storage (5GB)',
        'Basic analytics and reporting',
        'Email support'
      ]
    },
    {
      id: 'organization-5',
      name: 'Organization',
      price: '$35/month',
      originalPrice: '$35/month',
      description: 'For small to medium law firms',
      badge: 'Free 1st Month',
      icon: Users,
      features: [
        'Up to 5 users',
        'Unlimited case management',
        'Advanced client portal',
        'Document storage (50GB)',
        'Team collaboration tools',
        'Advanced analytics',
        'Priority support'
      ]
    },
    {
      id: 'organization-custom',
      name: 'Organization Custom',
      price: '$50+/month',
      description: 'For larger organizations with custom needs',
      icon: Building,
      minUsers: 7,
      customPrice: true,
      features: [
        'Minimum 7 users (expandable)',
        'Unlimited case management',
        'Enterprise client portal',
        'Unlimited document storage',
        'Advanced team management',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager',
        '24/7 premium support'
      ]
    }
  ];

  const handlePlanSelection = (plan: PlanType) => {
    setSelectedPlan(plan.id);
  };

  const handleContinue = () => {
    const plan = plans.find(p => p.id === selectedPlan);
    if (plan) {
      onPlanSelect(plan);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Choose Your Plan
          </h1>
          <p className="text-muted-foreground">
            Select the plan that best fits your practice needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const isSelected = selectedPlan === plan.id;
            
            return (
              <Card 
                key={plan.id}
                className={`relative cursor-pointer transition-all duration-200 ${
                  isSelected 
                    ? 'ring-2 ring-primary shadow-lg scale-105' 
                    : 'hover:shadow-md hover:scale-102'
                }`}
                onClick={() => handlePlanSelection(plan)}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-green-500 text-white">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">
                      {plan.price}
                    </div>
                    {plan.badge && plan.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {plan.originalPrice}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.id === 'organization-custom' && (
                    <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Base price: $50/month for 7 users. Additional users charged separately.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedPlan}
            size="lg"
            className="px-8"
          >
            Continue with Selected Plan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>All plans include a 30-day money-back guarantee</p>
          <p className="mt-1">
            Need help choosing? <span className="text-primary cursor-pointer hover:underline">Contact our sales team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawyerPlanSelection;