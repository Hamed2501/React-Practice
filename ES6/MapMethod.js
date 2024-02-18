
const people=[
    {
        name:'Jack',
        age:'24',
        position:'Developer'
    },{
        name:'Peter',
        age:'25',
        position:'designer'
    }
    ,{
        name:'Martin',
        age:'26',
        position:'Tester'
    },{
        name:'Tim',
        age:'28',
        position:'PM'
    }
];
const getAges=(person)=>person.age *2;
const ages=people.map(getAges);

console.log(ages);

const newPeople=people.map(item=>{
    if(item.age>=25){

    }
    return {
FirstName:item.name,
Age:item.age,
Position:item.position
    };
});
console.log(newPeople);

const names=people.map(person=>`<h2>${person.name.toUpperCase()}</h2>`);
let inputF = document.getElementById("IDMapMethod").innerHTML=names.join('');
            