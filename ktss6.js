let string = "Quý, Nam, Lan, Hùng, Nam";
 let nameArray=string.split(", ");
 console.log(nameArray);
 nameArray.reverse();

 if(nameArray.includes("Lan")){
    console.log("Tên Lan tồn tại trong mảng");
 }else{
     console.log("Tên Lan không tồn tại trong mảng");
 }

 let index=nameArray.indexOf("Nam");
 console.log("Vi tri Nam xuat hien dau tien la",index);
 

 let numbers=[100,200,300,400];
let total=0;
 for(let i = 0 ; i < numbers.length ; i++){
    if(i % 2 ==0){
        total = total + numbers[i];
    }
 }
 console.log("tổng các phần tử trong mảng vị trí index chẵn",total);
 
 for(let index in numbers){
    console.log(index);
 }
 for(let elements of numbers){
    console.log(elements);
    
 }