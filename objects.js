let mybook = {
    name: "My life story",
    price: 9.99,
    author: "John Busch",
    genre: ["Horror", "Dark", "Gory"]

};
 
console.log(` <h3> Book title </h3> <div> ${mybook.name} </div>`);
console.log(`genres: ${mybook.genre[0]}`);

const tvChars = [
    {
      name: 'Michael Scott',
      company: 'Dunder Mufflin',
      designation: 'Regional Manager',
      show: 'The Office'
    },
    {
      name: 'Barney Stinson',
      company: 'Golaith National Bank',
      designation: 'Please',
      show: 'How I met your mother'
    },
    {
      name: 'Jake Peralta',
      company: 'NYPD',
      designation: 'Detective',
      show: 'Brooklyn 99'
    },
  ];
  
  console.table(tvChars[2]);

  tvChars.forEach((tv) => {
        console.log(`<h4> ${tv.show} </h4> <div>TV Actor: ${tv.name}</div>`)
  });