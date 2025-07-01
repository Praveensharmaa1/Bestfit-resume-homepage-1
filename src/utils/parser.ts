export async function parseResume(buffer: ArrayBuffer): Promise<any> {
  // TODO: replace with pdf-parse / mammoth logic
  return {
    name: "Praveen Sharma",
    email: "praveen.sharmaa1@gmail.com",
    phone: "+91-9829389928",
    linkedin: "https://linkedin.com/in/praveen-sharma-9a42b232",
    summary: "Experienced Sales & Marketing Leader",
    experience: [],
    education: [],
    skills: [],
    certifications: []
  };
}
