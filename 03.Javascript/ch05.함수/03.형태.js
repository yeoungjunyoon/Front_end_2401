    // 함수 형태
    // 1. 매개변수(인수)와 반환값이 있는 함수
    function sum(form,to) {
        let result = 0;
        for (let i = form; i <= to; i++)
        return result;
    }
    console.log(sum(1, 100));

    // 2. 인수 없이 반환값이 있는 함수(producer)
    function dice () {
        return Math.ceil(Math.random() * 6);
    }
    
    console.log(dice(), dice(), dice() );

    // 3. 인수만 있고 반환값이 없는 함수 (consumer)
    function print(a) {
        console.log(a);
    }
    print(`반환값이 없는 함수`);

    // 4. 인수도 없고 반환값도 없는 함수
    var globalEval = 0;
    function increment () {
        globalVar++;
    }
    increment();
    print (globalVar);


    // 매개변수 (인수)
    // 매개변수값을 입력하지 않고 호출하는 경우
    function printFruit(name, count) {
        console.log(`${name} 과일이 %{count}개 있습니다.`)
    }
    printFruit('사과, 10');
    printFruit('귤');

    function printFruit1(name, count) {
        if (typeof(count)== 'undefined')
        count = 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
    }
    printFruit1(`배`);

    function printFruit2(name, count) {
        if (typeof(count)== 'undefined')
        count = 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
    }
    printFruit1(`오렌지`);

    // count 값을 입력하지 않으면, 디폴트 값으로 0을 할당
    function printFruit(name, count) {
        if (typeof(count)== 'undefined')
        count = 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
    }
    printFruit1(`사과`, 10);
    printFruit1(`귤`);

    

    



