import { Clock, TrendingUp, Award, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroBento() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#5B21B6] pt-32 pb-20 px-8 overflow-hidden">
      {/* Subtle grain effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Side - Main Content */}
          <div className="flex flex-col justify-center gap-8">
            <div className="inline-flex">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-[#A3E635] border border-white/20">
                Learn Job-Ready Skills
              </span>
            </div>

            <h1 className="text-white">
              Upgrade Your Career with Practical Courses
            </h1>

            <p className="text-white/80 text-lg max-w-xl">
              Learn from industry mentors, build real-world projects, and get placement support. 
              Designed specifically for the Indian job market with weekend batches and flexible schedules.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#A3E635] text-[#5B21B6] px-8 py-3 rounded-lg hover:bg-[#92d629] transition-all hover:shadow-lg hover:shadow-[#A3E635]/20">
                Browse Courses
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                Join Free Webinar
              </button>
            </div>
          </div>

          {/* Right Side - Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 - Data Analytics */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-purple-500/20 group">
              <div className="w-12 h-12 rounded-lg bg-[#A3E635]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-[#A3E635]" />
              </div>
              <h3 className="text-white mb-2">Data Analytics Track</h3>
              <p className="text-white/70 text-sm mb-3">Master Python, SQL & Tableau</p>
              <div className="flex items-center gap-4 text-xs text-white/60">
                <span>6 Months</span>
                <span>•</span>
                <span className="text-[#A3E635]">242 Enrolled</span>
              </div>
            </div>

            {/* Card 2 - Web Development */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-purple-500/20 group">
              <div className="w-12 h-12 rounded-lg bg-[#A3E635]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#A3E635]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-white mb-2">Web Dev Bootcamp</h3>
              <p className="text-white/70 text-sm mb-3">MERN Stack + Projects</p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#A3E635]/20 text-[#A3E635] text-xs">
                4 Months
              </span>
            </div>

            {/* Card 3 - Live Weekend Batches */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-purple-500/20 group">
              <div className="w-12 h-12 rounded-lg bg-[#A3E635]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-[#A3E635]" />
              </div>
              <h3 className="text-white mb-2">Live Weekend Batches</h3>
              <p className="text-white/70 text-sm">Perfect for working professionals</p>
            </div>

            {/* Card 4 - Placement Support */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-purple-500/20 group">
              <div className="w-12 h-12 rounded-lg bg-[#A3E635]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-[#A3E635]" />
              </div>
              <h3 className="text-white mb-2">Placement Support</h3>
              <p className="text-white/70 text-sm">Mock interviews & resume reviews</p>
            </div>

            {/* Card 5 - Testimonial */}
            <div className="col-span-2 bg-gradient-to-br from-[#A3E635]/20 to-[#A3E635]/5 backdrop-blur-md rounded-2xl p-6 border border-[#A3E635]/30 hover:shadow-xl hover:shadow-[#A3E635]/10 transition-all">
              <div className="flex items-start gap-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1623303366639-0e330d7c3d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzYzNDgwMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-white/90 text-sm italic mb-2">
                    "Landed my dream job at a startup after completing the Full Stack course. The projects helped me build a strong portfolio!"
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-white">Priya Sharma</span>
                    <span className="text-white/50">•</span>
                    <span className="text-[#A3E635] text-sm">Now at TechCorp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
