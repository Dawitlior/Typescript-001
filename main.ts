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


21.

function getName(firstName1: string, lastName?: string): void {
  lastName ? console.log(firstName1 + lastName) : console.log(firstName1);
}
getName("Lior");


22.
function printToLog(fullName: string, email?: any): void {
  email ? console.log(fullName + email) : console.log(fullName);
}
printToLog("lior dawit");

23.

function getNamesAndPrint(ageCat: number, typeCat: string, catName?: string): void {
  catName ? console.log(catName + ageCat + typeCat) : console.log(ageCat + typeCat);
}
getNamesAndPrint(12, " street");

24.
function getSomeParaAndReturn(text: string, booleanArgu: boolean = false): string {
  if (booleanArgu === true) {
    return `Hello ${text}`;
  }
  else {
    return `Welcome${text}`;
  }
}
console.log(getSomeParaAndReturn("lior dawit"));

25.

function getSomeNamesAndReturn(firstName1: string, lastName1: string, missText: string = " miss "): string {
  return firstName1 + lastName1 + missText;
}
console.log(getSomeNamesAndReturn(" lior", " dawit"));

//NOT FINISH
26.
function printTheTextNumTimesAsArgument(someText: string, defaultNum: number = 1, textOpzional?: string): void {
  for (let i = 0; i < defaultNum; i++) {
    !textOpzional ? console.log(someText) : console.log(`${someText}${textOpzional}`);
  }
  printTheTextNumTimesAsArgument("king lior", 5);


}

27.
function getSortByAlphabet(...charctorsArray: string[]): string[] {
  return charctorsArray ? charctorsArray.sort() : [];
}
console.log(getSortByAlphabet("A", "H", "J", "E", "D"));

28.

function getSortByNumbers(...charctorArray: number[]): number[] {
  return charctorArray ? charctorArray.sort((a: number, b: number) => a - b) : []
}
console.log(getSortByNumbers(34, 5, 12, 33, 2, 7));

29.
function getSortArrayNumFromTheBigToSmall(...someCarcArr: number[]): number[] {
  return someCarcArr ? someCarcArr.sort((a: number, b: number) => b - a) : []
}
console.log(getSortArrayNumFromTheBigToSmall(33, 6, 78, 9, 367, 77));



function calac(num1?: number,): number {
  return num1 ? num1 + 5 : 0;
}
calac(6)//11

34.
class Car {
  company: string;
  typeCar: string;
  color: string;
  constructor(company: string, typeCar: string, color: string) {
    this.company = company;
    this.typeCar = typeCar;
    this.color = color;
  }
}
35.
class Elephant {
  hight: number;
  kindOf: string;
  age: number;
  country: string;
  constructor(hight: number, kindOf: string, age: number, country: string) {
    this.hight = hight;
    this.kindOf = kindOf;
    this.age = age;
    this.country = country;
  }
  returnNames() {
    return `${this.hight}${this.kindOf}${this.age}${this.country}`
  }
}
36.
class Pants {
  size: number;
  color: string;
  fabricType: string;
  hight: number;
  isExist: boolean;
  constructor(size: number, color: string, fabricType: string, hight: number, isExist: boolean) {
    this.size = size;
    this.color = color;
    this.fabricType = fabricType;
    this.hight = hight;
    this.isExist = isExist;
  }
  returnAllDetails() {
    return `Details:${this.size}${this.color}${this.fabricType}${this.hight}${this.isExist}`;
  }
  get anotherFunction() {
    return this.returnAllDetails
  }


}
let some1: Pants = new Pants(12, "blackk", "xcv", 33, false)
console.log(some1.anotherFunction)
37.
class Sportsman {
  fullName: string;
  birthDay: number;
  sportType: string;
  gender: string = "male";
  constructor(fullName: string, birthDay: number, sportType: string, gender?: string) {
    this.fullName = fullName;
    this.birthDay = birthDay;
    this.sportType = sportType;
    this.gender = gender ? this.gender : ""
  }
  someReturnFunction() {
    return `Details: ${this.fullName}${this.birthDay}${this.sportType}${this.gender}`
  }
}

