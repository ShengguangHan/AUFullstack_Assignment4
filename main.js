let num = 0;
for(let i = 1; i <= 9; i++){
  for(let j = 1; j <= 9; j++){
    num = i * j;
    if(j <= i) {
      document.write(j + "*" + i + "=" + num + "&nbsp;&nbsp;&nbsp;");
    }
    // document.write(j + "*" + i + "=" + num + "&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br>");
}



