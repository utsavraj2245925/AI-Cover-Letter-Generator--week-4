import { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import OutputBox from './OutputBox';
import ResumeUpload from './ResumeUpload';

export default function CoverLetterForm() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    skills: '',
    jobDescription: ''
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('mock');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOutput('');

    try {
      if (mode === 'mock') {
        const res = await axios.post('http://localhost:5000/api/mock-cover-letter', formData);
        setOutput(res.data.letter);
      } else {
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, value));
        if (resume) data.append('resume', resume);

        const res = await axios.post('http://localhost:5000/api/generate-cover-letter', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        setOutput(res.data.letter);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Check backend and API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Candidate Name" onChange={handleChange} required className="input" />
        <input name="role" placeholder="Job Role" onChange={handleChange} required className="input" />
        <input name="company" placeholder="Company Name" onChange={handleChange} required className="input" />
        <input name="skills" placeholder="Key Skills (comma separated)" onChange={handleChange} required className="input" />
      </div>

      <textarea
        name="jobDescription"
        placeholder="Paste Job Description here"
        onChange={handleChange}
        rows={4}
        className="input"
        required
      />

      <ResumeUpload onFileChange={setResume} />

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button type="button" onClick={() => setMode('mock')} className={`btn ${mode === 'mock' ? 'btn-active' : ''}`}>Mock AI</button>
          <button type="button" onClick={() => setMode('real')} className={`btn ${mode === 'real' ? 'btn-active' : ''}`}>Real AI</button>
        </div>

        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 px-6 rounded-lg">
          Generate Letter
        </button>
      </div>

      {loading && <Loader />}
      {output && <OutputBox text={output} />}
    </form>
  );
}
