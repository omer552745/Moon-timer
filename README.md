# Moon Timer

Odaklanma zamanlayıcısı, çalışma istatistikleri ve sınav konu takibi tek yerde. Koyu temalı, yarı mat arayüzlü; tarayıcıda, telefonda (ana ekrana eklenebilir) ve Windows masaüstünde çalışır.

## İndir

| Nerede | Bağlantı |
| --- | --- |
| Windows kurulum dosyası | [Moon-Timer-Setup.exe](https://github.com/omer552745/Moon-timer/releases/latest/download/Moon-Timer-Setup.exe) |
| Windows taşınabilir (kurulum gerektirmez) | [Moon-Timer-Portable.exe](https://github.com/omer552745/Moon-timer/releases/latest/download/Moon-Timer-Portable.exe) |
| Tarayıcı ve telefon | [Uygulamayı aç](https://omer552745.github.io/Moon-timer/) |

Tüm sürümler: [Releases](https://github.com/omer552745/Moon-timer/releases).

Windows'ta ilk açılışta "Windows bilgisayarınızı korudu" uyarısı çıkabilir, çünkü uygulama dijital olarak imzalı değildir. **Daha fazla bilgi → Yine de çalıştır** diyerek açabilirsiniz. Bilgisayarınıza bir şey yüklemek istemezseniz taşınabilir sürümü kullanın.

**Telefonda:** Yukarıdaki adresi açın. Android'de Chrome menüsünden **Ana ekrana ekle / Uygulamayı yükle**, iPhone'da Safari'de **Paylaş → Ana Ekrana Ekle** deyin.

## Özellikler

- **Zamanlayıcı:** 1-180 dakika arası süre (listeden seçin ya da yazın), geri sayım, duraklatma, tur kaydı. Süre bitince otomatik tur eklenir ve yeni süre başlar.
- **Ay animasyonu:** Yarım ay çizimi, süre ilerledikçe parlaklaşır; yüzde ayın ortasında görünür.
- **İstatistik:** Bugün, bu hafta ve bu ay için çalışma süresi (saat) ile haftanın günlerine göre çubuk grafik. Zamanlayıcı çalışırken canlı güncellenir.
- **Konu takibi:** TYT, AYT, KPSS ve AGS için sınav ve ders seçip konuları tikleyin; ilerleme çubuğu ve sayaçlar.
- **Notlar:** Beş satırlık, tiklenebilir not listesi.
- **Ortam sesleri:** Kamp ateşi, yağmur, şömine ve sınav ortamı. Sesler tarayıcıda üretilir, ses dosyası gerekmez. Ses seviyesi ayarı vardır.
- **Alt çubuk:** Sayfalar arasında alttaki düğmeyi sağa kaydırarak geçilir.
- **Mobil uyumlu:** Telefon ekranına göre düzenlenir; PWA olarak ana ekrana eklenebilir.

## Veri ve gizlilik

Notlar, istatistikler, konu işaretleri ve ayarlar yalnızca kendi cihazınızdaki depolamada (`localStorage`) tutulur, hiçbir sunucuya gönderilmez. Yazı tipi (Manrope) internetten Google Fonts üzerinden yüklenir. Cihazlar arasında senkronizasyon yoktur.

## Konu listeleri hakkında

TYT, AYT, KPSS ve AGS konu listeleri yazar tarafından derlenmiştir ve **resmî değildir**; ÖSYM veya MEB ile bir bağlantısı yoktur. Güncel ve bağlayıcı içerik için ÖSYM/MEB kılavuzlarına bakın. Eksik ya da hatalı konu görürseniz katkı yapabilirsiniz.

## Geliştiriciler için

Web sürümü tek bir `index.html` dosyasıdır; derleme gerektirmez, dosyayı tarayıcıda açmanız yeterli. Masaüstü sürümü [Tauri](https://tauri.app) (Rust) ile paketlenir.

Windows sürümünü kendiniz derlemek isterseniz:

1. [Node.js](https://nodejs.org) (LTS) ve [Rust](https://rustup.rs) kurun.
2. Windows'ta "Visual Studio Build Tools" içinden **C++ ile masaüstü geliştirme** bileşenini kurun (Tauri ön koşuludur). WebView2, Windows 11'de hazır gelir.
3. Depo klasöründe şunları çalıştırın:

```
npm install
npm run dev        # uygulamayı dener
npm run build      # kurulum dosyası ve taşınabilir exe üretir
```

Kurulum dosyası `src-tauri/target/release/bundle/nsis/` içinde, taşınabilir exe `src-tauri/target/release/moon-timer.exe` olarak oluşur. İlk derleme birkaç dakika sürer.

Yeni sürüm yayınlamak için GitHub'da `v1.0.1` gibi bir etiketle sürüm oluşturmanız yeterli; `.github/workflows/release.yml` Windows dosyalarını otomatik üretip sürüme ekler. Yeni web sürümünün telefonlarda görünmesi için `sw.js` içindeki `moon-timer-v1` adını `moon-timer-v2` gibi değiştirin.

### Proje yapısı

```
index.html             uygulamanın tamamı (arayüz, stil, mantık)
manifest.webmanifest   PWA bildirimi
sw.js                  çevrimdışı çalışma için service worker
privacy.html            gizlilik politikası
icons/                 uygulama ikonları
package.json           Tauri komutları
scripts/               masaüstü derlemesi için küçük hazırlık betiği
src-tauri/             masaüstü kabuğu (Rust, Tauri): Cargo.toml, tauri.conf.json, src/main.rs
.github/workflows/     Windows exe dosyalarını otomatik üreten iş akışı
```

Konu listeleri `index.html` içindeki `EXAMS` nesnesindedir. Yeni bir ders eklemek için ilgili sınavın altına bir ad ve konu listesi eklemeniz yeterli (başlık satırları `#` ile başlar).

## Katkı

Çatallamak (fork) ve değiştirmek serbesttir. Hata bildirimleri ve çekme istekleri (pull request) memnuniyetle karşılanır.

## Lisans

[MIT](LICENSE)

## Not

Bu proje Claude (Anthropic) yardımıyla hazırlanmıştır.
