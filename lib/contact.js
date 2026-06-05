// ============================================================
//  İLETİŞİM AYARLARI
//  Numara/bilgiler değişince SADECE burayı düzenleyin.
//  whatsapp: uluslararası format, +/0 olmadan (ör: 905XXXXXXXXX)
// ============================================================
export const CONTACT = {
  whatsapp: "905373940846",
  phoneDisplay: "+90 537 394 08 46",
  phoneDial: "+905373940846",
  location: "Antalya, Türkiye",
};

// Verilen mesajla birlikte wa.me bağlantısı üretir
export function waLink(message = "Merhaba, transfer hakkında bilgi almak istiyorum.") {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${CONTACT.phoneDial}`;
