import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import pdfParse from 'pdf-parse';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

function mockAI({ name, role, company, skills }) {
  return `Dear Hiring Manager at ${company},

I am writing to express my strong interest in the ${role} position. My name is ${name}, and I bring a strong background in ${skills}. I am confident that my skills and passion make me a strong candidate for this role.

I am excited about the opportunity to contribute to your team and grow professionally at ${company}.

Sincerely,
${name}`;
}

app.post('/api/mock-cover-letter', (req, res) => {
  const letter = mockAI(req.body);
  res.json({ letter });
});

app.post('/api/generate-cover-letter', upload.single('resume'), async (req, res) => {
  try {
    const { name, role, company, skills, jobDescription } = req.body;
    let resumeText = '';

    if (req.file) {
      const data = await pdfParse(req.file.buffer);
      resumeText = data.text;
    }

    const prompt = `Write a professional, well-formatted cover letter for ${name} applying to the role of ${role} at ${company}.

Candidate Skills: ${skills}

Job Description:
${jobDescription}

Resume:
${resumeText}

Format the letter with proper paragraphs and professional tone.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const letter = data.candidates?.[0]?.content?.parts?.[0]?.text || "Failed to generate letter.";
    res.json({ letter });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'AI generation failed.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
