# Moon Timer

Odaklanma zamanlayıcısı, çalışma istatistikleri ve sınav konu takibi tek yerde. Koyu temalı, yarı mat arayüzlü; tarayıcıda, telefonda (ana ekrana eklenebilir) ve Windows masaüstünde çalışır. Tek bir `index.html` dosyasından oluşur, derleme adımı gerektirmez.

## Özellikler

- **Zamanlayıcı:** 1-180 dakika arası süre (listeden seçin ya da yazın), geri sayım, duraklatma, tur kaydı. Süre bitince otomatik tur eklenir ve yeni süre başlar.
- **Ay animasyonu:** Hilal-yarım ay çizimi, süre ilerledikçe parlaklaşır; yüzde ayın ortasında görünür.
- **İstatistik:** Bugün, bu hafta ve bu ay için çalışma süresi (saat) ile haftanın günlerine göre çubuk grafik. Zamanlayıcı çalışırken canlı güncellenir.
- **Konu takibi:** TYT, AYT, KPSS ve AGS için sınav ve ders seçip konuları tikleyin; ilerleme çubuğu ve sayaçlar.
- **Notlar:** Beş satırlık, tiklenebilir not listesi.
- **Ortam sesleri:** Kamp ateşi, yağmur, şömine ve sınav ortamı. Sesler tarayıcıda üretilir, ses dosyası gerekmez. Ses seviyesi ayarı vardır.
- **Alt çubuk:** Sayfalar arasında alttaki düğmeyi sağa kaydırarak geçilir.
- **Mobil uyumlu:** Telefon ekranına göre düzenlenir; PWA olarak ana ekrana eklenebilir.

## Hızlı başlangıç

### Tarayıcıda

`index.html` dosyasını açmanız yeterli. Çevrimdışı ve ana ekrana ekleme özellikleri için dosyanın bir web adresinden (`https://`) sunulması gerekir.

### Telefonda

Yayınlanan adresi telefonda açın. Android'de Chrome menüsünden **Ana ekrana ekle / Uygulamayı yükle**, iPhone'da Safari'de **Paylaş → Ana Ekrana Ekle** deyin.

### Windows masaüstü uygulaması

[Node.js](https://nodejs.org) (LTS) kurulu olmalı.

```
npm install
npm start          # uygulamayı dener
npm run dist       # dist/ klasöründe kurulum dosyası (.exe) üretir
```

`npm run dist` komutunu **yönetici olarak açılmış** komut isteminde çalıştırın (ya da Windows'ta Geliştirici Modu'nu açın), aksi halde `winCodeSign` açılırken "ayrıcalık" hatası çıkabilir. Üretilen kurulum dosyası imzalı olmadığı için Windows "bilinmeyen yayıncı" uyarısı gösterebilir.

## Veri ve gizlilik

Notlar, istatistikler, konu işaretleri ve ayarlar yalnızca kendi cihazınızdaki tarayıcı depolamasında (`localStorage`) tutulur, hiçbir sunucuya gönderilmez. Yazı tipi (Manrope) internetten Google Fonts üzerinden yüklenir. Cihazlar arasında senkronizasyon yoktur.

## Konu listeleri hakkında

TYT, AYT, KPSS ve AGS konu listeleri yazar tarafından derlenmiştir ve **resmî değildir**; ÖSYM veya MEB ile bir bağlantısı yoktur. Güncel ve bağlayıcı içerik için ÖSYM/MEB kılavuzlarına bakın. Eksik ya da hatalı konu görürseniz katkı yapabilirsiniz.

## Proje yapısı

```
index.html             uygulamanın tamamı (arayüz, stil, mantık)
manifest.webmanifest   PWA bildirimi
sw.js                  çevrimdışı çalışma için service worker
main.js, package.json  Windows masaüstü sürümü (Electron)
icons/                 uygulama ikonları
```

Konu listeleri `index.html` içindeki `EXAMS` nesnesindedir. Yeni bir ders eklemek için ilgili sınavın altına bir ad ve konu listesi eklemeniz yeterli (başlık satırları `# ` ile başlar).

## Katkı

Çatallamak (fork) ve değiştirmek serbesttir. Hata bildirimleri ve çekme istekleri (pull request) memnuniyetle karşılanır.

## Lisans

[MIT](LICENSE)

## Not

Bu proje Claude (Anthropic) yardımıyla hazırlanmıştır.
