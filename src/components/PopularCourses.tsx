import { Clock, BarChart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PopularCourses() {
  const courses = [
    {
      title: 'Data Analytics Masterclass',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzM3MTgzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '6 Months',
      level: 'Beginner',
      students: '1,242 students',
      price: '₹24,999'
    },
    {
      title: 'Full Stack Web Development',
      thumbnail: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzNDYxNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '4 Months',
      level: 'Intermediate',
      students: '2,156 students',
      price: '₹29,999'
    },
    {
      title: 'Digital Marketing & Growth',
      thumbnail: 'https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzQ2MzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3 Months',
      level: 'Beginner',
      students: '892 students',
      price: '₹19,999'
    },
    {
      title: 'UI/UX Design Bootcamp',
      thumbnail: 'https://images.unsplash.com/photo-1587902673915-631e5ba4488f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzYzNDgyODk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '5 Months',
      level: 'Beginner',
      students: '1,543 students',
      price: '₹27,999'
    }
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#020617] mb-4">Popular Courses for 2025</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry-vetted curriculum designed to get you job-ready with hands-on projects and mentor support
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-[#5B21B6] text-white px-3 py-1 rounded-full text-xs">
                  {course.level}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-gray-900 mb-4 group-hover:text-[#5B21B6] transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-[#5B21B6]">{course.price}</span>
                  <button className="text-[#5B21B6] hover:text-[#4c1d95] transition-colors">
                    Enroll Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
