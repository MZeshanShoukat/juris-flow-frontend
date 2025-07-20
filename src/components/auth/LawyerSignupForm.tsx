import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, User, Mail, Lock, Building, Users, CheckCircle, ArrowLeft } from 'lucide-react';
import { PlanType } from './LawyerPlanSelection';

interface LawyerSignupFormProps {
  selectedPlan: PlanType;
  onBack: () => void;
  onSubmit: (formData: LawyerFormData) => void;
}

export interface LawyerFormData {
  organizationName?: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  numberOfUsers?: number;
  calculatedPrice?: number;
}

const LawyerSignupForm = ({ selectedPlan, onBack, onSubmit }: LawyerSignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<LawyerFormData>({
    organizationName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    numberOfUsers: selectedPlan.minUsers || 1
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isOrganizationPlan = selectedPlan.id.includes('organization');
  const isCustomPlan = selectedPlan.id === 'organization-custom';

  // Calculate price for custom plan
  useEffect(() => {
    if (isCustomPlan && formData.numberOfUsers) {
      const basePrice = 50;
      const minUsers = 7;
      const additionalUsers = Math.max(0, formData.numberOfUsers - minUsers);
      const pricePerAdditionalUser = 7; // Example: $7 per additional user
      const calculatedPrice = basePrice + (additionalUsers * pricePerAdditionalUser);
      
      setFormData(prev => ({
        ...prev,
        calculatedPrice
      }));
    }
  }, [formData.numberOfUsers, isCustomPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const processedValue = name === 'numberOfUsers' ? parseInt(value) || 0 : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (isOrganizationPlan && !formData.organizationName?.trim()) {
      newErrors.organizationName = 'Organization name is required';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (isCustomPlan) {
      if (!formData.numberOfUsers || formData.numberOfUsers < 7) {
        newErrors.numberOfUsers = 'Minimum 7 users required for custom plan';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Plans
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Complete Your Registration
                </CardTitle>
                <p className="text-muted-foreground mt-1">
                  You're registering for the {selectedPlan.name} plan
                </p>
              </div>
              {selectedPlan.badge && (
                <Badge variant="default" className="bg-green-500 text-white">
                  {selectedPlan.badge}
                </Badge>
              )}
            </div>
            
            {/* Plan Summary */}
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{selectedPlan.name} Plan</h3>
                  <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
                </div>
                <div className="text-right">
                  {isCustomPlan && formData.calculatedPrice ? (
                    <div className="text-lg font-bold text-primary">
                      ${formData.calculatedPrice}/month
                    </div>
                  ) : (
                    <div className="text-lg font-bold text-primary">
                      {selectedPlan.price}
                    </div>
                  )}
                  {isCustomPlan && formData.numberOfUsers && (
                    <div className="text-xs text-muted-foreground">
                      For {formData.numberOfUsers} users
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isOrganizationPlan && (
                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="organizationName"
                      name="organizationName"
                      type="text"
                      placeholder="Enter your organization name"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className={`pl-10 ${errors.organizationName ? 'border-destructive' : ''}`}
                      required
                    />
                  </div>
                  {errors.organizationName && (
                    <p className="text-sm text-destructive">{errors.organizationName}</p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`pl-10 ${errors.fullName ? 'border-destructive' : ''}`}
                    required
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`pl-10 ${errors.email ? 'border-destructive' : ''}`}
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {isCustomPlan && (
                <div className="space-y-2">
                  <Label htmlFor="numberOfUsers">Number of Users</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="numberOfUsers"
                      name="numberOfUsers"
                      type="number"
                      min="7"
                      placeholder="Minimum 7 users"
                      value={formData.numberOfUsers || ''}
                      onChange={handleInputChange}
                      className={`pl-10 ${errors.numberOfUsers ? 'border-destructive' : ''}`}
                      required
                    />
                  </div>
                  {errors.numberOfUsers && (
                    <p className="text-sm text-destructive">{errors.numberOfUsers}</p>
                  )}
                  {formData.numberOfUsers && formData.numberOfUsers >= 7 && (
                    <p className="text-sm text-muted-foreground">
                      Base: $50 for 7 users, additional users: $7 each
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`pl-10 pr-10 ${errors.password ? 'border-destructive' : ''}`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-destructive' : passwordsMatch ? 'border-green-500' : ''}`}
                    required
                  />
                  <div className="absolute right-3 top-3 flex items-center space-x-1">
                    {passwordsMatch && (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    )}
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full" size="lg">
                  {selectedPlan.badge && !isCustomPlan ? 'Start Free Trial' : 'Proceed to Payment'}
                </Button>
                
                {selectedPlan.badge && !isCustomPlan && (
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Your free trial will begin immediately. No payment required until day 30.
                  </p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LawyerSignupForm;