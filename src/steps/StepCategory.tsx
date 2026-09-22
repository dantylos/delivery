import SelectionCard from '../components/SelectionCard';
import { CATEGORY_OPTIONS } from '../types';

interface StepCategoryProps {
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
  direction: 'forward' | 'back';
}

export default function StepCategory({ selected, onSelect, onNext, direction }: StepCategoryProps) {
  return (
    <div className={direction === 'forward' ? 'animate-slide-in-right' : 'animate-slide-in-left'}>
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 px-[12px] pt-2 pb-2">
          What would you like to deliver today?
        </h1>
        <p className="text-gray-500 text-sm sm:text-base px-[12px] pt-1 pb-3">
          Choose the category that best fits your deliveries
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8 lg:mb-10">
        {CATEGORY_OPTIONS.map((option, i) => (
          <SelectionCard
            key={option.id}
            option={option}
            isSelected={selected === option.id}
            onSelect={onSelect}
            animationDelay={i * 80}
          />
        ))}
      </div>

      <div className="mt-8 sm:mt-10 pt-1">
        <button
          id="step1-next"
          type="button"
          disabled={!selected}
          onClick={onNext}
          className={`
            w-full py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold
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
