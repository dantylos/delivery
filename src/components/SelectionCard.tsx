import type { CardOption } from '../types';

interface SelectionCardProps {
  option: CardOption;
  isSelected: boolean;
  onSelect: (id: string) => void;
  animationDelay?: number;
}

export default function SelectionCard({
  option,
  isSelected,
  onSelect,
  animationDelay = 0,
}: SelectionCardProps) {
  return (
    <button
      id={`card-${option.id}`}
      type="button"
      onClick={() => onSelect(option.id)}
      className={`
        group relative flex flex-col items-center justify-center
        bg-white rounded-2xl lg:rounded-3xl
        px-3 py-4 sm:px-5 sm:py-6 lg:px-6 lg:py-7
        cursor-pointer transition-all duration-300 ease-out
        hover:scale-[1.03] hover:shadow-lg
        active:scale-[0.98]
        animate-fade-in-up
        ${isSelected
          ? 'ring-[2.5px] ring-orange-500 shadow-lg shadow-orange-500/15 bg-orange-50'
          : 'ring-1 ring-gray-200 shadow-sm hover:ring-orange-500/40'
        }
      `}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Selection indicator */}
      <div
        className={`
          absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center
          transition-all duration-300
          ${isSelected
            ? 'border-orange-500 bg-orange-500'
            : 'border-gray-300 bg-white group-hover:border-orange-500/50'
          }
        `}
      >
        {isSelected && (
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      {/* Card image */}
      <div className="w-16 h-16 sm:w-22 sm:h-22 lg:w-28 lg:h-28 mb-2.5 sm:mb-3 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={option.image}
          alt={option.label}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Label */}
      <span
        className={`
          text-sm sm:text-base lg:text-lg font-semibold transition-colors duration-300 px-[12px] py-1.5
          ${isSelected ? 'text-orange-500' : 'text-gray-700 group-hover:text-gray-900'}
        `}
      >
        {option.label}
      </span>
    </button>
  );
}
