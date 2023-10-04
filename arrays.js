
let mynums = [1, 
             -1, 
              3];

console.log(mynums);

mynums.push(5);

console.log(mynums);

mynums.splice(2, 1);

console.log(mynums);

let t = 0;

mynums.forEach((numbr) => {
    t += numbr;
});

console.log( `total of array is: ${t}`);

