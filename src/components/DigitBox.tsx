export const DigitBox = ({ digit }: { digit: string }) => (
  <div className="w-10 h-16 md:w-14 md:h-20 border-2 border-primary rounded-xl flex items-center justify-center bg-light text-3xl md:text-5xl font-slant text-dark shadow-sm">
    {digit}
  </div>
)
