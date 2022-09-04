W folderze '01-basics' w tym repozytirium stwórzcie folder przeznaczony na kod Waszej grupy o nazwie 'team-X' gdzie X będzie numerem grupy. Pracujemy na branczu '01-basics/team-X" stworzonym z gałęzi głównej (podobnie jak wyżej - X to numer grupy).

W tym projekcie przygotujemy dziennik elektroniczny klasy 3A. Stworzymy przy pomocy JSa szablon aplikacji, która będzie służyła do zarządzania całą klasą. Zadanie jest podzielone na kilka etapów i każdy etap powinien zawierać w sobie fragment kodu odpowiedzialny za jego realizację.
Do tworzenia zmiennych wykorzystujemy 'const', chyba, że w konkretnym etapie wskazano inaczej.

### Zadanie

1. Stwórz pusty obiekt reprezentujący klasę, nazwijmy go '3A'.

<!-- tutaj kod -->

2. Stwórz obiekt reprezentujący wychowawcę klasy ('teacher'), niech zawiera w sobie właściwości:

- wiek - age (Number)
- imię - firstName (String)
- nazwisko - lastName (String)
- staż pracy w latach - workExperience (Number)
- lista klas z którymi ma zajęcia - classes (Array - tablica z wartościami typu String, np. ["1A", "2B", "3C"])

Konkretne wartości ustalcie między sobą w zespole.

<!-- tutaj kod -->

3. Dodaj do obiektu klasy 3A nową właściwość, niech to będzie 'teacher' i jego wartością będzie obiekt stworzony w kroku 2 ('teacher').

<!-- tutaj kod -->

4. Stwórzmy naszą klasę - przygotujcie 4 obiekty będące pojedynczym uczniem (nazwa obiektu to może być imię i nazwisko pisane w notacji firstNameLastName), struktura tego obiektu powinna wyglądać następująco:

- wiek - age (Number)
- imię - firstName (String)
- nazwisko - lastName (String)
- lista ocen - marks (Array - tablica z wartościami typu Number, np. [1,2,3], aktualnie pusta, dopiero zaczynamy rok szkolny)
- numer w dzienniku - number (Number) - kolejne liczby całkowite zaczynając od 1 (może byc alfabetyczna kolejność, ale nie musi)
- czy jest gospodarzem? - isClassRepresentative (Boolean) - jeszcze nie rozpoczęślimy roku szkolnego, dlatego nikt jeszcze gospodarzem nie jest, ale później jedna z osób powinna gospodarzem zostać :)
- adres zamieszkania - address (Object) - obiekt, składający się z 3 właściwości - street, postCode, city (każdy z nich to String)

Za pomocą takiej struktury przygotujcie 4 osoby.

Konkretne wartości ustalcie między soba w zespole.

<!-- tutaj kod -->

5. Stwórz nową tablicę o nazwie 'students' i dodaj w niej zdefiniowanych wyżej uczniów.

<!-- tutaj kod -->

6. Do obiektu '3A' w którym już znajduje się nauczyciel dodajemy nową właściwość - students - będzie ona zawierała tablicę stworzoną w kroku 5.

<!-- tutaj kod -->

7. Korzystająć z funkcji console.table() wyświetl w konsoli aktualny skład klasy (czyli tablicę 'student' znajdującą się w obiekcie '3A'). Nie przejmujcie się, jeśli console.table() jest czymś nowym - spróbujcie w grupie za pomocą tych przykładów (https://www.w3schools.com/jsref/met_console_table.asp) dojść do tego, jak powinno się z tej funkcji korzystać. Na potwierdzenie wykonania tej operacji dorzućcie proszę screen do folderu z zadaniem :)

<!-- tutaj kod -->

8. Rozpoczynamy rok szkolny i uczniowie muszą się przedstawić. Każdy z nich powinien powiedzieć:
   'Mam na imię A, moje nazwisko to B, mieszkam na ulicy C w mieście D. Mam E lat.
   Poszczególne litery (A do E) zamień konkretnymi wartościami z danego obiektu. Do wyświetlenia takiej wiadomości możesz skorzystać z konkatenacji albo z interpolacji (https://github.com/infoshareacademy/jfdzr8-materialy-JavaScript/tree/main/02-primitives#konkatenacja-string%C3%B3w) (do realizacji tego punktu nie musicie wykorzystywać żadnych pętli ani funkcji)

<!-- tutaj kod -->

9. Wybieramy gospodarza. Głosem większości uczeń z numerem '2' zostanie gospodarzem - konieczna jest zmiana właściwościwości isClassRepresentative tej osoby.

<!-- tutaj kod -->

10. Właśnie napisaliśmy pierwszy test, czas na aktualizację dziennika dla poszczególnych osób. Oceny prezentują się następująco:

- osoba z numerem 1: 4
- osoba z numerem 2: 5
- osoba z numerem 3: 3
- osoba z numerem 4: 6

Dodajcie poszczególne oceny dla poszczególnych osób. Skorzystajcie z metodu 'push' (https://github.com/infoshareacademy/jfdzr8-materialy-JavaScript/tree/main/03-konsola-i-typy-zlozone#dodawanie-danych-do-tablicy---metody-push-i-unshift). Aby dodać oceny dla danych osób skorzystajcie z notacji pokazanej na zajęciach (https://github.com/infoshareacademy/jfdzr8-materialy-JavaScript/tree/main/03-konsola-i-typy-zlozone#odczytywanie-danych-z-tablicy) (https://github.com/infoshareacademy/jfdzr8-materialy-JavaScript/tree/main/03-konsola-i-typy-zlozone#dodawanie-danych-do-tablicy---metody-push-i-unshift)

<!-- tutaj kod -->

11. Ponownie wykorzystująć funkcję console.table() pokażcie jak wyglądają aktualnie oceny grupy. Dodajcie screena do folderu na to zadanie.

<!-- tutaj kod -->

12. Do klasy dołącza nowa osoba - musimy ją dodać do dziennika, ale póki co zdefiniujmy jej właściwości - stwórzcie obiekt taki sam jak w kroku 4.

<!-- tutaj kod -->

13. Dodajemy nową osobę do klasy (do tablicy 'students')

<!-- tutaj kod -->

14. Piszemy drugi test. Oceny ułozyły się następująco:

- osoba z numerem 1: 4
- osoba z numerem 2: 3
- osoba z numerem 3: 5
- osoba z numerem 4: 4
- osoba z numerem 5: 5

Działamy podobnie jak w kroku 10 :)

<!-- tutaj kod -->

15. Kończymy rok szkolny - czas na podsumowania. Przedstawcie aktualny skład uczniów wraz z ich ocenami za pomoca console.tabe().

<!-- tutaj kod -->

No i kończymy, gratulacje, właśnie napisaliście pierwszą aplikację w JS!
