export default function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 animate-scale-in">
      {/* Success checkmark circle */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/30">
          <svg
            className="w-14 h-14 text-white animate-checkmark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 w-28 h-28 rounded-full ring-[6px] ring-orange-100 animate-ping opacity-20" />
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
        Thank you!
      </h1>
      <p className="text-gray-500 text-base sm:text-lg max-w-sm leading-relaxed">
        Your application has been submitted successfully. We'll contact you shortly to get you started.
      </p>

      {/* Decorative divider */}
      <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-8" />
    </div>
  );
}
