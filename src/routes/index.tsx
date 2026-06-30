import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  ChevronDown,
  Menu,
  ShoppingBag,
  Tv,
  Smartphone,
  WashingMachine,
  ArrowRight,
  Sparkles,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.jpg";
import tvImg from "@/assets/oled-tv.png";
import espressoImg from "@/assets/espresso.png";
import headphonesImg from "@/assets/headphones.png";
import fridgeImg from "@/assets/fridge.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expert — A szakértelem házhoz jön" },
      {
        name: "description",
        content:
          "Fedezze fel a prémium háztartási gépek, TV & Audio és okoseszközök válogatott katalógusát az Expert szakértőitől.",
      },
      { property: "og:title", content: "Expert — Prémium elektronika katalógus" },
      {
        property: "og:description",
        content: "Bento-grid katalógus prémium elektronikai termékekről, szakértői tanácsadással.",
      },
    ],
  }),
  component: Index,
});

const categories = [
  {
    title: "Háztartási gépek",
    desc: "Mosógépek, hűtők, konyhai eszközök prémium márkáktól.",
    icon: WashingMachine,
    count: "1 240+ termék",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    title: "TV & Audio",
    desc: "OLED, QLED és Hi-Fi rendszerek.",
    icon: Tv,
    count: "480+ termék",
    span: "md:col-span-1",
  },
  {
    title: "Okoseszközök",
    desc: "Wearables, hangsegédek, okosotthon.",
    icon: Smartphone,
    count: "620+ termék",
    span: "md:col-span-1",
  },
];