38.
class FootBaller extends Sportsman {
  team: string;
  isPlayInNationalTeam: boolean;
  constructor(fullName: string, birthDay: number, sportType: string, gender: string, team: string, isPlayInNationalTeam: boolean) {
    super(fullName, birthDay, sportType, gender)
    this.team = team;
    this.isPlayInNationalTeam = isPlayInNationalTeam;
  }
  returnAllDetails() {
    return `Details:${super.someReturnFunction}${this.team}${this.isPlayInNationalTeam}`
  }
}

39.
class User {
  fullName: string;
  age: number;
  password: string;
  private isConnect: boolean = false;
  constructor(fullName: string, age: number, password: string, isConnect: boolean) {
    this.fullName = fullName;
    this.age = age;
    this.password = password;
    this.isConnect = isConnect;
  }
  get getConnectUser() {
    return this.isConnect
  }
  set setConnected(connected: boolean) {
    this.isConnect = connected;
  }

  static getSomeObjectsAndPrint(olderOrYounger: string, ...numsOfUsers: User[]) {
    if (olderOrYounger === "older") {
      return numsOfUsers.sort((a: User, b: User) => b.age - a.age)[0];
    }
    else if (olderOrYounger === "young") {
      return numsOfUsers.sort((a: User, b: User) => a.age - b.age)[0];
    }
    return;
  }
}
let user33 = new User("lior dawit", 34, "lllllll", false);
let user44 = new User("cristiano ronaldo", 11, "aaaaaaa", true);
console.log(User.getSomeObjectsAndPrint("young", user33, user44))

40.
class Student extends User {
  firstName: string;
  lastName: string;
  birthOfData: string;
  email: string;
  constructor(firstName: string, lastName: string, birthOfData: string, email: string, age: number, password: string) {
    super(`${firstName} ${lastName}`, age, password)
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthOfData = birthOfData;
    this.email = `${this.firstName}${this.lastName}@walla.com`;
  }

  printAllDetails() {
    return `Details: ${this.firstName},${this.lastName},${this.birthOfData},${this.email},${this.password}`
  }

  returnIfConnect() {
    if (super.getConnectUser) {
      return "green";
    }
    return "red";
  }
}
let some3 = new Student("lior", "awit", "28/03/1997", "dawitlior777@gmail.com", 27, "ssdsdds")
let some4 = new Student("david", "dwit", "28/03/1997", "dawitlior777@gmail.com", 21, "ssdsdds")
let some5 = new Student("ali", "dawi", "28/03/1997", "dawitlior777@gmail.com", 22, "ssdsdds")
let some6 = new Student("naor", "dait", "28/03/1997", "dawitlior777@gmail.com", 24, "ssdsdds")

console.log(Student.getSomeObjectsAndPrint("older", some3, some4, some5, some6));
41.
class Room {
  wight: number;
  higth: number;
  area: number;
  private isWindow: boolean = false;
  constructor(wight: number, higth: number, area: number) {
    this.wight = wight;
    this.higth = higth;
    this.area = wight * higth;
  }
  getDetails(): string {
    return `Details:${this.area} There is window?${this.isWindow}`;
  }
  get isHaveWindow(): boolean {
    return this.isWindow;
  }
  set setIsWindow(someBool: boolean) {
    this.isWindow = someBool
  }
  static returnTheBiggestRoom(bigOrSmall: string, ...roomsObj: Room[]) {
    if (bigOrSmall === "small") {
      return roomsObj.sort((a: Room, b: Room) => a.area - b.area)[0]
    }
    else if (bigOrSmall === "big") {
      return roomsObj.sort((a: Room, b: Room) => b.area - a.area)[0]
    }
    return;
  }
}

let show11 = new Room(10, 20, 200)
let show22 = new Room(180, 200, 36000)
console.log(Room.returnTheBiggestRoom("small", show11, show22))

