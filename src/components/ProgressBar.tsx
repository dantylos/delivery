interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const STEP_LABELS = ['Delivery', 'Vehicle', 'Contact'];

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-[12px] py-3 sm:py-4">
        {/* Step indicator text */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs sm:text-sm font-semibold text-gray-500 tracking-wide uppercase px-[12px] py-1">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-xs sm:text-sm font-medium text-orange-500 px-[12px] py-1">
            {STEP_LABELS[currentStep - 1]}
          </span>
        </div>

        {/* Progress bar track */}
        <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden w-full">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Step dots */}
        <div className="flex justify-between mt-2.5 px-[12px]">
          {Array.from({ length: totalSteps }, (_, i) => {
            const stepNum = i + 1;
            const isCompleted = stepNum < currentStep;
            const isCurrent = stepNum === currentStep;
            return (
              <div key={stepNum} className="flex flex-col items-center">
                <div
                  className={`
                    w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold transition-all duration-300
                    ${isCompleted
                      ? 'bg-orange-500 text-white'
                      : isCurrent
                        ? 'bg-orange-500 text-white scale-110 ring-3 sm:ring-4 ring-orange-100'
                        : 'bg-gray-200 text-gray-400'
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
