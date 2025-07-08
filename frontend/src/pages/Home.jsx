// frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Example data; you can fetch these from your API instead
const FEATURES = [
  {
    icon: '📝',
    title: 'Resume Builder',
    description:
      'Intuitive form-driven builder with live preview. Add, remove and reorder sections in real time.',
  },
  {
    icon: '🤖',
    title: 'AI Suggestions',
    description:
      'Get smart content tips—concise bullet points, power verbs, and character‑limit guidance per section.',
  },
  {
    icon: '🎨',
    title: 'Template Switching',
    description:
      'Instantly switch between multiple professionally designed CV layouts without losing your data.',
  },
  {
    icon: '📄',
    title: 'PDF Extraction',
    description:
      'Upload your old resume (PDF or Word) and auto‑extract education, work history, and skills.',
  },
  {
    icon: '🔗',
    title: 'LinkedIn Import',
    description:
      'One‑click import from your LinkedIn profile to prefill most fields—then fill only what’s missing.',
  },
];

const TESTIMONIALS = [
  {
    avatar: 'https://i.pravatar.cc/100?img=32',
    name: 'Ana García',
    role: 'Product Manager',
    quote:
      'BestFit Resume’s AI suggestions transformed my career story—hired within two weeks!',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=47',
    name: 'Juan Pérez',
    role: 'Software Engineer',
    quote:
      'I loved switching templates on the fly. It helped me tailor my CV to different roles instantly.',
  },
];

const BLOG_PREVIEWS = [
  {
    title: 'Top 5 Tips to Ace Your Next Interview',
    slug: '/blog/interview-tips',
    excerpt:
      'Learn the secrets behind confident answers, body language, and follow‑up strategies that impress hiring managers.',
  },
  {
    title: 'How to Showcase Your Soft Skills',
    slug: '/blog/personality-development',
    excerpt:
      'Beyond technical expertise—build communication, teamwork, and leadership traits that stand out.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BestFit Resume
          </Link>
          <nav className="space-x-6">
            <Link to="/templates" className="hover:text-blue-600">
              Templates
            </Link>
            <Link to="/editor" className="hover:text-blue-600">
              Create CV
            </Link>
            <Link to="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Build the Perfect Resume in Minutes
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            AI‑powered content suggestions, rapid template switching, and data import
            from your LinkedIn or old resume. Everything you need to land your dream job.
          </p>
          <Link
            to="/templates"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Get Started Free
          </Link>
        </div>
        {/* Decorative SVG wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
            <path
              d="M0,0 C600,100 600,0 1200,100 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="p-6 border rounded-lg hover:shadow-lg transition">
                <div className="text-5xl mb-4 text-blue-600">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-700">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">From Our Blog</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {BLOG_PREVIEWS.map((b) => (
              <Link
                key={b.slug}
                to={b.slug}
                className="block p-6 border rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="text-blue-600 font-semibold hover:underline">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">BestFit Resume</h4>
            <p>
              AI-powered resume builder helping you stand out and land interviews faster.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/templates" className="hover:text-white">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/editor" className="hover:text-white">
                  Create CV
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <p>Email: support@bestfitresume.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>© {new Date().getFullYear()} BestFit Resume</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
