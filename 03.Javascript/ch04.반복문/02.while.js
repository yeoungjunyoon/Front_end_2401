    // while 반복문
    let person = ['James', 27 , '남자', '프로그래머', 175.3];

    let i = 0;
    while (i < person.length) {
        console.log(person[1]);
        i++;
    }

    let sum = 0;
    while (sum <= 21) {
        let dice = Math.ceil(Math.random()*6);
        console.log(dice);
        sum += dice;
    }
    console.log(sum);
    