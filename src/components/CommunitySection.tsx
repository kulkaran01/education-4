import { MessageSquare, Video, Users, Award } from 'lucide-react';

export function CommunitySection() {
  const communityFeatures = [
    {
      icon: MessageSquare,
      title: 'Discord Community',
      description: '5,000+ active learners',
      color: 'bg-indigo-500'
    },
    {
      icon: Video,
      title: 'Live Q&A Sessions',
      description: 'Every weekend with mentors',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Peer Study Groups',
      description: 'Connect & collaborate',
      color: 'bg-pink-500'
    },
    {
      icon: Award,
      title: 'Alumni Network',
      description: '10,000+ successful graduates',
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="community" className="bg-[#F9FAFB] py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#020617] mb-4">
            Join a Thriving Learning Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You're never alone in your learning journey. Get support from mentors, peers, and alumni.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all group cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${feature.color.replace('bg-', 'text-')}`} />
                </div>

                <h3 className="text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
