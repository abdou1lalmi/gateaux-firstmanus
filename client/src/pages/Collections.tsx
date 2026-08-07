import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Sparkles, Calendar, Phone, MapPin, CheckCircle2, Instagram, Send, Clock, Users, Gift } from "lucide-react";

export default function Collections() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    eventType: "Mariage / Fiançailles",
    date: "",
    pieces: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      toast.error("Veuillez remplir votre nom et numéro de téléphone.");
      return;
    }
    toast.success("Demande de devis envoyée avec succès ! Zohra Korichi vous contactera rapidement par téléphone ou WhatsApp.");
    setFormState({
      name: "",
      phone: "",
      eventType: "Mariage / Fiançailles",
      date: "",
      pieces: "",
      message: "",
    });
  };

  const catalog = [
    {
      category: "Pâtisserie Traditionnelle Fine",
      items: [
        { name: "Mkhabez Géode & Royal", desc: "Amandes fraîches, sucre glace fin, glaçage royal délicat et dorures à l'or fin.", price: "Sur Devis" },
        { name: "Mchewek el Bey", desc: "Spécialité algéroise fondante aux amandes et confiture d'abricot artisanale.", price: "Sur Devis" },
        { name: "Baklawa Royale", desc: "Feuilletage croustillant, cœur généreux d'amandes parfumées à l'eau de fleur d'oranger.", price: "Sur Devis" },
        { name: "Tcharak Messaress & El Aaryen", desc: "Croissant traditionnel aux amandes enrobé de sucre glace ou d'amandes concassées.", price: "Sur Devis" },
      ],
      image: "/manus-storage/pic1_dda305af.jpg",
    },
    {
      category: "Gâteaux de Mariage & Célébrations",
      items: [
        { name: "Pièces Montées sur Mesure", desc: "Design exclusif, fleurs en sucre faites main et élégance architecturale pour votre grand jour.", price: "Sur Devis" },
        { name: "Coffrets de Fiançailles (Khatba)", desc: "Présentation luxueuse assortie aux couleurs de votre événement.", price: "Sur Devis" },
        { name: "Sablés Finement Décorés", desc: "Sablés pur beurre aux motifs personnalisés pour baptêmes et fêtes.", price: "Sur Devis" },
      ],
      image: "/manus-storage/pic2_b06b6c18.jpg",
    },
    {
      category: "Ateliers & Formations Professionnelles",
      items: [
        { name: "Masterclass Mkhabez & Glaçage", desc: "Apprenez les techniques professionnelles de lissage et de décoration perlée.", price: "15,000 DZD" },
        { name: "Formation Complète Tradition Algéroise", desc: "Module intensif de 3 jours : Baklawa, Mchewek, Mkhabez et Tcharak.", price: "Sur Inscription" },
        { name: "Atelier Sablés & Décors Modernes", desc: "Techniques de modelage en pâte à sucre et fleurs comestibles.", price: "12,000 DZD" },
      ],
      image: "/manus-storage/pic3_c9194155.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header Banner */}
        <section className="bg-charcoal text-cream py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img
              src="/manus-storage/hero_pastry_e568c0c6.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10 text-center max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Gâteaux Zohra Korichi</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-cream">Collections, Ateliers & Commandes</h1>
            <p className="text-cream/80 text-base max-w-xl mx-auto">
              Explorez notre catalogue de pâtisseries fines, réservez votre place en atelier ou contactez-nous pour une commande sur mesure à Alger.
            </p>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-20 bg-background">
          <div className="container space-y-20">
            {catalog.map((cat, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-burgundy text-xs font-bold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span>Catégorie Exclusive</span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold">{cat.category}</h2>
                  <div className="space-y-4 pt-2">
                    {cat.items.map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-card border border-border shadow-sm flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-serif font-bold text-lg text-foreground">{item.name}</h3>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                        <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-burgundy/10 text-burgundy">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gold/30 aspect-[4/3]">
                    <img
                      src={cat.image}
                      alt={cat.category}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ateliers Section */}
        <section id="ateliers" className="py-20 bg-card border-t border-border">
          <div className="container space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-widest text-burgundy font-bold">Apprentissage & Partage</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Ateliers & Formations à Alger-Centre</h2>
              <p className="text-muted-foreground text-sm">
                Inscrivez-vous à nos masterclasses en présentiel et repartez avec vos créations et une maîtrise parfaite des techniques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gold uppercase">Session Weekend</span>
                    <span className="text-xs bg-burgundy text-cream px-2.5 py-1 rounded-full">15,000 DZD</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Atelier Mkhabez & Glaçage</h3>
                  <p className="text-xs text-muted-foreground">Apprenez le secret d'un glaçage royal impeccable qui ne ternit pas, et les décors géode.</p>
                </div>
                <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" /> 1 Jour (6h)</span>
                  <a href="#contact" className="text-burgundy font-semibold hover:underline">Réserver ›</a>
                </div>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gold uppercase">Intensif</span>
                    <span className="text-xs bg-burgundy text-cream px-2.5 py-1 rounded-full">Sur Devis</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Formation Pâtisserie Traditionnelle</h3>
                  <p className="text-xs text-muted-foreground">Programme complet sur 3 jours couvrant les classiques incontournables des mariages algériens.</p>
                </div>
                <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" /> 3 Jours</span>
                  <a href="#contact" className="text-burgundy font-semibold hover:underline">Réserver ›</a>
                </div>
              </div>

              <div className="bg-background p-6 rounded-2xl border border-border shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gold uppercase">Sur Mesure</span>
                    <span className="text-xs bg-burgundy text-cream px-2.5 py-1 rounded-full">12,000 DZD</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold">Atelier Sablés & Modélisation</h3>
                  <p className="text-xs text-muted-foreground">Confection de sablés fins décorés et fleurs en pâte à sucre pour événements familiaux.</p>
                </div>
                <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-gold" /> 1 Demi-journée</span>
                  <a href="#contact" className="text-burgundy font-semibold hover:underline">Réserver ›</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Order Form Section */}
        <section id="contact" className="py-24 bg-background">
          <div className="container max-w-4xl">
            <div className="bg-card rounded-3xl border border-border shadow-xl p-8 sm:p-12 space-y-8">
              <div className="text-center space-y-3">
                <span className="text-xs uppercase tracking-widest text-burgundy font-bold">Contact & Réservation</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold">Commandez vos douceurs ou réservez un atelier</h2>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                  Remplissez le formulaire ci-dessous ou contactez-nous directement par téléphone au <a href="tel:0660605138" className="font-semibold text-burgundy hover:underline">066 06 05 138</a>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Nom & Prénom *</label>
                    <Input
                      required
                      placeholder="Ex. Amina Benali"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="rounded-xl bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Téléphone / WhatsApp *</label>
                    <Input
                      required
                      placeholder="Ex. 0660605138"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="rounded-xl bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Type d'Événement / Demande</label>
                    <select
                      value={formState.eventType}
                      onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="Mariage / Fiançailles">Mariage / Fiançailles</option>
                      <option value="Fête religieuse / Aïd">Fête religieuse / Aïd</option>
                      <option value="Coffret Cadeau">Coffret Cadeau</option>
                      <option value="Inscription Atelier">Inscription Atelier</option>
                      <option value="Autre Commande">Autre Commande</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Date Souhaitée</label>
                    <Input
                      type="date"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="rounded-xl bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Quantité / Invités estimés</label>
                    <Input
                      placeholder="Ex. 100 pièces ou 1 atelier"
                      value={formState.pieces}
                      onChange={(e) => setFormState({ ...formState, pieces: e.target.value })}
                      className="rounded-xl bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Détails & Message</label>
                  <Textarea
                    rows={4}
                    placeholder="Précisez vos préférences de gâteaux, coloris ou questions concernant les ateliers..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="rounded-xl bg-background"
                  />
                </div>

                <div className="text-center pt-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-burgundy hover:bg-burgundy/90 text-primary-foreground font-semibold rounded-full px-10 shadow-lg">
                    <Send className="w-4 h-4 mr-2 text-gold" />
                    Envoyer la demande de devis
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
