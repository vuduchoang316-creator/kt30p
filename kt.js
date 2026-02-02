let n = prompt("Nhập vào 1 số nguyên N");
        if(n%2==0){
            console.log(`Số ${n} là số chẵn`);
        }else{
            console.log(`số ${n} là số lẻ`);
            
        }
        if(n > 0){
            console.log(`số ${n} là số dương`);
            for(let i = 1 ; i <= n ; i++){
                console.log(`${i}`);
                
            }
            
        }else{
            console.log(`số ${n} là số âm`); 
            console.log("Giá trị n không hợp lệ để tạo dãy số");
            
        }

let total =0;    
for(let j = 1 ; j <= 50 ;j++){
    if(j % 3 ===0 && j % 5 !== 0){
        console.log("Fizz");
        total+= Number(j);
        
    }else if( j % 5 === 0 && j % 3 !== 0){
        console.log("Buzz");
        
    }else if(j % 3 === 0 && j % 5 ===0){
        console.log("FizzBuzz");
        
    }else{
        console.log(`${j}`);
    }
}

console.log(`Tổng tát cả các số in ra Fizz là : ${total}`);
