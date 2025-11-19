export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          SkillUp India
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#courses" className="text-white/90 hover:text-white transition-colors">
            Courses
          </a>
          <a href="#career-tracks" className="text-white/90 hover:text-white transition-colors">
            Career Tracks
          </a>
          <a href="#pricing" className="text-white/90 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#community" className="text-white/90 hover:text-white transition-colors">
            Community
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-6">
          <a href="#login" className="text-white/90 hover:text-white transition-colors">
            Login
          </a>
          <button className="bg-[#A3E635] text-[#5B21B6] px-6 py-2.5 rounded-lg hover:bg-[#92d629] transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}
