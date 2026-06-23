import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Brand Strategy',
    description:
      'Positioning, naming, and messaging that give a company a clear point of view long before a single pixel gets drawn.',
  },
  {
    number: '02',
    name: 'Visual Identity',
    description:
      'Logos, type systems, and color worlds that turn a brand’s personality into something people recognize at a glance.',
  },
  {
    number: '03',
    name: 'Web Design',
    description:
      'Clean, modern, conversion-focused sites built around real content, fast loading, and a confident first impression.',
  },
  {
    number: '04',
    name: 'Art Direction',
    description:
      'Guiding the look and feel of launches, campaigns, and shoots so every touchpoint speaks with a single voice.',
  },
  {
    number: '05',
    name: 'Design Systems',
    description:
      'Reusable components, tokens, and guidelines that keep growing teams shipping consistent work without the guesswork.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(12, 12, 12, 0.15)',
              borderBottom:
                i === SERVICES.length - 1
                  ? '1px solid rgba(12, 12, 12, 0.15)'
                  : undefined,
            }}
          >
            <span
              className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-3 pt-1">
              <h3
                className="text-[#0C0C0C] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                style={{
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  opacity: 0.6,
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
