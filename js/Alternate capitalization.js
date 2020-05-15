


function capitalize(s){
    let lyginis = [];
    let nelyginis = [];
    let bendras = [];
    for (var i in s){
      if (i % 2 === 0){
        lyginis.push(s[i].toUpperCase())
      } else {
        lyginis.push(s[i].toLowerCase());
      }
      bendrasLyginis = lyginis.join('');
    };
    for (var i in s){
      if (i % 2 != 0){
        nelyginis.push(s[i].toUpperCase())
      } else {
        nelyginis.push(s[i].toLowerCase());
      }
      bendrasNelyginis = nelyginis.join('');
    };
    bendras.push(bendrasLyginis, bendrasNelyginis);
    return bendras;
  };


  console.log(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
  