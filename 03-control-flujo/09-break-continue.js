let i = 0;

while (i < 6) {
  i++;
  if(i === 2){
    continue;
  }
  if(i === 4){
    break;
  }
  console.log(i);
}

 /*
 CONTINUE y BREAK se puede usar para:
 - for
 - for in
 - for of
 - do while
 */