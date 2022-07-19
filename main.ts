let number1:number=6;
let booli:boolean=false;
let colorsArray:["blue","green","black"];


let myInput:any=document.getElementById("put1");

function printNumberToConsole(myInput:number):void{
if(myInput<10){
    console.log("greater then 10");
}
else{
    console.log("less then 10");
}
}
//NOT FINISH
let input2:any=document.getElementById("put2");
function printNumbersToConsole(input2:string):void{
    if(input2>10){
        console.log("greater then 10");
    }

}

4.
function getNumbersAndReturn(num1:number,num2:number):number{
return Math.min(num1,num2);
}
console.log(getNumbersAndReturn(12.7,6.2))



5.
function getSomeNumbersAndReturn(num11:number,num22:number,num33:number):number{
  return Math.min(num11,num22,num33);
}
console.log(getSomeNumbersAndReturn(3.3,2.4,1.2))

6.
function getNumsAndReturn(num111:number,num222:number,num333:number):number{
  let sum:number=0
  sum+=num111+num222+num333;
  return sum/3;
}
console.log(getNumsAndReturn(3,4,2))
7.
function getFourNumsAndReturnSum(number1:number,number2:number,number3:number,number4:number):number{
  return number1+number2+number3+number4;
}
console.log(getFourNumsAndReturnSum(2.2,1.4,6.5,7.7));

8.
let numsArray:number[]=[7,2,5,6]
function getArrayNumberAndReturnMin():number{
  let someNumber:number = numsArray[0];
  numsArray.forEach(element=> {
  if(element<someNumber){
    someNumber=element
  }  
});
return someNumber;
}
getArrayNumberAndReturnMin()

9.
let numsArray1:number[]=[4,2,8,6];
function getSomeNumsAndReturn():number{
  let x:number = numsArray1[0]
  numsArray1.forEach(item => {
    x+=item;
  });
  return x/4;
}
10.
function getArrayNumAndReturn(someNumArr:number[]):number{
  let rndNum:number=0;
someNumArr.forEach(item=>{
rndNum+=item
})
return rndNum;
}
getArrayNumAndReturn([3,4,2,1]);

11.
function returnNameFromArray(namesArray:string[]):string{
  return namesArray[1];
}
returnNameFromArray(["lior","eldad","abynech","daniel"]);

12.
function returnIfStartWithSomeKey(nameArray:string[]):string{
    let soneTextArr:string[]=[];
nameArray.forEach((item)=>{
  if(item[0]==="A"){
    soneTextArr+=item
  }
})
  return soneTextArr;
}
console.log(returnIfStartWithSomeKey(["Lior","David","Yos","Avi"]));

13.

function checksIfArrayHasModuloNumber(someNumsArray:number[]):number[]{
  let rndNum:number[]=[];
  someNumsArray.forEach((item)=>{
    if(item%2==0){
      alert(true);
      rndNum.push(item);
    }
  })
  return rndNum;
}
checksIfArrayHasModuloNumber([4.2,2.5,6.6,7.1]);


14.

function getSomeDate(someTextDate:string):string{
let rndDate:any=new Date();
return rndDate=someTextDate;
}
console.log(getSomeDate("12:30:45 4-4-2004"));


15.
function getTextNumTimes(text : string, num : number):void{
    for(let i=0; i<num+1; i++){
        console.log(i,text)
    }
}
getTextNumTimes("lior",5);

16.
function getNameAndAgeAndPrint(name:string,age:number):string{
  if(age<18){
    return `welcome ${name}`;
  }
  else{
    return `No entry ${name}`;
  }
}
17.
function getFirstNameAndLastName(fName:string,lName:string):any{
  let letter:string="A"
if(fName[0]== letter && lName[0]==letter){
return letter;
}
else{
return 0
}
}
getFirstNameAndLastName("Avi","Ali");


18.
function getArrayAndCheckArray(myArray:string[]):string{
switch(myArray.length){
  case 0:
  return "no information";
  case 1:
  return "one item"
  case 2:
  return "couple items";
  default:
  return "many items";
}
}
console.log(getArrayAndCheckArray(["gorilla","glue","lemon-hize"]));

19.
function getNumsArrayAndText(somenumsArr:number[],rndText:string):number{
switch(rndText){
  case "revers":
  return somenumsArr.reverse();
  case "ascending order":
  return somenumsArr.sort((a,b)=> {b-a});
  case "descending":
  return somenumsArr.sort((a,b)=> {a-b});
  default:
  return somenumsArr;
  case "string":
  return somenumsArr:string[]
}
}
console.log(getNumsArrayAndText([3,5,7,9],"revers"));

20.
function getRandomArray(randomArr:any[]):any{
   let stringArray: string[] = [];
    let numberArray: number[] = [];
    let booleanArray: boolean[] = [];
    randomArr.forEach((item)=>{
      switch(typeof(item)){
        case "number":
          numberArray.push(item);
          break;
          case "string":
            stringArray.push(item);
            break;
            case "boolean":
              booleanArray.push(item);
              break;
              default:
                console.log("hello nothing");         
      }
    });
    return randomArr;
}
getRandomArray([5,true,"black"]);