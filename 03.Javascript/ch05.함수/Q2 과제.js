        // 1. 만 나이 계산하기
            function calcAge(birth) {

                var date = new Date();
    
                var year = date.getFullYear();
    
                var month = (date.getMonth() + 1);
    
                var day = date.getDate();
    
                if (month < 10) month = '0' + month;
    
                if (day < 10) day = '0' + day;
    
                var monthDay = month + day;
    
                birth = birth.replace('-', '').replace('-', '');
    
                var birthdayy = birth.substr(0, 4);
    
                var birthdaymd = birth.substr(4, 4);
    
                var age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
    
                return age;
        } 

            // 2.백준도장 31090
            // 백준 온라인 저지의 송년대회 Good Bye, BOJ 2023!의 개최일은 2023년 12월 31일이다.
            // 키파는 대회가 개최된다는 사실이 기뻐 2023과 2024를 뚫어져라 보다가 무언가 특별하다는 사실을 깨달았다.
            // 내년의 연도인 2024가 올해 연도의 끝 두 자리인 23으로 나누어 떨어진다! 다음에도 이런 연도가 오려면 6년 뒤인 2029/2030년이 되어야 한다.
            // 양의 정수 N이 주어진다. N년과 N년의 +1이 조건에 맞는 프로그램을 작성해라.

            function isDivisible(year){
                if((year+1) % (year-2000) == 0)
                console.log(year, 'bye');
                else
                console.log(year, 'good')
        }
            for(let i = 2023; i <=2040; i++)
                                isDivisible(i);

                                

            // 3.어례이를 매개변수로 받아서 합의 제곱과 제곱의 합의 차이를 구하는 함수를 만들고,
            // [24,67,45,97,43]의 결과를 출력하세요.

            var arr = [24, 67, 45, 97, 43];

            var result = arr.reduce((acc, element, i, array) => {
                return acc * element;
              });
              
              console.log(result);


        
            
       


        


      


                



            

            
