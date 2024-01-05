    // 양의 정수 구하기
    let num = 12;
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
        divisors.push(i);
    }
    console.log(divisors);

    // 두 수의 공약수 구하기
    let num1 = 24, num2 = 60;
    let commindivisocrs =[];
    for (let i = 1; i <= Math.min(num1,num2); i++) {
        if (num % i == 0 && num2 % i == 0)
            commindivisocrs.push(i);
        
    }
    console.timeLog(`${num1},${num2}의 공약수는 ${commindivisocrs}`);
