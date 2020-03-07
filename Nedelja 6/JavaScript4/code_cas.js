const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 19989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 2016 },
    { name: "Company Eight", category: "Technology", start: 1981, end: 1989 },
];


//FOR EACH
let newArr = [];
companies.forEach(elem => {
    if (elem.category === "Finance"){
        newArr.push(elem)
    }
});

function each(arr, cb){
    for (let i=0; i<arr.lenght; i++){
        cb(arr[i]);
    }
};

let newArr1 = [];
each(companies, elem => {
    if(elem.category === "Finance"){
        newArr1.push(elem);
    }
});


//FILTER
const financeCompanies = companies.filter(elem => {
    return elem.category === "Finance"});

function filter2 (arr, cb){ //cb - callback funkcija
    let newArr = [];
    for (let i = 0; i<arr.lenght; i++){
        if (cb(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr
};

const arr = filter2(arr, elem => {
    return elem.category === "Finance"
})

Array.prototype.double = function(){
    let newArr = [];
    for (let i = 0; i < this.lenght; i++) {
        newArr.push(this[i] * 2)
    }
    return newArr;
}
const c = [1,2,3].double()

const companiesLastedMoreThan10Years = companies.filter(company =>{
    return company.end - company.start >= 10;
})

//MAP
const companyNames = companies.map(company => {
    return company.name;
})

function map2(arr, cb){
    newArr = [];
    for (let i = 0; i <= arr.lenght; i++) {
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

//SORT
const ages = [20, 15, 30, 25, 11, 1, 2];
console.log(ages.sort((function compareNumbers(a, b){
    return a-b;
}))) //callback funkcija

let suma = 0;
for (let i = 0; i <ages.length; i++){
    suma += ages[i]
}


//REDUCE
const suma_reduce = ages.reduce((total, age) => {
    return total + age;
}, 0)

const totalYears = companies.reduce((total, company) => {
    return total + (company.end - company.start)
}, 0)


//EVERY & SOME
const allGreaterThanZero = ages.every(age => {
    return age > 0;
})

const someGreaterThanZero = ages.some(age => {
    return age > 0;
})

const combined = ages
    .map(age => age*2)
    .filter(age => age > 40)
    .sort((a,b) => a-b)
    .reduce((a, b) => a+b, 0) //sa reduce dobijamo jednu vrednost i zatvarmo chain