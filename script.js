// 1.
let classData = {};

// 2.
const teacherData = {
  age: 45,
  firstName: "Barbara",
  lastName: "Kowalska",
  workExperience: 5,
  classes: ["1A", "2B", "3C"],
  // 1A => index 0
  // 2B => index 1
  // 3C => index 2
};

// 3.
classData.teacher = teacherData;

// to samo co wyżej, ale w tym przypadku gdy obiekt posiadał wcześniej jakieś dane to stracimy je, bo tworzymy nowy obiekt tylko z właściwością teacher
classData = {
  teacher: teacherData,
};

// 4.
let marekKowalski = {
  age: 15,
  firstName: "Marek",
  lastName: "Kowalski",
  marks: [],
  number: 1,
  isClassRepresentative: false,
  address: { street: "Szkolna", postCode: "12-123", city: "Wrocław" },
};

let mariuszNowak = {
  age: 15,
  firstName: "Mariusz",
  lastName: "Nowak",
  marks: [],
  number: 2,
  isClassRepresentative: false,
  address: { street: "Owocowa", postCode: "12-123", city: "Wrocław" },
};

let katarzynaNowakowska = {
  age: 15,
  firstName: "Katarzyna",
  lastName: "Nowakowska",
  marks: [],
  number: 3,
  isClassRepresentative: false,
  address: { street: "Jażyna", postCode: "12-123", city: "Gdańsk" },
};

let barbaraOkon = {
  age: 15,
  firstName: "Barbara",
  lastName: "Okoń",
  marks: [],
  number: 4,
  isClassRepresentative: false,
  address: { street: "Szkolna", postCode: "12-123", city: "Kraków" },
};

// 5.
const students = [
  marekKowalski,
  mariuszNowak,
  katarzynaNowakowska,
  barbaraOkon,
];

// 6.
classData.students = students;

// albo z wykorzystaniem deskrukturyzacji obiektu:
// classData = {
//   ...classData,
//   students: students,
// };

// 7.
console.table(students);
//to samo
console.table(classData.students);

// 8.
// 'Mam na imię A, moje nazwisko to B, mieszkam na ulicy C w mieście D. Mam E lat.

// konkatenacja
console.log(
  "Mam na imię " +
    classData.students[0].firstName +
    " moje nazwisko to " +
    classData.students[0].lastName +
    " mieszkam na ulicy " +
    classData.students[0].address.street +
    " w mieście " +
    classData.students[0].address.city +
    ". Mam " +
    classData.students[0].age +
    " lat."
);

// interpolacja
console.log(
  `Mam na imię ${classData.students[1].firstName} moje nazwisko to ${classData.students[1].lastName}.
    Mieszkam na ulicy ${classData.students[1].address.street} w mieście ${classData.students[1].address.city}.
    Mam ${classData.students[1].age} lat.`
);

console.log(
  `Mam na imię ${classData.students[2].firstName} moje nazwisko to ${classData.students[2].lastName}.
      Mieszkam na ulicy ${classData.students[2].address.street} w mieście ${classData.students[2].address.city}.
      Mam ${classData.students[2].age} lat.`
);

console.log(
  `Mam na imię ${classData.students[3].firstName} moje nazwisko to ${classData.students[3].lastName}.
      Mieszkam na ulicy ${classData.students[3].address.street} w mieście ${classData.students[3].address.city}.
      Mam ${classData.students[3].age} lat.`
);

// 9.
classData.students[1].isClassRepresentative = true; // zmiana z false na true (Boolean)

// 10.
classData.students[0].marks.push(4);
classData.students[1].marks.push(5);
classData.students[2].marks.push(3);
classData.students[3].marks.push(6);

// 11.
console.table(classData.students);

// 12.
let marcinTracy = {
  age: 15,
  firstName: "Marcin",
  lastName: "Tracy",
  marks: [],
  number: 5,
  isClassRepresentative: false,
  address: { street: "Ulica", postCode: "12-123", city: "Kraków" },
};

// 13.
classData.students[4] = marcinTracy;
// to samo co:
classData.students.push(marcinTracy);

// 14.
classData.students[0].marks.push(4);
classData.students[1].marks.push(3);
classData.students[2].marks.push(5);
classData.students[3].marks.push(4);
classData.students[4].marks.push(5);

// albo z wykorzystaniem desktukturyzacji tablicy:
// classData.students[0].marks=[...classData.students[0].marks, 4]

// 15.
console.table(classData.students);
