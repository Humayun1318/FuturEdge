const GradientLoader = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
        <p className="mt-4 text-indigo-600 font-medium">Loading your data...</p>
      </div>
    </div>
  );
};

export default GradientLoader;
