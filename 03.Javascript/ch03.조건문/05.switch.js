  //  다중 선택 - switch
  let score = Math.ceil(Math.random() * 60) + 40;
  let grade = '';

  switch(parseInt(score / 10)) {
    case 10:
    case 9:
        grade ='A';
        break;
    case 8:
        grade = 'B'; break;
    case 7:
        grade = 'C'; break;
    case 6:
        grade = 'D'; break;
    default:
        grade - 'F';
  }
  console.log(`점수: $(score), 학점: $(grade)`);

