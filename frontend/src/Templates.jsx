import React, { useState } from 'react';
import Header from '../components/Header';

const TEMPLATE_LIST = [
  { id: 'cronological', name: 'Cronological', thumbnail: '/templates/cronological.png' },
  { id: 'functional', name: 'Functional', thumbnail: '/templates/functional.png' },
  { id: 'combined', name: 'Combined', thumbnail: '/templates/combined.png' },
  { id: 'creative', name: 'Creative', thumbnail: '/templates/creative.png' },
  { id: 'minimal', name: 'Minimalist', thumbnail: '/templates/minimal.png' },
];

export default function Templates() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Choose Your Template</h1>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TEMPLATE_LIST.map((tpl) => (
              <div
                key={tpl.id}
                onClick={() => setSelected(tpl.id)}
                className={`cursor-pointer border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition ${
                  selected === tpl.id ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                <img
                  src={tpl.thumbnail}
                  alt={tpl.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-white">
                  <h2 className="text-lg font-semibold">{tpl.name}</h2>
                </div>
              </div>
            ))}
          </div>

          {selected && (
            <div className="mt-12 text-center">
              <p className="text-xl">
                You have selected:&nbsp;
                <span className="font-semibold">{selected}</span>
              </p>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Use this Template
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
