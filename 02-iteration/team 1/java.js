(function hello() {
  console.log("Witamy na zajęciach projektowych z JS!");
})();

let team1 = [];

let edekKredek = {
  name: "Edek",
  surname: "Kredek",
  age: 18,
  address: { street: "Polna", postCode: "00-500", city: "Kraków" },
  hobby: ["piłka nozna", "koszykówka", "pierogi"],
  animalOwner: true,
};

let KubuśPuchatek = {
  name: "Kubuś",
  surname: "Puchatek",
  age: 13,
  address: { street: "StumilowyLas", postCode: "05-980", city: "Marzeniowo" },
  hobby: ["planszówki", "terkking", "malarstwo"],
  animalOwner: true,
};

let Prosiaczek = {
  name: "Prosiaczek",
  surname: "Prosiaczkowy",
  age: 7,
  address: { street: "Leśna", postCode: "03-988", city: "Stumilowo" },
  hobby: ["spacery", "taniec", "opera"],
  animalOwner: false,
};

team1.push(edekKredek, KubuśPuchatek, Prosiaczek);

function presentation1(person) {
  return (
    "Mam na imię " +
    person.name +
    " mieszkam w mieście " +
    person.address.city +
    " moje hobby to " +
    person.hobby.join(" i ")
  );
}

function presentation3(person) {
  return `Mam na imie ${person.name} , mieszkam w mieście ${
    person.address.city
  }, moje hobby to ${person.hobby.join(", ")}`;
}

console.log(presentation3(Prosiaczek));
console.log(presentation3(edekKredek));
console.log(presentation3(KubuśPuchatek));

console.log(presentation1(Prosiaczek));
console.log(presentation1(edekKredek));
console.log(presentation1(KubuśPuchatek));

function GroupLeader(name) {
  let TeamLeader = team1.find(function (currentValue) {
   return currentValue.name === name;
  });
  TeamLeader.isGroupLeader = true;
}

GroupLeader("Edek")

console.log(team1)
console.table(team1)
