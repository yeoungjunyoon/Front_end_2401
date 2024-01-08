        // 백준도장 BOJ 2023, 31090 문제

        function isDivisble(yaer) {
             let num = yaer % 100;
             if ((yaer +1) % num == 0) 
                 return 'Good';
             return 'Bad';         
        }

  for (let yaer = 2023; yaer <=2040; year++) {
        console.log(`${yaer}: ${isDivisble(yaer)}`);
  }