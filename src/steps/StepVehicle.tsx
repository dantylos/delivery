import SelectionCard from '../components/SelectionCard';
import { VEHICLE_OPTIONS } from '../types';

interface StepVehicleProps {
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
  direction: 'forward' | 'back';
}

export default function StepVehicle({ selected, onSelect, onNext, onBack, direction }: StepVehicleProps) {
  return (
    <div className={direction === 'forward' ? 'animate-slide-in-right' : 'animate-slide-in-left'}>
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-1.5 sm:mb-2">
          What vehicle will you use?
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Pick the transport you'll deliver with
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8 lg:mb-10">
        {VEHICLE_OPTIONS.map((option, i) => (
          <SelectionCard
            key={option.id}
            option={option}
            isSelected={selected === option.id}
            onSelect={onSelect}
            animationDelay={i * 80}
          />
        ))}
      </div>

      <div className="flex gap-3">
        <button
          id="step2-back"
          type="button"
          onClick={onBack}
          className="flex-1 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 transition-all duration-300 active:scale-[0.98]"
        >
          Back
        </button>
        <button
          id="step2-next"
          type="button"
          disabled={!selected}
          onClick={onNext}
          className={`
            flex-[2] py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold
            transition-all duration-300 ease-out
            ${selected
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.01] active:scale-[0.99]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
