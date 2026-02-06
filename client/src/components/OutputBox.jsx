export default function OutputBox({ text }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert('Cover letter copied to clipboard!');
  };

  return (
    <div className="mt-6">
      <textarea
        value={text}
        readOnly
        rows={10}
        className="w-full p-4 rounded-lg bg-slate-800 border border-slate-600 text-slate-100"
      />
      <button
        onClick={copyToClipboard}
        className="mt-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-lg"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}
