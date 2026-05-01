const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full space-y-4">
      {/* Glassmorphic Spinner Container */}
      <div className="relative flex items-center justify-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Optional Inner Glow */}
        <div className="absolute inset-0 rounded-2xl bg-blue-500/5 blur-xl"></div>
      </div>
      
      <p className="text-gray-400 animate-pulse font-medium tracking-wide">
        Loading Data...
      </p>
    </div>
  );
};

export default Loading;