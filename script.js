var personDb = [];

function Person(attributes) {
    this.name = attributes.name;
    this.surname = attributes.surname;
    this.age = attributes.age;
    this.role = attributes.role;
}


var person1 = new Person({
    name: 'John',
    surname: 'Snow',
    age: 25,
    role: 'lecturer'
});

personDb.push(person1);

var person2 = new Person({
    name: 'Maciej',
    surname: 'Snow',
    age: 25,
    role: 'lecturer'
});
personDb.push(person2);

var person3 = new Person({
    name: 'Jack',
    surname: 'Snow',
    age: 25,
    role: 'lecturer'
});
personDb.push(person3);

function renderRow(name, surname, age, role) {
    return '<div><div>' + name + '</div><div>' + surname + '</div><div>' + age + '</div><div>' + role + '</div></div>';
}

function renderDb() {
    var containerDb = document.getElementById('records');
    personDb.map(function(person){
        containerDb.innerHTML += renderRow(person.name, person.surname, person.age, person.role);
    })
};

renderDb()