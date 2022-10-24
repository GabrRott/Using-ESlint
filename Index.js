const firstName = "Gabriel";
const lastName = 'Roatta';
const estudiante = firstName.concat(` `,lastName) ;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let lenthEstudiante = estudiante.length;
let firstChar = firstName.charAt(0);
let lastChar = lastName.charAt(5);
let trimSpaces = estudiante.substring(0,7).concat(estudiante.substring(8,14));
let esEstudiante = estudiante.includes(firstName);