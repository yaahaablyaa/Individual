let user = {
    name: 'Asad',
    surname: 'Xamrakulov',
    birhtday: 2007,
    age: 15,
    isMarried: true,
}
let Info = {
    hairColor: 'black',
    height: 175,
    arrid: [],
    money: null,
    width: NaN,
    wife: undefined
}



let value = Object.values(user)
console.log(user)

let entries = Object.entries(user)
console.log(entries);



let objAll = Object.assign(user, Info)
let values = Object.values(objAll)

let number = []
let boolean = []
let string = []
let object = []


values.filter(item => {
    if(typeof(item) == 'number') {
        number.push(item)
    } else if(typeof(item) === 'string') {
        string.push(item)
    } else if (typeof(item) === 'object') {
        object.push(item)
    } else if(typeof(item) === 'boolean') {
        boolean.push(item)
    }
})
console.log('number', number.length, 'boolean',boolean.length, 'string',string.length, 'object',object.length, ); 


let  Asad = number.length + boolean.length + string.length + object.length
console.log(Asad);