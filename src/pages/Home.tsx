import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="font-inter">
      <section className="text-center p-10">
        <h1 className="text-4xl font-bold">Build Your Best Professional Resume</h1>
        <p className="mt-4 text-lg">Create recruiter-approved, ATS-friendly resumes with BestFit Resume.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Browse Templates</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;