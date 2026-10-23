# Test Notları ve Kontrol Sonuçları

Hocamızın ödev yönergesinde belirttiği 6 farklı test senaryosunu sitemiz üzerinde tek tek denedim. Aldığım sonuçlar ve test detayları şu şekildedir:

| Test / Yapılan İşlem | Beklenen Sonuç | Gerçekleşen Sonuç | Durum |
| :--- | :--- | :--- | :--- |
| **1. Başlığın bir bölümünü arama** | Yalnızca eşleşen kartların görünmesi ve sayacın doğru sayıyı göstermesi. | Arama kutusuna Atölye yazdığımda sadece başlığında atölye geçen kartlar süzüldü ve sayaç kaç kart kaldığını doğru gösterdi. | Geçti |
| **2. Büyük/küçük harfle arama yapma** | Büyük ya da küçük harf fark etmeksizin aynı sonuçların çıkması. | HTML ve "html yazarak ayrı ayrı denedim, ikisinde de aynı etkinlik kartları karşıma çıktı. | Geçti |
| **3. Sitede olmayan bir kelime arama** | Sayacın 0 olması ve "Sonuç bulunamadı" uyarısının çıkması. | Arama kutusuna XYZ yazdığımda tüm kartlar gizlendi, sayaç 0 oldu ve kırmızı renkte sonuç bulunamadı yazısı göründü. | Geçti |
| **4. Boşluk bırakma / Temizle butonuna basma** | Arama alanının sıfırlanıp 5 etkinliğin de tekrar ekrana gelmesi. | Temizle butonuna bastığımda kutu temizlendi ve 5 etkinlik kartı da sorunsuz bir şekilde geri geldi. | Geçti |
| **5. Menüdeki sayfa linklerini deneme** | Tüm linklerin doğru sayfalara sorunsuz geçiş yapması. | Ana Sayfa, Etkinlikler ve Hakkımızda linklerinin hepsine tıkladım sayfalar arası geçişlerde hiç sorun yaşanmadı. | Geçti |
| **6. Mobil görünüm (390 px) ve Tab tuşu kontrolü** | Ekran daraldığında taşma olmaması ve klavyeyle elemanlara ulaşılabilmesi. | Geliştirici araçlarından ekranı 390 px genişliğe çekip denedim, sağa-sola kayma/taşma olmadı. Tab tuşuyla da arama kutusuna rahatça odaklanabildim. | Geçti |