import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export default function Gallery() {
  const photos = [
    { url: "/manus-storage/pic1_dda305af.jpg", title: "Mkhabez & Pâtisserie Fine" },
    { url: "/manus-storage/pic2_b06b6c18.jpg", title: "Pièce Montée & Mariage" },
    { url: "/manus-storage/pic3_c9194155.jpg", title: "Atelier & Masterclass" },
    { url: "/manus-storage/pic4_b52ae0ce.jpg", title: "Douceurs Algéroises" },
    { url: "/manus-storage/pic5_ae8e2136.jpg", title: "Sablés Finement Décorés" },
    { url: "/manus-storage/pic6_c7bd83dd.jpg", title: "Baklawa Royale" },
    { url: "/manus-storage/pic7_5a34f1b9.jpg", title: "Coffret de Fiançailles" },
    { url: "/manus-storage/pic8_a09786ab.jpg", title: "Mchewek el Bey" },
    { url: "/manus-storage/pic9_c2b2ea11.jpg", title: "Détails Dorés à l'Or Fin" },
    { url: "/manus-storage/pic10_d5002b45.jpg", title: "Collection d'Exception" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header Banner */}
        <section className="bg-charcoal text-cream py-16 md:py-24 relative overflow-hidden">
          <div className="container relative z-10 text-center max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Galerie Exclusives</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Nos Réalisations en Images</h1>
            <p className="text-cream/80 text-base max-w-xl mx-auto">
              Plongez dans l'univers visuel de Gâteaux Zohra Korichi à travers nos plus belles créations photographiées à Alger.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, idx) => (
                <div key={idx} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="font-serif font-bold text-cream text-lg">{photo.title}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="font-serif font-medium text-sm">{photo.title}</span>
                    <Sparkles className="w-4 h-4 text-gold" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
