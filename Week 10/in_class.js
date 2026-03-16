let students = '{"students": [{"name": "John","major": "Computer Science"},{"name": "Emma","major": "Information Technology"},{"name": "Michael","major": "Software Engineering"}]}';

let data = JSON.parse(students);

console.log(data.students[0].name);

for (let i = 0; i < data.students.length; i++) {
    console.log(data.students[i].name);
}