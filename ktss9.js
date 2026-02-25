let orders = ["Đơn hàng A","Đơn hàng B","Đơn hàng C","Đơn hàng D","Đơn hàng E"];
let revenues = [1500,2800,1200,-500,3200];
let listOrder = [];
let arr;
for (let i = 0 ; i < orders.length ; i++){
     arr= `${orders[i]}-${revenues[i]}`;
     listOrder.push(arr);
}
const orderReports = listOrder.map((item) => {
    return `${item.split("-")[0]} mang về ${item.split("-")[1]} USD`
});
console.log(orderReports);
const total = revenues.filter(item => item > 0);
const totalpass = total.reduce((arr,cur) =>{
    return arr += cur
});
console.log(totalpass);
