// string template
let a ="apple is good for health";
console.log(`doctor says ${a}`);

//tagged template
function printMsg(arr,msg) {
  console.log(`${msg} --by ${arr[0]}(${arr[1]})`);
}

printMsg `jack ${a} 2022`;

/* use backticks for interpolation */