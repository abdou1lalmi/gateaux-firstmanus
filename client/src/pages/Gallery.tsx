import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export default function Gallery() {
  const photos = [
    { 
      url: "/manus-storage/pic1_dda305af.jpg", 
      title: "Mkhabez Géode & Royal", 
      category: "Pâtisserie Traditionnelle",
      desc: "Amandes fraîches, glaçage royal délicat et dorures à l'or fin façonnés à la main."
    },
    { 
      url: "/manus-storage/pic2_b06b6c18.jpg", 
      title: "Pièce Montée de Mariage", 
      category: "Célébrations & Mariages",
      desc: "Création architecturale somptueuse avec fleurs en sucre faites sur mesure."
    },
    { 
      url: "/manus-storage/pic3_c9194155.jpg", 
      title: "Masterclass & Atelier", 
      category: "Formation Exclusive",
      desc: "Transmission de l'art de la pâtisserie fine algérienne dans notre atelier d'Alger."
    },
    { 
      url: "/manus-storage/pic4_b52ae0ce.jpg", 
      title: "Douceurs Algéroises", 
      category: "Collection Royale",
      desc: "L'alliance parfaite entre tradition ancestrale et raffinement visuel."
    },
    { 
      url: "/manus-storage/pic5_ae8e2136.jpg", 
      title: "Sablés Finement Décorés", 
      category: "Fêtes & Réceptions",
      desc: "Sablés pur beurre aux motifs floraux et finitions perlées."
    },
    { 
      url: "/manus-storage/pic6_c7bd83dd.jpg", 
      title: "Baklawa Royale", 
      category: "Pâtisserie Traditionnelle",
      desc: "Feuilletage croustillant et cœur généreux d'amandes parfumées à la fleur d'oranger."
    },
    { 
      url: "/manus-storage/pic7_5a34f1b9.jpg", 
      title: "Coffret de Fiançailles (Khatba)", 
      category: "Sur Mesure",
      desc: "Présentation luxueuse assortie aux couleurs de vos événements."
    },
    { 
      url: "/manus-storage/pic8_a09786ab.jpg", 
      title: "Mchewek el Bey", 
      category: "Spécialité Fondante",
      desc: "Pâtisserie algéroise iconique sublimée par des fruits confits et amandes."
    },
    { 
      url: "/manus-storage/pic9_c2b2ea11.jpg", 
      title: "Détails Dorés à l'Or Fin", 
      category: "Finitions d'Exception",
      desc: "Le souci du détail poussé à son paroxysme pour chaque création."
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const activePhoto = photos[selectedIndex];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        {/* Editorial Header */}
        <section className="bg-charcoal text-cream py-16 md:py-24 relative overflow-hidden mb-12">
          <div className="container relative z-10 text-center max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Regard d'Artisan • Lookbook Éditorial</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-cream">Galerie d'Exception</h1>
            <p className="text-cream/80 text-base max-w-xl mx-auto font-light">
              Explorez nos créations comme dans une galerie d'art culinaire. Sélectionnez une pièce pour admirer toute sa minutie.
            </p>
          </div>
        </section>

        {/* Asymmetric Editorial Showcase */}
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left/Main Featured Editorial Panel (7 cols) */}
            <div className="lg:col-span-7 space-y-6 lg:sticky lg:top-32">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold/30 aspect-[4/3] bg-muted group">
                <img
                  key={activePhoto.url}
                  src={activePhoto.url}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 animate-in fade-in duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex flex-col justify-end p-8 md:p-10 text-cream">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                    {activePhoto.category}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight mb-2">
                    {activePhoto.title}
                  </h2>
                  <p className="text-sm text-cream/80 max-w-lg font-light leading-relaxed">
                    {activePhoto.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Supporting Asymmetric Grid / Stack (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border-b border-border pb-3 mb-4">
                <h3 className="font-serif text-lg font-semibold tracking-wide text-foreground">
                  Collection de l'Atelier
                </h3>
                <p className="text-xs text-muted-foreground">Cliquez pour projeter en grand format</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 max-h-[650px] overflow-y-auto pr-2">
                {photos.map((photo, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedIndex(idx)}
                      className={`group relative flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-300 border ${
                        isSelected 
                          ? "bg-card border-gold shadow-md ring-1 ring-gold/50" 
                          : "bg-card/60 hover:bg-card border-border hover:border-gold/40 shadow-sm"
                      }`}
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-muted">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-grow min-w-0 space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block truncate">
                          {photo.category}
                        </span>
                        <h4 className="font-serif font-bold text-sm text-foreground truncate group-hover:text-gold transition-colors">
                          {photo.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-1 font-light">
                          {photo.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