42.
class Kitchen extends Room {
  numberClosets: number;
  constructor(wight: number, higth: number, area: number, numberClosets: number) {
    super(wight, higth, area);
    this.numberClosets = numberClosets;
  }
  printDetails(): string {
    return `${super.getDetails()}number of closets:${this.numberClosets}`
  }
  printIfHasWindow() {
    return this.setIsWindow ? "have window" : "no have window"
  }
}

let some11: Kitchen = new Kitchen(12, 44, 2, 2);
let some22: Kitchen = new Kitchen(33, 2, 3, 3);
let some33: Kitchen = new Kitchen(12, 1, 3, 4);
let some44: Kitchen = new Kitchen(25, 1, 3, 5);

console.log(Room.returnTheBiggestRoom("small", some11, some22, some33, some44))



43.

class Salon extends Room {
  setsNumber: number;
  airFlow: string;
  constructor(wight: number, hight: number, area: number, isWindow: boolean, setsNumber: number, airFlow: string) {
    super(wight, hight, area, isWindow)
    this.setsNumber = setsNumber;
    this.airFlow = airFlow;
  }
  returnAllDetailsSalon() {
    console.log(`${super.getDetails} Number Of Sets:${this.setsNumber}Air-Flow${this.airFlow}`);
  }
  returnIfHadAirFlow(): string {
    return this.isHaveWindow ? `windows air flow${this.airFlow}` : `no have windows poor family`
  }
}


44.
class Product {
  wight: number;
  hight: number;
  kg: number;
  price: number;
  private isHaveInvations: boolean = false;
  constructor(wight: number, hight: number, kg: number, price: number) {
    this.wight = wight;
    this.hight = hight;
    this.kg = kg;
    this.price = price;
  }

  getDetails() {
    return `Details:${this.wight}${this.hight}${this.kg}${this.price}`;
  }

  get getIsHaveInvations(): boolean {
    return this.isHaveInvations;
  }
  set setIsHaveInvations(someBool: boolean) {
    this.isHaveInvations = someBool;
  }

  static returnExpansiveOrChip(expensiveOrChip: string = "expansive", ...prodoctObj: Product[]) {
    if (expensiveOrChip === "expansive") {
      prodoctObj.sort((a: Product, b: Product) => b.price - a.price)[0];
    }
    else if (expensiveOrChip === "chip") {
      prodoctObj.sort((a: Product, b: Product) => b.price - a.price)[0];
    }
  }
}

45.
class Computer extends Product {
  energyPower: number;
  constructor(wight: number, hight: number, kg: number, price: number, energyPower: number) {
    super(wight, hight, kg, price);
    this.energyPower = energyPower;
  }
  getComputerDetails() {
    return `Details:${this.getDetails()} Energy-Power:${this.energyPower}`;
  }
  getMessegeInvation() {
    return this.getIsHaveInvations ? "invaited" : "need to complite invation";
  }
}

let computer1: Computer = new Computer(34, 55, 87, 1400, 10);
let computer2: Computer = new Computer(33, 54, 80, 1250, 21);
let computer3: Computer = new Computer(35, 56, 85, 1700, 30);
let computer4: Computer = new Computer(31, 59, 90, 2390, 60);
Computer.returnExpansiveOrChip("expensive", computer1, computer2, computer3, computer4);

46.
class ComputerScreen extends Product {
  numberInvations: number;
  resolution: number;
  constructor(wight: number, hight: number, kg: number, price: number, numberInvations: number, resolution: number) {
    super(wight, hight, kg, price);
    this.numberInvations = numberInvations;
    this.resolution = resolution;
  }
  printAllDetails() {
    return `Details:${this.getDetails} Number Of Invations:${this.numberInvations} Resolution :${this.resolution}`;
  }

  getMessegeAndPrintByInva() {
    return this.getIsHaveInvations ? `${this.numberInvations} is alredy send to the coustimer` : "U need to oeder";
  }
}

