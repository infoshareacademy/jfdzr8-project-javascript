Stwórzcie w tym repozytorium w folderze '04-forms-modules-timers' folder team-[numer-pokoju] gdzie będziecie wrzucać swój kod. Każda grupa tworzy nowego brancha: 'git checkout -b 03-forms-modules-timers/team-[numer pokoju]' z brancha głównego.

Napisz aplikację do śledzenia zadań (lista TODO). Aplikacja powinna być podzielona na moduły odpowiedziałne za poszczególne fragmenty logiki.

Aplikacja powinna działać w następujący sposób:

1. Użytkownik wpisuje treść zadania i dodaje zadanie do listy po kliknięciu na przycisk - tutaj wymagana walidacja - jeśli pole tekstowe jest puste - dodajemy czerwoną wiadomość, że należy to uzupełnić. Po uzupełnieniu i ponownym kliknięciu na przycisk jeśli tym razem jest ok - wiadomość z błędem znika i zadanie się dodaje. Zadanie powinno być obiektem z 2 właściwościami - 'value' będącym treścią oraz 'id' będący unikatowym identyfikatorem danego zadania - do jego stworzenia posłużcie się funkcją 'Math.random()'. To 'id' powinno być również dodane jako atrybut 'id' dla danego zadania (widoczne w DOM).

2. Zadanie pojawia się na liście PO 2 SEKUNDACH.

3. Po 2 sekundach zadanie pojawia się na liście i dodatkowo jest zapisywane w kolekcji trzymanej w LocalStorage - nazwa klucza - dowolna.

4. Logika odpowiedzialna za LocalStorage - zapisywanie, odczytywanie i usuwanie danych powinna być wydzielona do osobnego modułu zawierającego 3 funkcje do obsługi tych zadań.

5. Kliknięcie na element listy powinno spowodować usunięcie elementu, również po 2 sekundach i również z LocalStorage.

### Zadanie

---

1. Przygotujcie funkcję realizującą dodawanie zadań. Funkcja ta powinna nasłuchiwać na event 'submit' formularza (czyli dodajemy referencję do elementu DOM i podpinamy eventListener).
   Najlepiej podzielić takie duże zadanie na malutkie kroki i je stopniowo wdrażać w życie. Każdy krok powinien być osobą funkcją zrealizowaną w taki sposób, aby każda funkcja była odpowiedzialna za jedno zadanie, np osobna funkcja do walidacji, osobna funkcja do dodania elementów do DOM.
   Tutaj przygotujcie sobie sam szablon funkcji - za pomocą komentarzy stwórzcie logiczną całość i spróbujcie wyodrębnić poszczególne funkcje. Zadania trzymajcie w stanie jako tablicę.

#### <<< tutaj kod >>>

---

2. Po stworzeniu takiej fikcyjnej struktury następnym krokiem będzie wdrożenie poszczególnych funkcjonalności. Polecam zacząć od funkcji walidującej zawartość inputa, następnie funkcję na dodawanie wiadomości z błędem itd - im mniejsze funkcje tym czytelniej i prościej o wszelkie modyfikacje. Później dodanie zadania do listy zadań i aktualizacja DOM.

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---

3. Po stworzeniu bazowej funkcjonalności przechodzimy do stworzenia modułu odpowiedzialnego za pracę z LocalStorage. Jak wspomniałem wyżej - moduł ten powinien zawierać 3 funkcje - odpowiedzialną za dodawanie, usuwanie i pobieranie informacji. Stwórzcie moduł i zepnijcie funkcjonalność dodawania zadań z modułem LocalStorage. Pamietajcie o dodaniu event listenera na załadowanie się DOM po którym powinny z LocalStorage być wczytane dodane zadania (document.addEventListener("DOMContentLoaded",callback))

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---
