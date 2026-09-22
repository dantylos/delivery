import { useState } from 'react';

interface StepContactProps {
  phone: string;
  email: string;
  agreed: boolean;
  onChange: (field: 'phone' | 'email' | 'agreed', value: string | boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
  direction: 'forward' | 'back';
}

function validateEmail(email: string): string | null {
  if (!email.trim()) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
}

function validatePhone(phone: string): string | null {
  if (!phone.trim()) return 'Phone number is required';
  // Accept: +1234567890, (123) 456-7890, 123-456-7890, 1234567890 (7-15 digits)
  const digitsOnly = phone.replace(/[\s\-\(\)\+]/g, '');
  if (digitsOnly.length < 7 || digitsOnly.length > 15) return 'Phone number must be 7–15 digits';
  if (!/^\d+$/.test(digitsOnly)) return 'Phone number must contain only digits';
  return null;
}

export default function StepContact({ phone, email, agreed, onChange, onSubmit, onBack, direction }: StepContactProps) {
  const [touched, setTouched] = useState({ phone: false, email: false });

  const phoneError = touched.phone ? validatePhone(phone) : null;
  const emailError = touched.email ? validateEmail(email) : null;
  const isValid = !validatePhone(phone) && !validateEmail(email) && agreed;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ phone: true, email: true });
    if (isValid) onSubmit();
  };

  return (
    <div className={direction === 'forward' ? 'animate-slide-in-right' : 'animate-slide-in-left'}>
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-1.5 sm:mb-2">
          Leave your contact details
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          We'll reach out to get you started
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Phone field */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
            Phone number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none">
              <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={(e) => onChange('phone', e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
              className={`
                w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base bg-white
                ring-1 transition-all duration-300
                focus:outline-none focus:ring-2
                ${phoneError
                  ? 'ring-red-300 focus:ring-red-500'
                  : 'ring-gray-200 focus:ring-orange-500'
                }
              `}
            />
          </div>
          {phoneError && (
            <p className="mt-1.5 text-xs sm:text-sm text-red-500 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {phoneError}
            </p>
          )}
        </div>

        {/* Email field */}
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none">
              <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => onChange('email', e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              className={`
                w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base bg-white
                ring-1 transition-all duration-300
                focus:outline-none focus:ring-2
                ${emailError
                  ? 'ring-red-300 focus:ring-red-500'
                  : 'ring-gray-200 focus:ring-orange-500'
                }
              `}
            />
          </div>
          {emailError && (
            <p className="mt-1.5 text-xs sm:text-sm text-red-500 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {emailError}
            </p>
          )}
        </div>

        {/* Terms checkbox */}
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <label htmlFor="agreed" className="flex items-start gap-2.5 sm:gap-3 cursor-pointer group py-1">
            <div className="relative mt-0.5">
              <input
                id="agreed"
                type="checkbox"
                checked={agreed}
                onChange={(e) => onChange('agreed', e.target.checked)}
                className="sr-only"
              />
              <div
                className={`
                  w-[18px] h-[18px] sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center
                  transition-all duration-300
                  ${agreed
                    ? 'bg-orange-500 border-orange-500'
                    : 'border-gray-300 bg-white group-hover:border-orange-500/50'
                  }
                `}
              >
                {agreed && (
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs sm:text-sm text-gray-600 leading-snug">
              I agree to the{' '}
              <span className="text-orange-500 font-semibold hover:underline">Terms of Service</span>
              {' '}and{' '}
              <span className="text-orange-500 font-semibold hover:underline">Privacy Policy</span>
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1 sm:pt-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <button
            id="step3-back"
            type="button"
            onClick={onBack}
            className="flex-1 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 transition-all duration-300 active:scale-[0.98]"
          >
            Back
          </button>
          <button
            id="step3-submit"
            type="submit"
            disabled={!isValid}
            className={`
              flex-[2] py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold
              transition-all duration-300 ease-out
              ${isValid
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
