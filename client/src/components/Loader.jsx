export default function Loader() {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <div className="w-4 h-4 rounded-full bg-cyan-400 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-cyan-400 animate-bounce delay-150"></div>
      <div className="w-4 h-4 rounded-full bg-cyan-400 animate-bounce delay-300"></div>
      <span className="ml-2 text-cyan-300">Generating...</span>
    </div>
  );
}
