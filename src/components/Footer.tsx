import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const links = {
    company: ["About Us", "Careers", "Press", "Contact"],
    courses: ["Data Analytics", "Web Development", "Digital Marketing", "UI/UX Design"],
    support: ["Help Center", "Terms of Service", "Privacy Policy", "Refund Policy"],
    community: ["Discord", "Blog", "Events", "Success Stories"]
  };

  return (
    <footer className="bg-[#020617] text-white py-16 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-5 gap-12 mb-12">
          <div className="col-span-1">
            <div className="text-xl mb-4">SkillUp India</div>
            <p className="text-white/60 text-sm mb-6">
              Empowering Indian students with job-ready skills since 2020.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-[#A3E635] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#A3E635] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#A3E635] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#A3E635] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#A3E635] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Courses</h4>
            <ul className="space-y-2">
              {links.courses.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Community</h4>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <p className="text-white/60 text-sm">
            © 2025 SkillUp India. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
