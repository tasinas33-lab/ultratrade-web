import Image from "next/image";
import {
  Globe2,
  PackageSearch,
  Warehouse,
  Truck,
  ShieldCheck,
  Handshake,
  Zap,
} from "lucide-react";

const products = [
  {
    title: "Mobile Components",
    description: "Screens, cameras, boards, connectors and replacement parts.",
    image: "/mobile.jpg",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Laptop Parts",
    description: "Motherboards, RAM, SSDs, fans, batteries and internal parts.",
    image: "/laptop.jpg",
    color: "from-emerald-600 to-teal-500",
  },
  {
    title: "Displays & Touch Panels",
    description: "LCD modules, digitizers, tablet screens and touch assemblies.",
    image: "/display.jpg",
    color: "from-cyan-600 to-blue-500",
  },
  {
    title: "Batteries & Accessories",
    description: "Lithium batteries, power modules, cables and accessories.",
    image: "/battery.jpg",
    color: "from-purple-600 to-indigo-500",
  },
];

const services = [
  {
    title: "Global Sourcing",
    icon: Globe2,
    text: "We source electronic parts and components through an international supplier network.",
  },
  {
    title: "Procurement Support",
    icon: PackageSearch,
    text: "Send us your product list, part numbers or quantities and we organize the quotation process.",
  },
  {
    title: "Wholesale Distribution",
    icon: Warehouse,
    text: "Bulk supply solutions for distributors, repair centers, resellers and procurement teams.",
  },
  {
    title: "Export Logistics",
    icon: Truck,
    text: "Support for international shipping, documentation and trade coordination.",
  },
];

const advantages = [
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    text: "Parts are sourced from trusted suppliers and checked before shipment.",
  },
  {
    title: "Reliable Logistics",
    icon: Truck,
    text: "International shipping support for distributors, repair centers and traders.",
  },
  {
    title: "B2B Supply Focus",
    icon: Handshake,
    text: "Designed for bulk orders, recurring procurement and wholesale requirements.",
  },
  {
    title: "Fast Quotation",
    icon: Zap,
    text: "Send your part list and receive a structured quote from our sales team.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Ultratrade"
              width={230}
              height={60}
              priority
              className="h-auto w-[190px] md:w-[230px]"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#home" className="hover:text-teal-600">
              Home
            </a>
            <a href="#products" className="hover:text-teal-600">
              Products
            </a>
            <a href="#services" className="hover:text-teal-600">
              Services
            </a>
            <a href="#about" className="hover:text-teal-600">
              About Us
            </a>
            <a href="#contact" className="hover:text-teal-600">
              Contact
            </a>
          </nav>

          <a
            href="#quote"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            Request Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Electronics components warehouse"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/35" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-teal-300">
              Global Electronics Distribution
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Global Supplier of Electronic Components & Spare Parts
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-200">
              Reliable sourcing, procurement and wholesale distribution
              solutions for distributors, repair centers and international
              trading partners.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-teal-400"
              >
                Explore Products
              </a>

              <a
                href="#quote"
                className="rounded-lg border border-white/60 px-6 py-3 font-semibold text-white transition hover:border-teal-300 hover:text-teal-200"
              >
                Request Quote
              </a>
            </div>
          </div>

          {/* QUOTE FORM */}
          <div
            id="quote"
            className="rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur md:p-8"
          >
            <div className="mb-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                RFQ
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                Need a specific part?
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Send your requirements and our team will contact you.
              </p>
            </div>

            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Full Name"
                  className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
                />
                <input
                  placeholder="Company Name"
                  className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Email Address"
                  type="email"
                  className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
                />
                <input
                  placeholder="Phone Number"
                  className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  placeholder="Product / Part Required"
                  className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
                />
                <input
                  placeholder="Quantity"
                  className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
                />
              </div>

              <textarea
                placeholder="Message / Requirements"
                rows={4}
                className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
              />

              <button
                type="submit"
                className="rounded-lg bg-teal-600 py-3 font-bold text-white transition hover:bg-teal-700"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
            Product Categories
          </p>
          <h2 className="text-3xl font-black md:text-4xl">
            Electronic Spare Parts & Components
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Core product families for repair centers, distributors, resellers
            and procurement teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className={`bg-gradient-to-r ${product.color} p-5 text-white`}>
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
              Services
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              B2B Trade & Procurement Support
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We support international buyers with sourcing, purchasing and
              wholesale distribution of electronic components.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-teal-100 text-teal-700">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
              Why Ultratrade
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Built for Reliable Electronics Supply
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              A focused B2B supplier for electronic components, spare parts and
              wholesale procurement requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-teal-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-600">
              About Us
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Ultratrade Commercial Activities (FZ-LLC)
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ultratrade specializes in sourcing and wholesale distribution of
              electronic components, spare parts and accessories for
              international markets.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We work with distributors, repair centers, resellers and
              procurement teams that need reliable supply, competitive pricing
              and structured B2B trade support.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold">Company Focus</h3>
            <div className="mt-6 grid gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                Electronic Components
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                Spare Parts Distribution
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                International Wholesale Trade
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                B2B Procurement Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-300">
              Contact
            </p>
            <h2 className="text-3xl font-black md:text-4xl">
              Request Product Availability or a Quote
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Send your product list, part numbers or category requirements and
              our team will review your request.
            </p>

            <div className="mt-8 space-y-3 text-slate-300">
              <p>
                <span className="font-semibold text-white">Location:</span>{" "}
                Dubai, United Arab Emirates
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                sales@ultratrade.ae
              </p>
              <p>
                <span className="font-semibold text-white">Business:</span>{" "}
                Electronic components & spare parts distribution
              </p>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
            <div className="grid gap-4">
              <input
                placeholder="Name"
                className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
              />
              <input
                placeholder="Email"
                type="email"
                className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
              />
              <input
                placeholder="Company"
                className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="rounded-lg border border-slate-300 p-3 text-sm outline-none focus:border-teal-500"
              />
              <button className="rounded-lg bg-teal-600 py-3 font-bold text-white transition hover:bg-teal-700">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10 text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="inline-flex rounded-xl bg-white p-3">
                <Image
                  src="/logo.png"
                  alt="Ultratrade"
                  width={220}
                  height={60}
                  className="h-auto w-[190px]"
                />
              </div>

              <p className="mt-5 max-w-md text-sm leading-6">
                Ultratrade Commercial Activities (FZ-LLC) supplies electronic
                components, spare parts and accessories for B2B wholesale and
                international procurement needs.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                Products
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Mobile Components</li>
                <li>Laptop Parts</li>
                <li>Displays & Touch Panels</li>
                <li>Batteries & Accessories</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Dubai, United Arab Emirates</li>
                <li>info@ultratradeuae.com</li>
                <li>Electronic Components Distribution</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
            © 2026 Ultratrade Commercial Activities (FZ-LLC). All rights
            reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}