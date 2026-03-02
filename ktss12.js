let products = [
    {id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
    {id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
    {id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
    {id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true },
    {id: "P05", name: "Tai nghe Sony UH-1000XM5", price: 350, category: "Phụ kiện", inStock: true },
];

const sortProduct = () => {
    const listNewProduct = products.filter((product) => {
        return product.inStock === true;
    });
    const listSortProduct = listNewProduct.sort((a,b) => {
        return b.price - a.price;
    });
    
    const result = listSortProduct.map((product,index) => {
        return `Đối tượng : ${product.name} / nằm ở vị trí index : ${index}`
    });
    
    console.log(result.join("\n"));
};
sortProduct();

const InfoProduct = () => {
    const listProduct = products.filter((product) => {
        return product.category === "Phụ kiện";
    });
    const arrListProduct = listProduct.map((product) => {
        return `${product.name}`
    });
    console.log(arrListProduct);
    
}
InfoProduct();

const totalPriceProduct = () => {
    const listProductIsTrue = products.filter((product) => {
        return product.inStock === true;
    });
    const totalPrice = listProductIsTrue.reduce((acc , cur) => {
        return acc + cur.price;
    },0);
    console.log(`Tồng giá trị tiền mặt của các sản phẩm trong kho là: ${totalPrice}`);
    
};
totalPriceProduct();