47.
class Factory {
  name: string;
  city: string;
  numberEmpoliyes: number;
  isHaveConfirmation: boolean;
  private isHaveOtomation: boolean = true;
  constructor(name: string, city: string, numberEmpoliyes: number, isHaveConfirmation: boolean) {
    this.name = name;
    this.city = city;
    this.numberEmpoliyes = numberEmpoliyes;
    this.isHaveConfirmation = isHaveConfirmation;
  }
  printDetails() {
    return `Details:Name:${this.name}City:${this.city}Number-Empoliyes:${this.numberEmpoliyes}Is Have Confirmation:${this.isHaveConfirmation}`;
  }
  get getIsHaveOtomation(): boolean {
    return this.isHaveOtomation;
  }
  set setIsHaveOtomation(someBoolean: boolean) {
    this.isHaveOtomation = someBoolean;
  }

  static returnWhereHadMaxOfEmpoliyes(moreOrLess: string = "going up", ...factoryObj: Factory[]) {
    if (moreOrLess === "goingup") {
      return factoryObj.sort((a: Factory, b: Factory) => b.numberEmpoliyes - a.numberEmpoliyes)[0];
    }
    else if (moreOrLess === "goingdown") {
      return factoryObj.sort((a: Factory, b: Factory) => a.numberEmpoliyes - b.numberEmpoliyes)[0];
    }
    return "first operator must be : goingup or goingdown";
  }
}
let somer1: Factory = new Factory("coca-cola", "rishon-ltzion", 60, true);
let somer2: Factory = new Factory("some1", "eilat", 40, false);
let somer3: Factory = new Factory("some3", "kiryat-malachi", 10, false);
// console.log(Factory.returnWhereHadMaxOfEmpoliyes("goingdown",somer1,somer2,somer3));

48.
class Warehouse extends Factory {
  numberOfTelevition: number;
  constructor(name: string, city: string, numberEmpoliyes: number, isHaveConfirmation: boolean, numberOfTelevition: number) {
    super(name, city, numberEmpoliyes, isHaveConfirmation);
    this.numberOfTelevition = numberOfTelevition;
  }
  printTheDetails() {
    return `Details:${this.printDetails()} Number Of Televition:${this.numberOfTelevition}`;
  }

  getConfirmMessege() {
    return this.getIsHaveOtomation ? "Approved" : "An application has been submitted";
  }
}

let b123: Warehouse = new Warehouse("amit", "kiryat-malachi", 53, false, 7);
let b124: Warehouse = new Warehouse("amal", "kiryat-malachi", 48, true, 4);
let b125: Warehouse = new Warehouse("school1", "beer-sheva", 43, true, 11);
let b126: Warehouse = new Warehouse("eilat23", "Tel-aviv", 60, true, 67);
console.log(Warehouse.returnWhereHadMaxOfEmpoliyes("goingdown", b123, b124, b125, b126));

49.
class Sandwich extends Product {
  name: string;
  city: string;
  numberEmpoliyes: number;
  isHaveConfirm: boolean;
  isThereKosherFood: boolean;
  constructor(wight: number, hight: number, kg: number, price: number, name: string, city: string, numberEmpoliyes: number, isHaveConfirm: boolean, isThereKosherFood: boolean) {
    super(wight, hight, kg, price);
    this.name = name;
    this.city = city;
    this.numberEmpoliyes = numberEmpoliyes;
    this.isHaveConfirm = isHaveConfirm;
    this.isThereKosherFood = isThereKosherFood;
  }
  printTheDetails() {
    return `Details:${this.getDetails()}Name:${this.name}City:${this.city}Number of Empoliyes${this.numberEmpoliyes}Confirm:${this.isHaveConfirm}Is Have a Kosher Meels?${this.isThereKosherFood}`;
  }

  returnIfHaveOtomation() {
    return this.getIsHaveInvations ? `Has Otomation + ${this.numberEmpoliyes}` : "No otomation";
  }

}