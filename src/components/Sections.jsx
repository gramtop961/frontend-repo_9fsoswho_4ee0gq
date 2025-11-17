function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm p-6">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">{title}</h2>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </section>
  )
}

function Sections() {
  return (
    <div className="flex flex-col gap-6">
      <Section id="history" title="Our History">
        <p>
          We’re a locally owned, community-first supermarket. From everyday groceries to
          butcher-cut meats and farm-fresh produce, we’ve proudly served our neighbors for decades.
        </p>
      </Section>
      <Section id="reviews" title="Google Reviews">
        <p>
          Folks love our friendly staff, clean aisles, and great prices. Check out our latest reviews
          on Google to see what your neighbors are saying.
        </p>
        <div className="mt-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Tabo%27s+Piggly+Wiggly"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700"
          >
            See Reviews on Google
          </a>
        </div>
      </Section>
      <Section id="ads" title="Past Ads">
        <p>
          Browse highlights from our past circulars and in-store promotions. Fresh deals every week!
        </p>
      </Section>
      <Section id="community" title="Community Involvements">
        <p>
          We sponsor local teams, support school fundraisers, and host community events year-round.
          Thank you for shopping local and helping us give back.
        </p>
      </Section>
    </div>
  )
}

export default Sections
