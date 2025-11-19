import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#5B21B6] to-[#7c3aed] py-16 px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#A3E635] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-white mb-4">
            Start Your 7-Day Free Trial Today
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            No credit card required. Get instant access to all courses and start learning today.
          </p>

          <button className="bg-[#A3E635] text-[#5B21B6] px-10 py-4 rounded-lg hover:bg-[#92d629] transition-all hover:shadow-2xl hover:shadow-[#A3E635]/30 inline-flex items-center gap-2 group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-white/60 text-sm mt-6">
            Join 15,000+ students already upskilling with SkillUp India
          </p>
        </div>
      </div>
    </section>
  );
}
