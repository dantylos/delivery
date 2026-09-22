export default function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 py-12 sm:py-16 animate-scale-in">
      {/* Success checkmark circle */}
      <div className="relative mb-6 sm:mb-8">
        <div className="w-22 h-22 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/30">
          <svg
            className="w-11 h-11 sm:w-14 sm:h-14 text-white animate-checkmark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 w-22 h-22 sm:w-28 sm:h-28 rounded-full ring-[6px] ring-orange-100 animate-ping opacity-20" />
      </div>

      <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2.5 sm:mb-3">
        Thank you!
      </h1>
      <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm leading-relaxed">
        Your application has been submitted successfully. We'll contact you shortly to get you started.
      </p>

      {/* Decorative divider */}
      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-6 sm:mt-8" />
    </div>
  );
}
