import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
  Snowflake,
  Wallet,
  Package,
  Timer,
  Users,
  Wind,
  Leaf,
  Box,
  ChevronDown,
  MessageCircle,
  Gift,
  Star,
} from "lucide-react";
import heroMachine from "@/assets/hero-machine.jpg";
import freshFood from "@/assets/fresh-food.jpg";
import spoiledFood from "@/assets/spoiled-food.jpg";
import happyFamily from "@/assets/happy-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Food Saver Machine — Keep Food Fresh 5X Longer | Pay On Delivery" },
      {
        name: "description",
        content:
          "Seal meat, vegetables and snacks airtight in seconds. Stop wasting food. Pay on delivery, nationwide shipping in Nigeria.",
      },
      { property: "og:title", content: "Food Saver Machine — Keep Food Fresh 5X Longer" },
      {
        property: "og:description",
        content: "Vacuum seal food in seconds. Pay on delivery nationwide.",
      },
    ],
  }),
  component: Landing,
});

function TrustChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[color:var(--ink-soft)]">
      <CheckCircle2 className="h-4 w-4 text-[color:var(--brand-green)]" />
      {children}
    </span>
  );
}

function Landing() {
  // Countdown
  const [time, setTime] = useState({ h: 5, m: 59, s: 59 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const benefits = [
    { icon: Leaf, title: "Preserves Freshness Longer", text: "Lock in flavor and nutrients up to 5x longer." },
    { icon: Snowflake, title: "Prevents Freezer Burn", text: "No more icy, tasteless meat or fish." },
    { icon: Wallet, title: "Saves Money On Food", text: "Stop throwing money in the bin every week." },
    { icon: Box, title: "Compact & Easy To Store", text: "Slim design that fits any kitchen drawer." },
    { icon: Timer, title: "Works In Seconds", text: "Just place, press, and seal — that simple." },
    { icon: Users, title: "Perfect For Busy Families", text: "Meal-prep for the week without the stress." },
  ];

  const reviews = [
    { name: "Mrs. Adaeze, Lagos", text: "My tomatoes used to spoil in 3 days. Now they last over 2 weeks. Worth every naira!", rating: 5 },
    { name: "Chinedu, Abuja", text: "I freeze meat for the whole month now. No freezer smell, no waste.", rating: 5 },
    { name: "Hauwa, Kano", text: "Delivery was fast and I paid on delivery. Very easy to use!", rating: 5 },
  ];

  const faqs = [
    { q: "Is it easy to use?", a: "Yes, anyone can use it within minutes — just place the bag, close the lid and press one button." },
    { q: "Does it work for soup ingredients?", a: "Yes. It works perfectly for meat, fish, vegetables, pepper, and pre-cut soup ingredients." },
    { q: "Can I pay on delivery?", a: "Yes, we offer pay on delivery in selected locations across Nigeria." },
    { q: "Does it come with sealing bags?", a: "Yes — every order includes 10 FREE vacuum bags as a gift." },
    { q: "How long does delivery take?", a: "Between 2–5 working days depending on your location." },
  ];

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white section-pad">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-mint)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-green)]">
              <Sparkles className="h-3.5 w-3.5" /> #1 Kitchen Upgrade in Nigeria
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-[color:var(--brand-green)] sm:text-5xl lg:text-6xl">
              Keep Your Food Fresh <span className="text-[color:var(--brand-orange)]">5X Longer</span> Without Fridge Stress
            </h1>
            <p className="mt-5 max-w-lg text-lg text-[color:var(--ink-soft)]">
              Seal meat, vegetables, soup ingredients and snacks airtight in seconds — and stop throwing money in the bin.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4">
              <a href="#order" className="btn-cta-deep w-full sm:w-auto">
                ORDER NOW →
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <TrustChip>Pay On Delivery</TrustChip>
                <TrustChip>Nationwide Delivery</TrustChip>
                <TrustChip>Easy To Use</TrustChip>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--brand-mint)]" aria-hidden />
            <img
              src={heroMachine}
              alt="Food Saver Machine sealing fresh vegetables"
              width={1280}
              height={1280}
              className="relative rounded-[1.75rem] shadow-xl"
            />
            <img
              src={freshFood}
              alt="Vacuum sealed fresh food"
              width={1280}
              height={1024}
              loading="lazy"
              className="absolute -bottom-6 -left-6 hidden w-44 rounded-2xl border-4 border-white shadow-2xl sm:block"
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[color:var(--brand-cream)] section-pad">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2">
          <img
            src={spoiledFood}
            alt="Spoiled tomatoes wasting in fridge"
            width={1024}
            height={1024}
            loading="lazy"
            className="order-last rounded-2xl shadow-lg lg:order-first"
          />
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[color:var(--ink)] sm:text-4xl">
              Tired Of Wasting Food <span className="text-[color:var(--brand-orange-deep)]">Every Week?</span>
            </h2>
            <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
              Many homes waste thousands monthly because food spoils too fast.
            </p>
            <ul className="mt-6 space-y-3 text-[color:var(--ink-soft)]">
              {[
                "Meat and fish go bad within days.",
                "Tomatoes and pepper rot before you use them.",
                "Your freezer always carries that bad smell.",
                "Moisture ruins your stored food.",
                "You keep spending the same money — over and over.",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-orange)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white section-pad">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-3xl font-bold text-[color:var(--brand-green-deep)] sm:text-4xl">
            The Smart Way To Preserve Food
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[color:var(--ink-soft)]">
            Three simple steps. Anyone in your house can do it.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Put food in the bag", d: "Add your meat, fish, veggies or soup ingredients into a vacuum bag." },
              { n: "02", t: "Place inside the machine", d: "Lay the open end of the bag inside the sealer." },
              { n: "03", t: "Seal in seconds", d: "Press one button. Air sucked out. Bag sealed airtight." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-[color:var(--brand-mint)] bg-white p-6 text-left shadow-sm">
                <div className="text-3xl font-extrabold text-[color:var(--brand-orange)]">{s.n}</div>
                <h3 className="mt-2 text-xl font-bold text-[color:var(--brand-green)]">{s.t}</h3>
                <p className="mt-2 text-[color:var(--ink-soft)]">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { i: ShieldCheck, t: "Airtight Seal" },
              { i: Leaf, t: "Stays Fresh" },
              { i: Box, t: "Saves Space" },
              { i: Wind, t: "No Bad Odor" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="flex flex-col items-center rounded-xl bg-[color:var(--brand-mint)] p-5">
                <Icon className="h-8 w-8 text-[color:var(--brand-green-deep)]" />
                <p className="mt-2 text-sm font-semibold text-[color:var(--ink)]">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[color:var(--brand-mint)] section-pad">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[color:var(--brand-green)] sm:text-4xl">
              Why Families Love It
            </h2>
            <p className="mt-3 text-[color:var(--ink-soft)]">Six reasons to never waste food again.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_-12px_rgba(20,83,45,0.15)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--brand-mint)]">
                  <Icon className="h-6 w-6 text-[color:var(--brand-green-deep)]" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[color:var(--brand-green)]">{title}</h3>
                <p className="mt-2 text-[color:var(--ink-soft)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIFT BANNER */}
      <section className="bg-white py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--brand-orange-deep)] p-6 text-center text-white sm:flex-row sm:text-left">
          <Gift className="h-10 w-10 shrink-0" />
          <div className="flex-1">
            <p className="text-xl font-bold font-display">FREE GIFT: 10 Vacuum Bags Included</p>
            <p className="text-white/90">Worth ₦5,000 — added free with every order this week.</p>
          </div>
          <a href="#order" className="rounded-full bg-white px-5 py-2.5 font-semibold text-[color:var(--brand-orange-deep)]">
            Claim Mine
          </a>
        </div>
      </section>

      {/* FEATURES / SPECS */}
      <section className="bg-white section-pad">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[color:var(--brand-green)] sm:text-4xl">Product Specifications</h2>
            <p className="mt-3 text-[color:var(--ink-soft)]">Quality that lasts. Designed for everyday use.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--brand-mint)]">
            <table className="w-full text-left">
              <tbody className="divide-y divide-[color:var(--brand-mint)] text-[color:var(--ink)]">
                {[
                  ["Voltage", "220V – 240V"],
                  ["Power", "120W (very low electricity consumption)"],
                  ["Size", "35 × 12 × 7 cm"],
                  ["Material", "ABS Food-Grade Plastic"],
                  ["Vacuum Strength", "-60 kPa Strong Suction"],
                  ["Weight", "1.2 kg (lightweight)"],
                ].map(([k, v]) => (
                  <tr key={k} className="bg-white hover:bg-[color:var(--brand-mint)]/40">
                    <th className="w-1/3 p-4 font-semibold text-[color:var(--brand-green-deep)]">{k}</th>
                    <td className="p-4 text-[color:var(--ink-soft)]">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-[color:var(--brand-gray-bg)] section-pad">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[color:var(--brand-green)] sm:text-4xl">What Customers Are Saying</h2>
            <p className="mt-3 text-[color:var(--ink-soft)]">Real reviews from real Nigerian families.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex gap-1 text-[color:var(--brand-orange)]">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-[color:var(--ink-soft)]">“{r.text}”</p>
                <p className="mt-4 text-sm font-semibold text-[color:var(--brand-green)]">— {r.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 items-center gap-6 rounded-2xl bg-white p-6 sm:grid-cols-2">
            <img
              src={happyFamily}
              alt="Happy customer using Food Saver Machine in her kitchen"
              width={1280}
              height={1024}
              loading="lazy"
              className="rounded-xl"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-orange-deep)]">
                Trusted by 12,000+ Nigerian homes
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[color:var(--brand-green)]">
                “It changed how I shop and cook.”
              </h3>
              <p className="mt-3 text-[color:var(--ink-soft)]">
                I now buy meat in bulk and seal portions for the whole month. My freezer stays clean and my food tastes fresh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="bg-[color:var(--brand-green)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Timer className="h-4 w-4" /> Limited Stock This Week
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Only A Few Units Left — Don't Miss Out
          </h2>
          <p className="mt-3 text-white/80">Promo ends when the timer hits zero.</p>

          <div className="mt-8 flex justify-center gap-3 sm:gap-4">
            {[
              { l: "Hours", v: time.h },
              { l: "Mins", v: time.m },
              { l: "Secs", v: time.s },
            ].map((t) => (
              <div key={t.l} className="min-w-[80px] rounded-xl bg-white/10 p-4 backdrop-blur">
                <div className="font-display text-3xl font-extrabold sm:text-4xl">
                  {String(t.v).padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/70">{t.l}</div>
              </div>
            ))}
          </div>

          <a href="#order" className="btn-cta mt-8">
            CLAIM MY OFFER →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-pad">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl font-bold text-[color:var(--brand-green)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-[color:var(--brand-mint)] bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-[color:var(--brand-green)]">
                  {f.q}
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[color:var(--ink-soft)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="bg-[color:var(--brand-cream)] section-pad">
        <div className="mx-auto max-w-2xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[color:var(--brand-green)] sm:text-4xl">
              Place Your Order
            </h2>
            <p className="mt-3 text-[color:var(--ink-soft)]">
              Fill the form. Pay on delivery. Inspect before payment.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Order received! We'll call you shortly to confirm delivery.");
            }}
            className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
          >
            {[
              { n: "name", l: "Full Name", t: "text", p: "e.g. Adaeze Okafor" },
              { n: "phone", l: "Phone Number", t: "tel", p: "e.g. 0801 234 5678" },
            ].map((f) => (
              <div key={f.n}>
                <label className="mb-1 block text-sm font-semibold text-[color:var(--ink)]">{f.l}</label>
                <input
                  required
                  type={f.t}
                  name={f.n}
                  placeholder={f.p}
                  className="w-full rounded-lg border border-[color:var(--brand-mint)] bg-white px-4 py-3 text-base outline-none transition focus:border-[color:var(--brand-orange)] focus:ring-2 focus:ring-[color:var(--brand-orange)]/30"
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--ink)]">Delivery Address</label>
              <textarea
                required
                rows={3}
                placeholder="House number, street, area, city, state"
                className="w-full rounded-lg border border-[color:var(--brand-mint)] bg-white px-4 py-3 text-base outline-none focus:border-[color:var(--brand-orange)] focus:ring-2 focus:ring-[color:var(--brand-orange)]/30"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--ink)]">Quantity</label>
              <select
                defaultValue="1"
                className="w-full rounded-lg border border-[color:var(--brand-mint)] bg-white px-4 py-3 text-base outline-none focus:border-[color:var(--brand-orange)] focus:ring-2 focus:ring-[color:var(--brand-orange)]/30"
              >
                <option value="1">1 Unit (+ 10 Free Bags)</option>
                <option value="2">2 Units (+ 20 Free Bags)</option>
                <option value="3">3 Units (+ 30 Free Bags)</option>
              </select>
            </div>

            <button type="submit" className="btn-cta-deep mt-2 w-full">
              PLACE MY ORDER
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2">
              <TrustChip>Pay On Delivery</TrustChip>
              <TrustChip>Inspect Before Payment</TrustChip>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--brand-green)] py-8 text-center text-sm text-white/80">
        <p>© {new Date().getFullYear()} Food Saver Nigeria. Nationwide delivery with inspection.</p>
        <p className="mt-1 flex items-center justify-center gap-2 text-white/60">
          <Truck className="h-4 w-4" /> 2–5 working days delivery
        </p>
      </footer>

      {/* STICKY CTA (mobile) */}
      <a
        href="#order"
        className="fixed inset-x-3 bottom-3 z-40 btn-cta-deep shadow-2xl md:hidden"
      >
        ORDER NOW — Pay On Delivery
      </a>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2348000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 md:bottom-6"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
