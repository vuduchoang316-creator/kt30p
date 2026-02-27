let products = [
    {id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
    {id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
    {id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
    {id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true },
    {id: "P05", name: "Tai nghe Sony ƯH-1000XM5", price: 350, category: "Phụ kiện", inStock: true },
];


const findProductById = (newId) => {
    products.forEach((product) => {
        const result = products.find((product) => {
         return product.id === newId;
        });

        if(result){
            console.log(result);
        }else{
            console.log("Không tìm thấy");   
        }
}
)};
findProductById("P03");

const ExProduct = () => {
    const result = products.every((product) => {
        return product.price > 0;
    });
    if(result){
        console.log("Dữ liệu bảng giá hợp lệ");
    }else{
        console.log("Phát hiện sản phẩm chưa cập nhật giá"); 
    }
};
ExProduct();

const catalogDisplay = () => {
    const result = products.map((product) => {
        let status;
        if(product.inStock === true){
            status = "Còn Hàng";
        }else {
            status = "Hết Hàng";
        }
        return `[${product.name} - Giá ${product.price} | Trạng thái:${status}]\n`
    })
    console.log(result);
    
}
catalogDisplay();