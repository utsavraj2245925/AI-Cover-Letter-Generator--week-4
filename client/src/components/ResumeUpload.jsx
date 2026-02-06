export default function ResumeUpload({ onFileChange }) {
  return (
    <div className="mt-4">
      <label className="block mb-1 text-sm text-slate-300">Upload Resume (PDF)</label>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => onFileChange(e.target.files[0])}
        className="w-full p-2 rounded-lg bg-slate-800 border border-slate-600 text-slate-200"
      />
    </div>
  );
}
