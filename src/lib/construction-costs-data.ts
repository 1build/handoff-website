export const calculators = [
  { title: "Cost to Install Vinyl Siding in Orlando, FL", category: "Siding", location: "Orlando, FL", slug: "cost-to-install-vinyl-siding-orlando-fl" },
  { title: "Cost to Install Fiber Cement Siding in Miami, FL", category: "Siding", location: "Miami, FL", slug: "cost-to-install-fiber-cement-siding-miami-fl" },
  { title: "Cost to Replace Wood Siding in Tampa, FL", category: "Siding", location: "Tampa, FL", slug: "cost-to-replace-wood-siding-tampa-fl" },
  { title: "Cost to Install Asphalt Shingles in Austin, TX", category: "Roofing", location: "Austin, TX", slug: "cost-to-install-asphalt-shingles-austin-tx" },
  { title: "Cost to Replace a Roof in Phoenix, AZ", category: "Roofing", location: "Phoenix, AZ", slug: "cost-to-replace-roof-phoenix-az" },
  { title: "Cost to Install Metal Roofing in Denver, CO", category: "Roofing", location: "Denver, CO", slug: "cost-to-install-metal-roofing-denver-co" },
  { title: "Cost to Install Central Air Conditioning in Dallas, TX", category: "HVAC", location: "Dallas, TX", slug: "cost-to-install-central-ac-dallas-tx" },
  { title: "Cost to Replace a Furnace in Chicago, IL", category: "HVAC", location: "Chicago, IL", slug: "cost-to-replace-furnace-chicago-il" },
  { title: "Cost to Install a Mini-Split System in Seattle, WA", category: "HVAC", location: "Seattle, WA", slug: "cost-to-install-mini-split-seattle-wa" },
  { title: "Cost to Rewire a House in Atlanta, GA", category: "Electrical", location: "Atlanta, GA", slug: "cost-to-rewire-house-atlanta-ga" },
  { title: "Cost to Install a New Electrical Panel in Houston, TX", category: "Electrical", location: "Houston, TX", slug: "cost-to-install-electrical-panel-houston-tx" },
  { title: "Cost to Install Recessed Lighting in Boston, MA", category: "Electrical", location: "Boston, MA", slug: "cost-to-install-recessed-lighting-boston-ma" },
  { title: "Cost to Repipe a House in San Diego, CA", category: "Plumbing", location: "San Diego, CA", slug: "cost-to-repipe-house-san-diego-ca" },
  { title: "Cost to Install a Water Heater in Nashville, TN", category: "Plumbing", location: "Nashville, TN", slug: "cost-to-install-water-heater-nashville-tn" },
  { title: "Cost to Replace a Bathtub in Portland, OR", category: "Plumbing", location: "Portland, OR", slug: "cost-to-replace-bathtub-portland-or" },
  { title: "Cost to Pour a Concrete Driveway in Charlotte, NC", category: "Concrete & Masonry", location: "Charlotte, NC", slug: "cost-to-pour-concrete-driveway-charlotte-nc" },
  { title: "Cost to Install Brick Pavers in Jacksonville, FL", category: "Concrete & Masonry", location: "Jacksonville, FL", slug: "cost-to-install-brick-pavers-jacksonville-fl" },
  { title: "Cost to Install New Windows in Portland, OR", category: "Doors & Windows", location: "Portland, OR", slug: "cost-to-install-new-windows-portland-or" },
  { title: "Cost to Replace an Entry Door in Columbus, OH", category: "Doors & Windows", location: "Columbus, OH", slug: "cost-to-replace-entry-door-columbus-oh" },
  { title: "Cost to Install Hardwood Floors in Memphis, TN", category: "Interior Finishes", location: "Memphis, TN", slug: "cost-to-install-hardwood-floors-memphis-tn" },
  { title: "Cost to Paint a House Interior in Detroit, MI", category: "Interior Finishes", location: "Detroit, MI", slug: "cost-to-paint-house-interior-detroit-mi" },
  { title: "Cost to Install a Patio in Philadelphia, PA", category: "Site work & Landscaping", location: "Philadelphia, PA", slug: "cost-to-install-patio-philadelphia-pa" },
  { title: "Cost to Grade a Yard in Indianapolis, IN", category: "Site work & Landscaping", location: "Indianapolis, IN", slug: "cost-to-grade-yard-indianapolis-in" },
  { title: "Cost to Install a Retaining Wall in San Antonio, TX", category: "Site work & Landscaping", location: "San Antonio, TX", slug: "cost-to-install-retaining-wall-san-antonio-tx" },
] as const;

export type Calculator = (typeof calculators)[number];

