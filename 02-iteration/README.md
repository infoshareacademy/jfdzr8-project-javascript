Stwórzcie w tym repozytorium w folderze '02-iteration' folder team-[numer-pokoju] gdzie będziecie wrzucać swój kod. Każda grupa tworzy nowego brancha: 'git checkout -b 02-iteration/team-[numer pokoju]' z brancha głównego.

### Zadanie

---

0. Napiszcie IIFE, które wyświetli w konsoli informację 'Witamy na zajęciach projektowych z JS!'.

#### <<< tutaj kod >>>

---

1. Stwórzcie pustą tablicę o nazwie teamX, gdzie X to numer grupy.

#### <<< tutaj kod >>>

---

2. Stwórzcie obiekty zawierającą dane członków grupy zawierające takie dane (właściwości) jak: imię, nazwisko, wiek, wzrost (w cm), adres (obiekt) zawierający nazwę ulicy i kod pocztowy (to może być zupełnie fikcyjne :D), listę kilku hobby (hobby jako string, też może być fikcyjne, ale dodajcie po 2-3 elementy do tej tablicy hobby dla każdej osoby) oraz to, czy członek grupy jest posiadaczem jakiegoś zwierzęcia (boolean). Nazwa obiektu wg konwencji imięNazwisko, np bartekKowalski.

#### <<< tutaj kod >>>

---

3. Dodajcie przy pomocy metody 'push' stworzone obiekty do tablicy.

#### <<< tutaj kod >>>

---

4. Czas się sobie przedstawić. Napiszcie funkcje, które przyjmą obiekt osoby jako parametr i zwrócą tekst: 'Mam na imię A, mieszkan w mieście B, moje hobby to C, D, E. Wywołajcie tę funkcję dla każdej osoby z grupy. Przygotujcie funkcję, która korzysta z interpolacji oraz drugą, która wykorzystuje konkatenację.

#### <<< tutaj kod >>>

---

5. Jeden z Was jest kapitanem odpowiedzialnym za commity i push - dodajcie tej osobie odpowiednią właściwość. Stwórzcie funkcję, która przyjmie jako parametr imię tej osoby, znajdzie ją (podpowiedź: find()) w tablicy 'teamX' (z punktu 3) i doda jej odpowiednią właściwość (np. isGroupLeader). Wywołajcie tę funkcję dla danej osoby. Dodatkowo wywołajcie console.table() aby wyświetlić dane członków grupy - dorzućcie screen do folderu z zadaniem.

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---

6. Napiszcie funkcję, która jako parametry przyjmie obiekt osoby i drugą funkcję. Funkcja główna będzie odpowiadała za sprawdzenie czy użytkownik jest wyższy niż 175. Stwórzcie zmienną wewnątrz funkcji i skorzystajcie z ternary operatora (a ? b : c) aby do tej zmiennej przypisać wartość czy użytkownik jest wyższy niż 175 cm lub też nie (boolean). Funkcja przekazana jako parametr będzie przyjmowała parametr który zwróci ternary operator i następnie będzie służyła do wyświetlenia informacji o treści 'A jest wyższy/a niż 175 cm.' lub 'A jest niższy/a niż 175 cm.' (gdzie A to imię osoby) w zależności od przekazanego parametru. Wywołajcie funkcję dla każdej osoby.

#### <<< tutaj kod >>>

---

7. Chwila przerwy, poszlibyśmy na spacer, ale nie mamy jak :c Musimy dodać do każdego obiektu funkcję 'walk', która wyświetli w konsoli informację 'Idę na spacer'. Stwórzcie taką funkcję i dodajcie do każdego obiektu nową właściwość - 'walk' której wartością będzie stworzona funkcja 'walk'. Wywołajcię tę funkcję dla każdej osoby.

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---

8. Stwórzcie funkcję, która jako parametr przyjmie obiekt osoby i jeśli jej wiek jest większy niż 30 lat to zwróci 'true' (przeciwnie - 'false'). Stwórzcie nową tablicę osób starszych niż 30 lat za pomocą metody filter(X), gdzie jako parametr X przekażesz stworzoną wcześniej funkcję. Wykonajcie console.table() tej nowo powstałej tablicy - dorzućcie screen do folderu z zadaniem.

#### <<< tutaj kod >>>

---

9. Napiszcie funkcję, która przyjmuje obiekt osoby jako parametr i zwróci 'true' tylko jeśli osoba ma wzrost z przediału 170-180 (włącznie z tymi wartościami) oraz nie jest posiadaczem żadnego zwierzaka (w przeciwnym przypadku zwraca 'false'). Wywołajcie tę funkcję dla każdej osoby.

#### <<< tutaj kod >>>

---

10. Napiszcie funkcję, która przyjmie listę osób (z punktu 3) jako parametr i zwróci sumę lat członków zespołu (podpowiedź: reduce()).

#### <<< tutaj kod >>>

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---

#### koniec!
