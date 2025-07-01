// src/lib/parseResume.ts
import pdf from 'pdf-parse';
import mammoth from 'mammoth';

/** Extract plain text from a PDF buffer */
export async function extractTextFromPDF(buffer: Buffer): Promise<string> {
  const data = await pdf(buffer);
  return data.text;
}

/** Extract plain text from a DOCX buffer */
export async function extractTextFromDocx(buffer: Buffer): Promise<string> {
  const result = await mammoth.extractRawText({ buffer });
  return result.value;
}

/** Basic field parser */
export function parseFields(text: string) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  const emailMatch = text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
  const phoneMatch = text.match(/(\+?\d{1,3}[-.\s]?)?\d{10}/);

  const skillsSection = text.match(/Skills[:\s]*(.+?)(?:Experience|Education)/is);
  const skills = skillsSection ? skillsSection[1].split(/,|\s•\s/) : [];

  return {
    name: lines[0] || '',
    email: emailMatch?.[0] || '',
    phone: phoneMatch?.[0] || '',
    skills: skills.map(s => s.trim()),
    // you can extend to parse experience, education, etc.
  };
}
