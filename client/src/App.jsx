import CoverLetterForm from './components/CoverLetterForm';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-slate-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
          AI Cover Letter Generator
        </h1>
        <CoverLetterForm />
      </div>
    </div>
  );
}
