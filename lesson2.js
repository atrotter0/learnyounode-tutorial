function sum(processArgs) {
  var sum = 0;
  for(i = 2; i < processArgs.length; i++) {
    sum += parseInt(processArgs[i]);
  }
  return sum;
}

console.log(sum(process.argv));
