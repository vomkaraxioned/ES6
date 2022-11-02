import newModule from './modules/package.js';
// string template
let a ="apple is good for health";
console.log(`doctor says ${a}`);

function printMsg(arr,msg) {
  console.log(`${msg} --by ${arr[0]}(${arr[1]})`);
}

printMsg `jack ${a} 2022`;

//restructuring object using enhanced object literals
const color = ["red","green","blue"];
const width = ["100%","80%"];
const msg = function (){
  console.log(this.color[0],this.width[0]);
}
const obj = {color,width,msg};
obj.msg();

//destructuring
let [c,d] = [100,500];
console.log(c,d); 

//destructuring using function
//rest parameter
function add(...args){
  let sum = 0,x;
  for ( x in args) {
    sum += args[x];
  }
  console.log(sum);
}

add(10,10,10,10,10,10);

const exponential = (pow,...nums)=>{
  console.log(this);
  for (x in nums) {
    console.log(nums[x]**pow);
  }
}

exponential(2,4,10,20,5,7,8,9);

const clickIt = ()=>{
  console.log(this);
};
const btn = document.querySelector(".btn");
btn.addEventListener("click",clickIt);

//promises

let myPromise = new Promise((addNumbers,errorMsg)=>{
  if(10>2) {
    addNumbers("numbers added");
  }else {
    errorMsg("error occured");
  }
});

 addNumbers = ()=> setTimeout(console.log("working"),2000);

 errorMsg = (msg)=> console.log(msg);

 success = (msg)=> console.log(msg);

 myPromise.then(
   (m)=>success(m),
   (m)=>errorMsg(m)
 );

newModule();

//generators
let arr = [10,20,30,40,50];
function * gen() {
  yield 1;
  yield* arr;
  yield 2;
}

const iterable = gen();
let x;
for ( x of iterable) {
  console.log(x);
}