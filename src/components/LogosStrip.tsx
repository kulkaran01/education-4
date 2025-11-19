export function LogosStrip() {
  const partners = [
    'TechCorp',
    'InnovateLabs',
    'DataMinds',
    'CloudScale',
    'CodeCraft',
    'DigitalEdge'
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-200">
      <div className="max-w-[1440px] mx-auto px-8">
        <p className="text-center text-gray-500 text-sm mb-8">
          Our students are hired by leading companies
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
