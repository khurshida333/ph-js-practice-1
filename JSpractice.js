//(1).ans:------------------------------------------------------------------------------------------------------------------------------------------>
var result = 76;

if(result < 33){  
}
else if(result >=33 && result <= 40 ){
    console.log("Your grade is D ");
}
else if(result >=41 && result <= 50 ){
    console.log("Your grade is C ");
}
else if(result >=51 && result <= 60 ){
    console.log("Your grade is B ");
}
else if(result >=61 && result <= 70 ){
    console.log("Your grade is A- ");
}
else if(result >=71 && result <= 80 ){
    console.log("Your grade is A ");
}
else if(result >=81 && result <= 100 ){
    console.log("Your grade is A+");
}
else{
    console.log("Invalid");
}
//(2).ans:check if the input number is even or odd ----------------------------------------------------------------------------------------------------->
const is_even_or_odd=(number)=>{
   if(!isNaN(number)){
        if(number % 2==0){
           console.log("This number is EVEN");
        }
        else{
           console.log("This number is ODD");
        }
   }
   else{
      console.log("invalid number");
   }
}

const number = 6;

is_even_or_odd(number);

//(3).ans: srt array in js------------------------------------------------------------------------------------------->
//way-1: using .sort function--->
const numbers = [1,2,6,3,11,16,17,4,5,12,14,15,9,7,13,8,18,19,20,10];

const sorted_nums = numbers.sort((a,b)=>a-b);

console.log(sorted_nums);

//way-2:using bubble sort-->

const sort_arr_asc=(array)=>{
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }

    }
    return array;
}

const numbers = [1,2,6,3,11,16,17,4,5,12,14,15,9,7,13,8,18,19,20,10];

const sorted_numbers = sort_arr_asc(numbers);

console.log(sorted_numbers);

//(4).ans: chech if given year is leap year------------------------------------------------------------------------------------------------------------------------------->

const leap_year_calc=(y)=>{
   if(y%400==0 || y%4==0){
       console.log("leap year!!");
   }
   else{
     console.log("Not a leap year.");
   }
}

const year1 = 2004;
const year2 = 2007;

is_leap_year = leap_year_calc(year2);

//(5).ans: array of the numbers divisible by 3 and 5 in range of 1-50------------------------------------------------------------------------------------------------------------------------>
 const result_array = [];

 for(let i=1 ;i<51;i++){
      const num = i;
    if(num%3==0 && num%5==0){
        result_array.push(num);
    }
 }

 console.log(result_array);

 //(6).ans: longest name ---------------------------------------------------------------------------------------------------------------------->

 const find_longest_name=(array)=>{
    let LongestName = array[0];
    for(let i=0; i<array.length; i++){
        const name = array[i];
        if(name.length > LongestName.length){
            LongestName = name;
        }
    }
    return LongestName;
}

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const longest_name = find_longest_name(friends);
console.log(longest_name);

//(7).ans: remove duplicate numbers from an array ------------------------------------------------------------------------------------------------------------------>

const remove_duplicates=(array)=>{
    const NewArray1 = new Set(array);
    const NewArray2 = [...NewArray1];
    return NewArray2;
}

const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const nums = remove_duplicates(numbers);
console.log(nums);

//(8).ans: finding max in a array ------------------------------------------------------------------------------------------------------------------------------------------->

const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const max_num = Math.max(...numbers); //here (...) turning array elements into numbers
console.log(max_num);
 
//(9).ans:-------------------------------------------------------------------------------------------->

const saving_calc=(array)=>{
    const incomes = array[0];
    const livingCost = array[1];
    if (!Array.isArray(incomes) || typeof livingCost !== 'number') {
        return "Invalid input";
    }
    else{
        let total_income = 0;
        for(let i=0;i<incomes.length;i++){
            const num=incomes[i];
            if(num >= 3000){
                const percentage = 0.20*num;
                incomes[i] = num - percentage;
            }
        }
        for(let i=0;i<incomes.length;i++){
            const inc=incomes[i];
            total_income += inc;
        }
        const saving = total_income-livingCost;
        if( saving >= 0){
            return saving;
        }
        else{
            return "earn more";
        }
    }

} 

const income_cost = [100, [900, 2700, 3400]];

const savings = saving_calc(income_cost);

console.log(savings);