const products = [
  {
    name: 'LG OLED evo C4 65"',
    category: "TV & Audio",
    price: "899 990 Ft",
    image: tvImg,
    badge: "Új",
  },
  {
    name: "De'Longhi Specialista Espresso",
    category: "Konyha",
    price: "279 990 Ft",
    image: espressoImg,
    badge: "Bestseller",
  },
  {
    name: "Sony WH-1000XM5 fejhallgató",
    category: "Audio",
    price: "149 990 Ft",
    image: headphonesImg,
    badge: "Top",
  },
  {
    name: "Samsung Family Hub hűtő",
    category: "Háztartás",
    price: "1 199 000 Ft",
    image: fridgeImg,
    badge: "Premium",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Products />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-black">
            E
          </div>
          <span className="text-lg font-black tracking-tight text-primary">expert</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 ml-4">
          <Button variant="ghost" className="gap-1 font-semibold">
            Kategóriák <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="font-semibold">Akciók</Button>
          <Button variant="ghost" className="font-semibold">Márkák</Button>
          <Button variant="ghost" className="font-semibold">Szolgáltatások</Button>
        </nav>

        <div className="relative ml-auto hidden md:block flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Keressen termékek, márkák között..."
            className="pl-9 h-10 bg-secondary border-transparent focus-visible:bg-background"
          />
        </div>

        <Button variant="ghost" className="hidden sm:inline-flex gap-2 font-semibold">
          <MapPin className="h-4 w-4 text-accent" />
          Üzletkereső
        </Button>

        <Button className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
          Belépés
        </Button>

        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/60" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklab,var(--color-accent)_50%,transparent),transparent_50%)]" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <Badge className="bg-white/15 text-white border border-white/20 backdrop-blur-md mb-6 font-medium">
            <Sparkles className="h-3 w-3 mr-1.5" />
            2026 Tavaszi Katalógus
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white leading-[0.95]">
            A szakértelem<br />
            <span className="text-accent">házhoz jön.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
            Prémium háztartási gépek, TV &amp; Audio és okoseszközök válogatott katalógusa — szakértői tanácsadással.
          </p>

          <div className="mt-10 max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-elegant">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                <Input
                  placeholder="Mit keres? Pl. OLED TV, kávégép..."
                  className="pl-12 h-14 bg-transparent border-0 text-white placeholder:text-white/60 text-base focus-visible:ring-0"
                />
              </div>
              <Button
                size="lg"
                className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base"
              >
                Keresés
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
              <span>Népszerű:</span>
              {["OLED TV", "Espresso", "Robotporszívó", "Sony"].map((t) => (
                <a key={t} href="#" className="hover:text-accent transition-colors">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Truck, label: "Ingyenes házhozszállítás 50 000 Ft felett" },
    { icon: ShieldCheck, label: "3 év kiterjesztett garancia" },
    { icon: Headphones, label: "Szakértői tanácsadás 7 napon át" },
    { icon: ShoppingBag, label: "200+ üzlet országszerte" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 px-4 py-8 sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 min-w-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/5 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-foreground/80 leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 mb-12">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Kategóriák</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            Fedezze fel a <span className="text-gradient-brand">világot.</span>
          </h2>
        </div>
        <Button variant="ghost" className="font-semibold text-primary hidden sm:inline-flex">
          Összes kategória <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[220px] gap-4">
        {categories.map((c) => (
          <a
            key={c.title}
            href="#"
            className={`group relative overflow-hidden rounded-3xl border border-border p-8 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1 ${
              c.accent
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-background"
            } ${c.span ?? ""}`}
          >
            <div
              className={`grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                c.accent ? "bg-white/10 text-accent" : "bg-primary text-primary-foreground"
              }`}
            >
              <c.icon className="h-7 w-7" />
            </div>
            <div className={`absolute ${c.accent ? "bottom-8 left-8 right-8" : "bottom-6 left-8 right-8"}`}>
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${c.accent ? "text-accent" : "text-muted-foreground"}`}>
                {c.count}
              </p>
              <h3 className={`font-black tracking-tight leading-tight ${c.accent ? "text-4xl sm:text-5xl" : "text-2xl"}`}>
                {c.title}
              </h3>
              <p className={`mt-2 text-sm max-w-md ${c.accent ? "text-white/70" : "text-muted-foreground"}`}>
                {c.desc}
              </p>
              <div className={`mt-4 inline-flex items-center gap-2 text-sm font-bold ${c.accent ? "text-accent" : "text-primary"}`}>
                Felfedezés
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
            {c.accent && (
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" aria-hidden />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 mb-12">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Kiemelt</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
              Prémium termékek
            </h2>
          </div>
          <Button variant="ghost" className="font-semibold text-primary hidden sm:inline-flex">
            Összes <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-3xl bg-background border border-border overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
            >
              <div className="relative aspect-square bg-secondary/60 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  <Badge className="bg-accent text-accent-foreground hover:bg-accent font-bold border-0">
                    {p.badge}
                  </Badge>
                  <Badge className="bg-success/10 text-success hover:bg-success/10 border border-success/20 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-success mr-1.5" />
                    Készleten
                  </Badge>
                </div>
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  {p.category}
                </p>
                <h3 className="font-bold text-base leading-tight mb-4 line-clamp-2 min-h-[2.5rem]">
                  {p.name}
                </h3>
                <div className="mt-auto flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Ajánlott ár</p>
                    <p className="text-xl font-black text-primary truncate">{p.price}</p>
                  </div>
                </div>
                <Button className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-11">
                  Megtekintés
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground p-10 sm:p-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Üzletkereső</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight max-w-xl">
              200+ Expert üzlet várja Önt országszerte.
            </h2>
            <p className="mt-4 text-white/70 max-w-lg">
              Próbálja ki személyesen, kérje a szakértőink tanácsát, és vigye haza még ma.
            </p>
          </div>
          <Button
            size="lg"
            className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base shrink-0"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Üzlet keresése
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: "Katalógus",
      links: ["Háztartási gépek", "TV & Audio", "Okoseszközök", "Konyha", "Számítástechnika"],
    },
    {
      title: "Szolgáltatások",
      links: ["Üzletkereső", "Szakszerviz", "Garanciakiterjesztés", "Beüzemelés", "Finanszírozás"],
    },
    {
      title: "Cég",
      links: ["Rólunk", "Karrier", "Sajtó", "Fenntarthatóság", "Kapcsolat"],
    },
  ];
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-black">
                E
              </div>
              <span className="text-lg font-black tracking-tight text-primary">expert</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              A szakértelem házhoz jön. Prémium elektronika katalógus, szakértői tanácsadással
              1971 óta.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              <span>1117 Budapest, Október huszonharmadika u. 8-10.</span>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title} className="min-w-0">
              <h4 className="font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-border grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Expert Magyarország. Minden jog fenntartva.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Adatvédelem</a>
            <a href="#" className="hover:text-primary">ÁSZF</a>
            <a href="#" className="hover:text-primary">Cookie-k</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
