import React, { useState } from "react";
import { parseResume } from "../utils/parser";

export default function UploadResume() {
  const [data, setData] = useState<any>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const buffer = await file.arrayBuffer();
    const parsed = await parseResume(buffer);
    setData(parsed);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upload Your Resume</h1>
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
      {data && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
