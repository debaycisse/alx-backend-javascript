interface Student{
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'John', lastName: 'Doe', age: 14, location: 'Nigeria'
}

const student2: Student = {
    firstName: 'Jane', lastName: 'Bill', age: 16, location: 'San Francisco'
}

const studentsList: Array<Student> = [student1, student2]

const table: HTMLTableElement = document.createElement('table');

for (const student of studentsList) {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const td1: HTMLTableCellElement = document.createElement('td');
    const td2: HTMLTableCellElement = document.createElement('td');
    td1.appendChild(document.createTextNode(student.firstName));
    td2.appendChild(document.createTextNode(student.location));
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}

document.body.appendChild(table);
