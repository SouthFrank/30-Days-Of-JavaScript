// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const base = prompt('What is the base?');
// const height = prompt('What is the height?');

// const triangle = (b, h) => {
//     console.log(0.5 * b * h);
// };

// triangle(base, height);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// const sideA = Number(prompt('Side A?'));
// const sideB = Number(prompt('Side B?'));
// const sideC = Number(prompt('Side C?'));

// const trianglePerimeter = (a,b,c) => {
//     console.log(a + b + c);
// };

// trianglePerimeter(sideA, sideB, sideC);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

const yearBorn = Number(prompt('What year were you born?'));

const now = new Date();
const year = now.getFullYear();

const userAge = (yearBorn, year) => {
    const age = year - yearBorn;
    console.log(age);
    if(age >= 18){
        console.log(`You are ${age}. You are old enough to drive.`);
    } else {
        console.log(`You are ${age}. You are not allowed to drive.`);
    }
}

userAge(yearBorn, year);