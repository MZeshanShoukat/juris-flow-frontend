import React, { useState } from 'react';
import LawyerPlanSelection, { PlanType } from './LawyerPlanSelection';
import LawyerSignupForm, { LawyerFormData } from './LawyerSignupForm';

const LawyerSignupProcess = () => {
  const [currentStep, setCurrentStep] = useState<'plan-selection' | 'registration'>('plan-selection');
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  const handlePlanSelect = (plan: PlanType) => {
    setSelectedPlan(plan);
    setCurrentStep('registration');
  };

  const handleBackToPlanSelection = () => {
    setCurrentStep('plan-selection');
  };

  const handleFormSubmit = (formData: LawyerFormData) => {
    // Handle the complete registration data
    const registrationData = {
      plan: selectedPlan,
      formData
    };
    
    console.log('Complete registration data:', registrationData);
    
    // Determine next step based on plan type
    if (selectedPlan?.badge && selectedPlan.id !== 'organization-custom') {
      // Free trial plans - redirect to dashboard
      console.log('Redirecting to lawyer dashboard (free trial)');
      // window.location.href = '/lawyer';
    } else {
      // Custom plan - redirect to payment
      console.log('Redirecting to payment screen');
      // window.location.href = '/payment';
    }
  };

  if (currentStep === 'plan-selection') {
    return <LawyerPlanSelection onPlanSelect={handlePlanSelect} />;
  }

  if (currentStep === 'registration' && selectedPlan) {
    return (
      <LawyerSignupForm
        selectedPlan={selectedPlan}
        onBack={handleBackToPlanSelection}
        onSubmit={handleFormSubmit}
      />
    );
  }

  return null;
};

export default LawyerSignupProcess;