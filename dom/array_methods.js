console.log("Good Morning Prashik")
// const companies=[
//     {name:'Company One',category:'Finance',start:1981,end:2003},
//     {name:'Company Two',category:'Retail',start:1992,end:2008},
//     {name:'Company Three',category:'Auto',start:1999,end:2007},
//     {name:'Company Four',category:'Retail',start:1989,end:2010},
//     {name:'Company Five',category:'Technology',start:2009,end:2014},
//     {name:'Company Six',category:'Finance',start:1987,end:2010},
//     {name:'Company Seven',category:'Auto',start:1986,end:1996},
//     {name:'Company Eight',category:'Tehnology',start:20011,end:2016},
//     {name:'Company Nine',category:'Retail',start:1981,end:1989}

// ];
// const ages=[32,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

// forEach

    // //for loop
    // for(i=0;i<=companies.length;i++){
    //     console.log(companies[i]);
    // }

    // forEach

    // companies.forEach(function(company){
    //     console.log(company);
    // })

    // Using ES6 Arrow function.
    // companies.forEach(company=>console.log(company))
 


//   Filter

// let canDrink=[];
// for(let i=0;i<=ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }


// let canDrink=ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// });

// let canDrink=ages.filter(age=> age>=21);

// console.log(canDrink);

// filter the retail category
  
  // using ES6   
        // let retail_cat=companies.filter(cat=>cat.category==='Retail');
        // console.log(retail_cat);
  

//using ES5

        // let retail_cat=companies.filter(function(company){
        //         if(company.category==='Retail'){
        //             return true;
        //         }
        // });
        // console.log(retail_cat);


// filtering the companies of 80's

        // let company_80s=companies.filter(company=>(company.start>=1980 && company.start<=1990));
        // console.log(company_80s);


// Map Create array from another array.

    // let companyNames=companies.map(function(company){
    //     return company.name;
    // });

    // console.log(companyNames);

    //Getting company names and year's
        // let companyNames=companies.map(function(company){
        //     return `${company.name}[${company.start} - ${company.end}]`
        //     });

    // Using Arrow Function
        // let companyNames=companies.map(company =>
        //      `${company.name}[${company.start} - ${company.end}]`);

        // console.log(companyNames);

    // Using Two Map() together
        
        // let ageMap =ages.map(age=>Math.sqrt(age)).map(age=>age*2);
        // console.log(ageMap);

    // Sort 
      
     // Sorting Companies based on the start date
       
        // let sortedCompany=companies.sort(function(c1,c2){
        //     if(c1.start > c2.start){
        //         return 1;
        //     }else{
        //         return -1;
        //     }
        // });

        // Using  arrow function
         
        // let sortedCompany =companies.sort((a,b) => a.start>b.start ?1 :-1);


        // console.log(sortedCompany);

// Reduce 

    //    let agesSum=0;
    //    for(let i=0; i<ages.length;i++)
    //    {
    //        agesSum += ages[i]; 
    //    }


    // let agesSum=ages.reduce(function(total,age){
    //     return total+age;
    // },0);

    // let agesSum=ages.reduce((total,age)=>total+age,0);
    // console.log(agesSum);


// Object Destruction 
    // const obj={
    // name:'Prashik',
    // surname:'Dewtale',
    // mob:7666947944,
    // village:'Vithalwada'
    // };

    // const{name , surname,mob}=obj;
    // console.log(name);
    // console.log(surname);
    // console.log(mob);

    // For of loop

        // let values=[10,20,60];
        // let total=0;
        // for(value of values){
        //     total+=value;
        // }
        // console.log(total);              //O/p:90

       // Itrating through the word or line

            //    let name="Prashik Janardhan Dewtale";

            //    for(letter of name){
            //        console.log(letter);
            //    }

// Rest Operator when you dont know hom many parameters your function is going to take
       
            // function demo(...num){
            //     console.log(num);
            // };
            // demo(1,2,6,5)    // o/p: array_methods.js: [1, 2, 6, 5]


// INCLUDES(): it returns true if the value is exist in array

            // let arr=[1,2,3,4,5];
            // console.log(arr.indexOf(0));     // o/p: -1

            // let arr=[1,2,3,4,5];
            // console.log(arr.includes(0));     // o/p: false

//      padEnd()  and padStart():  add a string with number of times.

    //    let name = 'Prashik'

    //    console.log(name.padStart(12,'s'))  // o/p:  array_methods.js:187 sssssPrashik

    // console.log(name.padEnd(12,'s'))    //array_methods.js:189 Prashiksssss


//  Classes In Javascript

 /*export*/class Animal{                    // Defining Class
        constructor(type, name){
            this.type=type;
            this.name=name;
        }
        sound(){
            return 'Cat Sound Meow';

        }
        static numlegs(){
            return 'Cat is having 4 Legs';

        }
    }

     let cat=new Animal('Pet','Cat');   // Creating Instance of a Class
    // console.log(cat.name);
    // console.log(cat.type);
    console.log(cat.sound());

    console.log(Animal.numlegs());  // For calling static Function's we do not need to make the instance of Class.


