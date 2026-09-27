/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir.
   Kısa, tek fikir, 6. sınıf dili. start/end saniye cinsinden.
   note: öğretmen için önerilen seslendirme cümlesi.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 4.4, end: 10.0, tr: '3 pizza 4 kişiye: 3/4 = 3 ÷ 4', en: '3 pizzas for 4 people: 3/4 = 3 ÷ 4',
      note: '3 pizzayı 4 kişi eşit paylaşırsa her biri dörtte üç pizza alır. Kesir çizgisi aslında bir bölme işaretidir: 3 bölü 4, 3 ÷ 4 demek.' },
    { scene: 2, start: 10.8, end: 16.8, tr: 'Kâğıt kalemle 3 ÷ 4', en: '3 ÷ 4 on paper',
      note: '3’ü 4’e bölelim: 0 tam, kalan 3. Kalanın yanına 0 ekleyip devam edelim: 30 ÷ 4 = 7, kalan 2. 20 ÷ 4 = 5, kalan 0.' },
    { scene: 2, start: 17.0, end: 22.2, tr: 'Kalan 0: bölme bitti. Hesap makinesi de 0,75 diyor', en: 'Remainder 0: done. The calculator also says 0.75',
      note: 'Kalan 0 oldu, bölme bitti. Hesap makinesiyle de kontrol edelim: 0,75.' },
    { scene: 2, start: 22.4, end: 29.8, tr: '3/4 = 0,75: sonlu ondalık gösterim', en: '3/4 = 0.75: a terminating decimal',
      note: 'Bu kesrin ondalık gösterimi biter. Buna sonlu ondalık gösterim denir.' },
    { scene: 3, start: 30.6, end: 37.0, tr: '1 ÷ 3: kalan hep 1', en: '1 ÷ 3: the remainder is always 1',
      note: 'Şimdi 1’i 3’e bölelim. 10 ÷ 3 = 3, kalan 1. Yine 10 ÷ 3, yine kalan 1… Bölme hiç bitmiyor. Hesap makinesi de 0,3333 gösteriyor.' },
    { scene: 3, start: 37.2, end: 39.8, tr: '1/3 = 0,333...: tekrar eden kısmın üstüne çizgi', en: '1/3 = 0.333...: a bar over the repeating part',
      note: 'Rakam hep 3. Tekrar eden kısmın üstüne çizgi çekerek yazarız.' },
    { scene: 3, start: 40.4, end: 46.0, tr: '2 ÷ 11: kalanlar 2, 9, 2, 9...', en: '2 ÷ 11: remainders 2, 9, 2, 9...',
      note: '2’yi 11’e bölelim. Kalanlar 2, 9, 2, 9 diye tekrar ediyor; rakamlar da 1, 8, 1, 8 diye tekrar ediyor.' },
    { scene: 3, start: 46.2, end: 49.8, tr: 'Kalan tekrar edince rakamlar da tekrar eder: devirli', en: 'When a remainder repeats, the digits repeat: a repeating decimal',
      note: 'Bir kalan tekrar edince rakamlar da tekrar eder. Bu bir devirli ondalık gösterimdir.' },
    { scene: 4, start: 50.6, end: 59.8, tr: 'Hangi kesirler biter, hangileri tekrar eder?', en: 'Which fractions end, which repeat?',
      note: 'Birçok kesri bölelim ve iki gruba ayıralım: biten ondalık gösterimler ve tekrar edenler. Bir örüntü görüyor musunuz?' },
    { scene: 4, start: 60.0, end: 64.8, tr: 'Paydaları asal çarpanlarına ayıralım', en: 'Split the denominators into prime factors',
      note: 'Paydaları asal çarpanlarına ayıralım. Soldakilerde yalnızca 2 ve 5 var. Sağdakilerde 3, 7 ya da 11 gibi başka asallar var.' },
    { scene: 4, start: 65.0, end: 69.8, tr: 'Payda yalnızca 2 ve 5’lerden oluşuyorsa biter', en: 'If the denominator has only 2s and 5s, it ends',
      note: 'Genelleyelim: sadeleştirilmiş bir kesrin paydasında yalnızca 2 ve 5 çarpanları varsa ondalık gösterim biter; başka bir asal çarpan varsa tekrar eder.' },
    { scene: 5, start: 70.6, end: 74.8, tr: '7/40: payda 2 × 2 × 2 × 5, biter: 0,175', en: '7/40: 2 × 2 × 2 × 5, it ends: 0.175',
      note: 'Kuralımızı sınayalım. 7/40’ın paydası 2 × 2 × 2 × 5; tahminimiz: biter. Bölünce 0,175 çıkıyor. Doğru!' },
    { scene: 5, start: 75.0, end: 79.8, tr: '5/12: paydada 3 var, tekrar eder: 0,41666...', en: '5/12: there’s a 3, it repeats: 0.41666...',
      note: '5/12’nin paydası 2 × 2 × 3; içinde 3 var, tahminimiz: tekrar eder. Bölünce 0,41666… çıkıyor. Yine doğru!' },
    { scene: 6, start: 80.6, end: 86.4, tr: 'Kesir bir bölmedir: biter ya da devreder', en: 'A fraction is a division: it ends or it repeats',
      note: 'Aklında kalsın: kesir bir bölmedir. Kalan 0 olursa bölme biter; bir kalan tekrar ederse rakamlar devreder.' },
    { scene: 6, start: 86.8, end: 91.0, tr: 'Paydaya bakarak tahmin edebilirsin!', en: 'You can predict it from the denominator!',
      note: 'Artık paydaya bakarak ondalık gösterimin biteceğini ya da devredeceğini tahmin edebilirsin.' },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.LI = root.LI || {}; root.LI.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
