# Kitap Kulübü Web Sitesi (BPR201 Ödev 1)

Bu proje, BPR201 İnternet Tabanlı Programlama dersimizin 1. haftalık ödevi için GitHub Codespaces ve Copilot desteğiyle hazırladığım Kitap Kulübü web sitesidir.

## Proje Bilgileri
* **Proje Adı:** Kitap Kulübü Web Sitesi
* **Öğrenci:** Aybars Aydeniz
* **GitHub Repository Linki:** https://github.com/Aybars74/kampus-kulubu

## Sayfa Yapısı ve Özellikler
1. **Ana Sayfa (`index.html`):** Kulübümüzü tanıtan başlıklar, kısa bilgiler ve diğer sayfalara geçiş menüsü yer alıyor.
2. **Etkinlikler (`etkinlikler.html`):** Okuma kulübümüzün düzenlediği 5 farklı etkinlik kartı ve bunların üstünde anlık çalışan arama/filtreleme kutusu bulunuyor (`script.js` ile çalışıyor)
3. **Hakkımızda (`hakkimizda.html`):** Kulübün kuruluş amacı, hedefleri ve genel tanıtım metinleri bulunuyor.

## Projeyi Çalıştırma Adımları
1. Proje dosyalarını GitHub Codespaces ortamında açın.
2. Terminal ekranını açıp şu komutla yerel sunucuyu başlatın:
   `python3 -m http.server 8000 --bind 0.0.0.0`
3. Tarayıcıda `8000` portunu açarak siteyi görüntüleyebilirsiniz.