import { CheckCircle, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OutcomeSection() {
  const benefits = [
    'Real-world assignments from actual companies',
    'Personalized mentor feedback on every project',
    'Build 5+ portfolio-ready projects',
    'Industry-standard tools and technologies'
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#A3E635]/10 border border-[#A3E635]/30">
              <Award className="w-4 h-4 text-[#5B21B6]" />
              <span className="text-[#5B21B6] text-sm">Made for Indian job market</span>
            </div>

            <h2 className="text-[#020617] mb-6">
              Learn with Projects, Not Just Videos
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              Our courses focus on practical application. You'll work on real projects, 
              get feedback from industry mentors, and build a portfolio that stands out to employers.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#5B21B6] text-white px-8 py-3 rounded-lg hover:bg-[#4c1d95] transition-all hover:shadow-lg hover:shadow-purple-500/30">
              View Career Tracks
            </button>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-800">
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzM3MTgzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Learning dashboard"
                className="w-full"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              <div className="text-3xl text-[#5B21B6] mb-1">94%</div>
              <div className="text-sm text-gray-600">Completion Rate</div>
            </div>

            <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              <div className="text-3xl text-[#A3E635] mb-1">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
