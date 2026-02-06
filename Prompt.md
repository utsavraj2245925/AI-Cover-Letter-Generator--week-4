# Prompt Engineering – AI Cover Letter Generator

This document explains the prompt design used in the AI Cover Letter Generator project and how user input is transformed into a high-quality, professional cover letter.

---

## 🎯 Objective

The goal of the prompt is to generate a:
- Professional
- Well-formatted
- Personalized
- Job-specific cover letter

Using:
- Candidate details
- Job description
- Resume content (if uploaded)

---

## 🧠 Prompt Template

The backend dynamically constructs the following prompt:


---

## 🔍 Prompt Variables

| Variable | Description |
|----------|-------------|
| `{Name}` | Candidate's full name |
| `{Job Role}` | Target job role |
| `{Company Name}` | Company being applied to |
| `{Skills}` | Candidate’s key skills |
| `{Job Description}` | Full job posting text |
| `{Extracted Resume Text}` | Text parsed from uploaded resume PDF |

---

## ✨ Prompt Design Principles

- **Personalization:** Uses both resume and job description.
- **Professional Tone:** Enforces business-appropriate language.
- **Structure Control:** Requests proper paragraphs and formatting.
- **Relevance:** Ensures alignment between candidate skills and job role.

---

## 🧪 Example Prompt (Filled)


---

## ✅ Expected Output Characteristics

- Contains greeting and closing
- Includes 3–5 structured paragraphs
- Highlights relevant skills and experience
- Aligns with job description
- Maintains professional business tone

---

## 🔐 Security Note

No sensitive data (API keys or secrets) is included in the prompt. All keys are stored securely in `.env` files.

---

## 🚀 Future Improvements

- Add tone selection (formal, creative, friendly)
- Add language selection (English, Hindi, etc.)
- Add ATS optimization instructions
- Add role-specific templates

---

Prepared by: **Utsav Raj**  
Project: *AI Cover Letter Generator*
