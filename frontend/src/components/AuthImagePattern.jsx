const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 w-full h-full">
      <div className="max-w-md text-center">
        {/* Grid of dimmed, animated boxes */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl ${
                i % 2 === 0
                  ? "bg-purple-500 bg-opacity-30 animate-pulse"
                  : "bg-purple-400 bg-opacity-20"
              }`}
            />
          ))}
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-base text-base-content/70">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
