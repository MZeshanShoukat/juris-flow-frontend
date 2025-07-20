import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, User, Building, ArrowRight } from 'lucide-react';

const AuthDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Authentication System Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore the complete signup and login flow for clients and lawyers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Client Auth Section */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Client Authentication</CardTitle>
              <p className="text-muted-foreground">
                Simple signup and login for legal service clients
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Email and password validation</li>
                  <li>• Password confirmation matching</li>
                  <li>• Responsive design</li>
                  <li>• Redirect to client dashboard</li>
                </ul>
              </div>
              <div className="flex space-x-2">
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/client/login">
                    Login Demo
                  </Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link to="/client/signup">
                    Signup Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Lawyer Auth Section */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Lawyer/Organization Signup</CardTitle>
              <p className="text-muted-foreground">
                Two-step process with plan selection and registration
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Three pricing tiers with different features</li>
                  <li>• Dynamic pricing for custom plans</li>
                  <li>• Free trial vs payment flow logic</li>
                  <li>• Organization-specific fields</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link to="/lawyer/signup">
                  Start Lawyer Signup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Plan Details Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Lawyer Plan Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <User className="h-5 w-5 text-blue-500 mr-2" />
                  <h4 className="font-semibold">Individual</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">$10/month</p>
                <p className="text-xs text-green-600 font-medium">✓ Free 1st Month</p>
                <p className="text-xs text-muted-foreground mt-2">Perfect for solo practitioners</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                  <h4 className="font-semibold">Organization (5 Users)</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">$35/month</p>
                <p className="text-xs text-green-600 font-medium">✓ Free 1st Month</p>
                <p className="text-xs text-muted-foreground mt-2">For small to medium firms</p>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 text-orange-500 mr-2" />
                  <h4 className="font-semibold">Organization Custom</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">$50+/month</p>
                <p className="text-xs text-orange-600 font-medium">⚠ No Free Trial</p>
                <p className="text-xs text-muted-foreground mt-2">Minimum 7 users, dynamic pricing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Implementation Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Form Validation:</h4>
                <p className="text-muted-foreground">
                  All forms include real-time validation with error messages, email format checking, 
                  password strength requirements, and confirmation matching.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Dynamic Pricing:</h4>
                <p className="text-muted-foreground">
                  The custom organization plan calculates pricing in real-time: $50 base for 7 users + 
                  $7 for each additional user.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">User Flow Logic:</h4>
                <p className="text-muted-foreground">
                  Free trial plans (Individual & Org-5) redirect to dashboard immediately. 
                  Custom plans redirect to payment processing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthDemo;