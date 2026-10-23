# AI Kullanım Notları

## 1. Kullanılan Promptlar ve Amaçları
* **Prompt 1:** `nav bölümünü satır satır Türkçe açıkla. Kodu değiştirme.`
  * **Amaç:** Sitedeki navigasyon menüsünün HTML yapısını ve sayfalar arasındaki geçiş bağlantılarını tam olarak anlamak için Copilota sordum.
* **Prompt 2:** `etkinlikler.html dosyasını incele. Mevcut article yapısını koruyarak 5. etkinlik olarak '10 ARALIK / 15.00 - Yazar Buluşması ve Söyleşi' etkinliğini ekle ve arama alanı elemanlarını (input, button, sayaç, sonuç mesajı) ekle.`
  * **Amaç:** Arama yapabilmek için gerekli arama kutusu, temizle butonu, sayaç gibi HTML elemanlarını ve ödevdeki 5. etkinlik kartını sayfaya ekletmek için kullandım.
* **Prompt 3:** `"etkinlikler.html dosyasındaki arama kutusuna (#search-input) girilen metne göre .event-card sınıflı kartları filtreleyen vanilla JavaScript kodu yaz. Büyük/küçük harf duyarlılığı, boşluk temizleme, sayaç ve temizle butonu işlevlerini ekle."`
  * **Amaç:** Arama kutusuna bir şey yazıldığında kartları anlık olarak filtreleyen ve sonuç sayısını güncelleyen JavaScript kodunu `script.js` dosyasında oluşturmaktı.

## 2. Yapay Zekâ Önerisinin Değerlendirilmesi
Copilot ilk başta arama kodlarını ve JavaScript mantığını doğrudan HTML dosyasının içine yapıştırmayı önerdi. Ancak ben kodların birbirine karışmaması, sayfanın daha düzenli durması ve yapının modüler olması için JavaScript kodlarını ayrı bir `script.js` dosyasında toplamayı tercih ettim ve Copilot'ı buna göre yönlendirdim.

## 3. Kod Açıklamaları (Kendi Cümlelerimle)
* **Event Listener (`addEventListener`):** `searchInput.addEventListener('input', filterEvents);` satırındaki event listener, kullanıcının arama kutusundaki hareketlerini takip eden bir dinleyicidir. Kullanıcı klavyeden her yeni harf bastığında veya bir harf sildiğinde (`input` anında) `filterEvents` fonksiyonunu otomatik olarak çalıştırır.
* **Filtreleme Koşulu (`includes`, `trim`, `toLowerCase`):** Arama yaparken kullanıcının büyük veya küçük harf yazması sonucu değiştirmesin diye `toLowerCase()` kullanarak hem aranan metni hem de kart başlıklarını küçük harfe çevirdim. Yanlışlıkla basılan boşluklar aramayı bozmasın diye `trim()` ile kelimenin başındaki ve sonundaki boşlukları temizledim. Son olarak `includes()` komutuyla da yazılan kelimenin etkinlik başlığında geçip geçmediğini kontrol ettirdim.