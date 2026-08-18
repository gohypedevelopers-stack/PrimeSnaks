export default function Features() {
  const features = [
    {
      icon: "spa",
      title: "Natural & Organic",
      description: "Purity without compromise. Every ingredient is sourced from nature—clean, authentic, and free from harmful chemicals."
    },
    {
      icon: "eco",
      title: "Eco-Responsibility",
      description: "Mindful sourcing and eco-conscious packaging. Protecting the world for tomorrow while nourishing you today."
    },
    {
      icon: "verified",
      title: "Uncompromised Quality",
      description: "Rigorous testing and premium craftsmanship in every batch with no shortcuts and no exceptions."
    },
    {
      icon: "family_restroom",
      title: "Family-Focused Wellness",
      description: "Thoughtfully crafted for every life stage, from growing children to active adults."
    }
  ];

  return (
    <section className="w-full py-section-gap bg-background border-b-2 border-deep-ink">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-primary mb-2 block uppercase">Our Promise</span>
          <h2 className="font-headline-lg text-headline-lg text-deep-ink uppercase">Why Customers Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-surface-container border-2 border-deep-ink p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-16 h-16 bg-primary rounded-full border-2 border-deep-ink flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-benefit-heading text-benefit-heading text-deep-ink mb-4 uppercase">{feature.title}</h3>
              <p className="font-body-md text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
