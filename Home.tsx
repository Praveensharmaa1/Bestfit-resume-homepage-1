import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="font-inter">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Build Your Best Professional Resume
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Create recruiter-approved, ATS-friendly resumes with BestFit Resume.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Browse Templates</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;