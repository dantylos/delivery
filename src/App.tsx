import { useState, useCallback } from 'react';
import ProgressBar from './components/ProgressBar';
import StepCategory from './steps/StepCategory';
import StepContact from './steps/StepContact';
import StepVehicle from './steps/StepVehicle';
import SuccessScreen from './steps/SuccessScreen';
import { INITIAL_FORM_DATA } from './types';
import type { FormData } from './types';

const TOTAL_STEPS = 3;

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const goNext = useCallback(() => {
    setDirection('forward');
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }, []);

  const goBack = useCallback(() => {
    setDirection('back');
    setStep((s) => Math.max(s - 1, 1));
  }, []);

  const updateField = useCallback(
    <K extends keyof FormData>(field: K, value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('📦 Form submitted:', formData);
    setSubmitted(true);
  }, [formData]);

  if (submitted) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-gray-50 px-5 sm:px-8">
        <SuccessScreen />
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex flex-col bg-gray-50">
      <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

      <main className="flex-1 flex items-start justify-center px-5 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14">
        <div className="w-full max-w-[540px] lg:max-w-[680px]">
          {step === 1 && (
            <StepCategory
              selected={formData.category}
              onSelect={(id) => updateField('category', id)}
              onNext={goNext}
              direction={direction}
            />
          )}

          {step === 2 && (
            <StepVehicle
              selected={formData.vehicle}
              onSelect={(id) => updateField('vehicle', id)}
              onNext={goNext}
              onBack={goBack}
              direction={direction}
            />
          )}

          {step === 3 && (
            <StepContact
              phone={formData.phone}
              email={formData.email}
              agreed={formData.agreed}
              onChange={(field, value) => updateField(field, value as FormData[typeof field])}
              onSubmit={handleSubmit}
              onBack={goBack}
              direction={direction}
            />
          )}
        </div>
      </main>
    </div>
  );
}
