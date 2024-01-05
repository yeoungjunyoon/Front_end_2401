    // 사물을 속성 :속성값 들로 객체화
    //      - 동작  - method(객체안에서 사용되는 함수)

    let obj = {
        // 속성(atteribute)
        name : '사과',
        price : 1000,

        // 메소드(method)
        print: function() {
            console.log(`${this.name})의 가격은 $(this.prize)원 입니다.`);
    }
}

console.log(obj.name, obj.prize);
obj.print();