function marioBuild(height) {
  for (let i = 0; i < height; i++) {
    let line = "";
    for (let j = 0; j < height; j++) {
      line += "";
    }
    for (let p = 0; p <= i; p++) {
      line += "#";
    }
    console.log(line);
  }
}

marioBuild(8);

/* 
  #
 ##
###


*/
