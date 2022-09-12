// Krok 1. Tworzymy obiekt
const edek = { name: "Edek", height: 177 };

// Krok 2. Tworzymy funkcję, która przyjmuje dwa parametry - imię uzytkownika (userName) i wartość typu boolean (isUserTall)

// Parametry to tak naprawdę reprezentacja tego, co przekazujemy do funkcji w momencie jej wywołania i wykorzystujemy je w tej funkcji - tutaj 'userName' i 'isUserTall'
// Parametry NIE MAJA wartości - wskazują one jedynie jakich (i ilu) danych oczekujemy i potrzebujemy do prawidłowego działania funkcji
// Nazwy parametrów są dowolne i będą wykorzystane jedynie wewnątrz tej funkcji - ważne, żeby ich nazwy wskazywało na to, czego oczekujemy w nich

// Wiemy, że aby poprawnie wykorzystać funkcję będzie nam potrzebne:
//// a) imię użytkownika - wiemy, że go potrzebujemy ale na ten moment nie wiadomo, jaka wartość będzie tutaj wykorzystana przy wywołaniu funkcji
//// b) stosunek wzrostu użytkownika do wzorcowej wartości - czyli będzie to boolean określający czy użytkownik jest większy niż 175 czy nie. Na ten moment wiemy, że tutaj może być albo true albo false, ale nie wiemy co będzie

// Funkcja ta przyjmuje 2 parametry - userName i isUserTabll. Funkcja ta zwraca (słowo kluczowe 'return') tekst odpowiedni do tego, czy parametr 'isUserTall' był 'true' czy 'false' wraz z imieniem użytkownika.
function displayHeightInfo(userName, isUserTall) {
  // jeśli ('if') parametr będzie miał wartość 'true'
  if (isUserTall === true) {
    // to w takim przypadku zwracamy poniższy tekst:
    return `${userName} is taller thank 175 cm`;
    // w przeciwnym wypadku ('else')
  } else {
    // zwrócimy następujące zdanie:
    return `${userName} is NOT taller thank 175 cm`;
  }
}
// Przeczytaj to kilka razy i jeśli wszystko jest jasne - przechodzimy dalej

// Krok 3. Tworzymy funkcję wyższego rzędu (Higher Order Function) - czyli funkcję, która przyjmuje inną funkcję jako parametr lub jakąś funkcję zwraca - w naszym przypadku będziemy przyjmować inną funkcję jako parametr.

// Tutaj mamy 2 parametry - 'user' i 'displayHeightInfoCallback'.
//// a) 'user' jest to po prostu jakiś użytkownik (obiekt), którego wzrost sprawdzamy
//// b) 'displayHeightInfoCallback' jest tzw funkcją zwrotną, czyli callbackiem - funkcją przekazaną jako parametr do innej funkcji. Ten callback będzie odpowiedzialny za zwrócenie odpowiedniego tekstu w zależności od wzrostu użytkownika (parametr 'user')
// Podobnie jak wcześniej - nazwy parametrów są dowolne, ale powinnny w jasny sposób określać to, czego sie w nich spodziewamy
function getUserHeightInfo(user, displayHeightInfoCallback) {
  const isUserTall = user.height > 175 ? true : false; // sprawdzamy czy wzrost użytkownika jest większy niż 175 i zapisujemy to w zmiennej/stałej 'isUserTall'
  const heightInfo = displayHeightInfoCallback(user.name, isUserTall); // wywołujemy funkcję zwrotną (callback) - czyli funkcję przekazaną jako parametr do innego funkcji - 'displayHeightInfoCallback' z ARGUMENTAMI 'user.name' (imię uzytkownika) i 'isUserTall' określającym czy wzrost użytkownika jest większy od zadanego. Argumentami nazywa się konkretne wartości przekazywane do funkcji w momencie jej wywołania.
  // rezultat z wywołania funkcji zapisywany jest w zmiennej o nazwie heightInfo. Będzie to tekst zwrócony z funkcji 'displayHeightInfoCallback'
  return heightInfo; // zwracamy rezulalt funkcji displayHeightInfoCallback
}

// Krok 4. Wywołujemy funkcję 'getUserHeightInfo' z zadanymi argumentami - edkiem i callbackiem (funkcją zwrotną) 'displayHeightInfo'.
// 'edek' to po prostu obiekt utworzony na początku a 'displayHeightInfo' to funkcja, którą też zdefiniowaliśmy wcześniej
// dane przekazane przy wywoływaniu funkcji MUSZA odpowiadać realnym zmiennym/obiektom/funkcjom itd...
getUserHeightInfo(edek, displayHeightInfo);
// pierwszym Argumentem jest edek - konkretny obiekt, drugim jest funkcja zwrotna (callback) czyli displayHeightInfo
// kolejność argumentów ma znaczenie - musi być taka sama jak kolejność parametrów określonych w definicji funkcji - jeśli spodziewamy się, że pierwszy parametr będzie obiektem to zarówno argument musi być obiektem jak i parametr w funkcji, do której ten argument przekazaliśym.

// Zapamiętaj:
// 1. Parametry określamy podczas definiowania funkcji i są one reprezentacją tego, co umieścimy w tej funkcji w momencie jej wywołania.
// 2. Wywołaniem funkcji jest wykorzystanie jej nazwy wraz z nawiasami okrągłymi i argumentami (jeśli są wymagane), np 'doSomething(1,2) lub 'doAnything()'
// 3. Argumenty to konkretne wartości przekazywane w momencie wywołania funkcji w nawiasie za jej nazwą. Funkcja nie musi wykorzystywać żadnych argumentów
// 4. Nazwy parametrów i argumentów nie muszą być jednakowe. Parametr, który mamy w funkcji to nazwa, która będzie wykorzystana wewnątrz funkcji i pod którą to nazwą będzie trzymana wartość w momencie jej wywołania.

function Blabla(a) {
  // PARAMETR 'a' - czyli nazwa, która będzie wykorzystana wewnątrz funkcji a która będzie związana z przekazanym przy wywołaniu argumentem
  console.log(a);
}

const b = 1;

Blabla(b); // Wywołujemy funkcję podając jej ARGUMENT - konkretną wartość, która funkcja wykorzysta do swojej pracy
