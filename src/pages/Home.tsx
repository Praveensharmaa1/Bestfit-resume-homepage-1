import { Button } from "../components/ui/button";
import hero from "../assets/hero.jpg";
import template1 from "../assets/template1.jpg";
import template2 from "../assets/template2.jpg";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <img src={hero} alt="Hero" className="mx-auto mb-6 rounded-xl shadow-md w-full max-w-4xl" />
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Build Your Best Professional Resume
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Create recruiter-approved, ATS-friendly resumes with BestFit Resume.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Browse Templates</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Why Choose BestFit Resume?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6">
          {[
            {
              title: "AI-Powered Suggestions",
              desc: "Get intelligent improvement tips for grammar, content, and structure.",
            },
            {
              title: "20+ Professional Templates",
              desc: "Modern industry-specific templates to impress recruiters.",
            },
            {
              title: "Multiple Resume Versions",
              desc: "Tailor your resume for different job roles and save versions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 shadow hover:shadow-md transition text-left"
            >
              <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates Preview */}
      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Popular Resume Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {[template1, template2, template1].map((src, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <img src={src} alt={`Template ${i + 1}`} className="rounded mb-2 w-full" />
              <p className="font-medium text-gray-700">Template {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} BestFit Resume. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
