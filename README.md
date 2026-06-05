# Gültekin VIP Transfer — Next.js + Tailwind CSS

Antalya merkezli VIP transfer için tek sayfa, responsive, **light theme** kurumsal site.
Next.js 14 (App Router) + Tailwind CSS ile hazırlanmıştır. Orijinal tasarım birebir korunmuştur.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

Üretim derlemesi:

```bash
npm run build
npm run start
```

## İletişim bilgilerini güncelleme

Telefon / WhatsApp / konum / sosyal medya bilgileri tek bir yerde tutulur:

> **`lib/contact.js`**

```js
export const CONTACT = {
  whatsapp: "905373940846",        // wa.me için, +/0 olmadan
  phoneDisplay: "+90 537 394 08 46",
  phoneDial: "+905373940846",
  location: "Antalya, Türkiye",
  instagram: "#",                  // Instagram profil linki
  facebook: "#",                   // Facebook profil linki
};
```

Burayı düzenlemeniz tüm butonları, formu ve footer'ı otomatik günceller.

## Proje yapısı

```
app/
  layout.jsx        Kök layout + Google Fonts (Plus Jakarta Sans, Space Mono)
  page.jsx          Tek sayfa — tüm bölümleri sırayla dizer
  globals.css       Tasarım sistemi (CSS değişkenleri) + Tailwind katmanları
components/
  Navbar.jsx        Sticky nav + mobil menü
  Hero.jsx          Tam ekran sahil görseli + 2 CTA
  Features.jsx      Öne çıkan özellikler
  VehicleShowcase.jsx  Tek araç (Ford VIP) + foto galeri
  Services.jsx      Hizmetler
  Regions.jsx       Hizmet bölgeleri (Akdeniz görseli)
  WhyUs.jsx         Neden Biz + istatistik
  Contact.jsx       Rezervasyon formu → WhatsApp
  Footer.jsx        Footer
  WhatsAppFloat.jsx Sabit WhatsApp butonu
lib/
  contact.js        İletişim ayarları + wa.me yardımcıları
  useReveal.js      Scroll-reveal hook (IntersectionObserver)
public/
  images/           Araç fotoğrafları + Antalya/Akdeniz görselleri
```

## Tasarım sistemi (Tailwind)

Renk paleti, gölge, yarıçap ve fontlar `tailwind.config.js` içinde token olarak tanımlıdır
(ör. `bg-accent`, `text-ink`, `shadow-md`). Bölüm bileşenlerinin ayrıntılı stilleri
`app/globals.css` içindeki `--accent` / `--navy` gibi CSS değişkenleri üzerinden yönetilir;
böylece aksan rengini tek satırda değiştirebilirsiniz.

### Aksan rengini değiştirme

`app/globals.css` içindeki `:root` bloğunda:

```css
--accent: #0E9FB3;       /* Akdeniz turkuazı */
--accent-deep: #0A7C8C;
--accent-tint: #E2F3F4;
```

## Görseller

Araç fotoğrafları ve manzara görselleri `public/images/` altındadır. Yeni fotoğraf eklemek için
dosyayı bu klasöre koyup ilgili bileşendeki yolu (`/images/...`) güncelleyin.

## Form davranışı

Rezervasyon formu bir backend kullanmaz; girilen bilgileri biçimlendirip
`wa.me` üzerinden WhatsApp'a iletir. İsterseniz `components/Contact.jsx` içindeki
`onSubmit` fonksiyonunu kendi API'nize bağlayabilirsiniz.
# gultekin-vip-transfer
