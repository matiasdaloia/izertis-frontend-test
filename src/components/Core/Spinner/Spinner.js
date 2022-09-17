const Spinner = () => {
  return (
    <div className="flex items-center justify-center fixed w-full h-[100vh] top-0 left-0 bg-slate-100">
      <div className="w-9 h-9 border border-green-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
