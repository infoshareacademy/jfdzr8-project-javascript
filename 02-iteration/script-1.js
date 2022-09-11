(() => {
	console.log(`witamy na zajęciach`);
})();

let team3 = [];

let wiktorSobczak = {
	age: 29,
	name: "Wiktor",
	lastName: "Sobczak",
	height: 185,
	address: {
		street: "Jatki",
		postCode: "72-405",
	},
	hobby: ["sport", "gry wideo", "spacery"],
	isAnimalOwner: true,
};
let krzysztofSosnowski = {
	age: 19,
	name: "Krzysztof",
	lastName: "Sosnowski",
	height: 195,
	address: {
		street: "Czarna Białostocka",
		postCode: "16-020",
	},
	hobby: ["sport", "gry wideo", "spacery"],
	isAnimalOwner: true,
};
let katarzynaSkibowska = {
	age: 28,
	name: "Katarzyna",
	lastName: "Skibowska",
	height: 168,
	address: {
		street: "Opolska",
		postCode: "05-270",
	},
	hobby: ["podróże", "taniec", "pływanie"],
	isAnimalOwner: false,
};
let adamPawlowski = {
	age: 29,
	name: "Adam",
	lastName: "Pawłowski",
	height: 200,
	address: {
		street: "Długa",
		postCode: "31-666",
	},
	hobby: ["sport", "gry wideo", "spacery"],
	isAnimalOwner: true,
};
team3.push(
	wiktorSobczak,
	krzysztofSosnowski,
	katarzynaSkibowska,
	adamPawlowski
);

function welcome1(obj) {
	return (
		"Mam na imię " +
		obj.name +
		" mieszkam w mieście " +
		obj.address.street +
		" moje hobby to " +
		obj.hobby.join(", ") +
		"."
	);
}

function welcome2(obj) {
	return `Mam na imię ${obj.name} mieszkam w mieście ${
		obj.address.street
	} moje hobby to ${obj.hobby.join(", ")}.`;
}

// console.log(welcome1(wiktorSobczak));
// console.log(welcome1(krzysztofSosnowski));
// console.log(welcome1(katarzynaSkibowska));
// console.log(welcome1(adamPawlowski));

// console.log(welcome2(wiktorSobczak));
// console.log(welcome2(krzysztofSosnowski));
// console.log(welcome2(katarzynaSkibowska));
// console.log(welcome2(adamPawlowski));

function liderFound(name) {
    let master = team3.find(function (person) { return person.name === name });
    master.isGroupLeader = true    
}
liderFound("Wiktor");
console.log(wiktorSobczak)



