let people = [
   {
    stateName: "Abia",
    country: "Nigeria",
    numOfLocalGov: 19
},
    {
        stateName: "Adamawa",
        country: "Nigeria",
        numOfLocalGov: 32
    },
    {
        stateName: "Ogun",
        country: "Nigeria",
        numOfLocalGov: 23
    },
    {
        stateName: "Kano",
        country: "Nigeria",
        numOfLocalGov: 14
    },
    {
        stateName: "Ekiti",
        country: "Nigeria",
        numOfLocalGov: 43
    }
]

let stateWith = people.filter((person)=> person.numOfLocalGov > 25);
console.log(stateWith);