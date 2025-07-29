
letter behavior by for of loop 
price summation 

// let behavior = 'How are you ?';
// for(let letter of behavior){
//     console.log(letter);
// }

// let reverse = '';
// let behavior = 'How are you ?';
// for(let letter of behavior){
//     reverse = reverse + letter
// }
// console.log(reverse);

// let reverse = '';
// let behavior = 'How are you ?';
// for(let letter of behavior){
//     reverse = letter + reverse
// }
// console.log(reverse);

// let reverse = '';
// let behavior = 'How are you ?';
// console.log(behavior.length);

// for(let letter of behavior){
//     reverse = letter + reverse
// }
// console.log(reverse);

// let reverse = '';
// let behavior = 'How are you ?';
// console.log(behavior[5]);

// for(let letter of behavior){
//     reverse = letter + reverse
// }
// console.log(reverse);

// function add(num1, num2){
//     let total = num1 + num2 ;
//     return total
// }

// let addValueAndResult = add(12+13, 5);
// console.log(addValueAndResult);


let players = ['Abir, Fahim, Rana, Abir, Russell, Rana, Fahim, Ferdous, Rihan, Abir ']

function removeDuplicate(names){
    let unique = [];
    for(let name of names){
        if(unique.indexOf(name) == -1){
            unique.push(name)
        }
    }
    return unique
}
let removedDuplicateName = removeDuplicate(players);
// console.log(removedDuplicateName);


// for (i=0; i <= 50; i++){
//     console.log(i);
// }

// for (i=0; i <= 50; i++){
//     if(i%3 == 0){
//         console.log('foo');
//     }
//     console.log(i);
// }

// for (i=1; i <= 50; i++){

//     if(i%3 == 0 && i%5 == 0){
//         console.log('foobar');
//     }
//     else if(i%3 == 0){
//         console.log('foo');
//     }
//     else if (i%5 == 0){
//         console.log('bar');
//     }
    
//     else{
//         console.log(i)
//     }
// }

// let products = [
//     {name:'phone', price: 5000, color: 'red'},
//     {name:'watch', price: 500, color: 'silver'},
//     {name:'pant', price: 800, color: 'black'},
// ];

// for(let product of products){
//     console.log(product);
// }

// let products = [
//     {name:'phone', price: 5000, color: 'red'},
//     {name:'watch', price: 500, color: 'silver'},
//     {name:'pant', price: 800, color: 'black'},
// ]
// console.log(products);
// for(let product of products){
//     console.log(product);
// }

// let products = [
//     {name:'phone', price: 5000, color: 'red'},
//     {name:'watch', price: 500, color: 'silver'},
//     {name:'pant', price: 800, color: 'black'},
// ]
// for(let product of products){
//     console.log(product.name);
// }

let products = [
    {name:'phone', price: 5000, color: 'red'},
    {name:'watch', price: 500, color: 'silver'},
    {name:'pant', price: 800, color: 'black'},
]
let total = 0;
for(let product of products){
    total = total + product.price
}
console.log(total);



