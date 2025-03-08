import Dots from "./Dots";

let images = ["./Images/product1.png","./Images/product2.png","./Images/product3.png","./Images/product4.png"]

function Product(){
    return(
        <>
         <section id="product" class="container">
            <div class="py-15 flex flex-col lg:flex-row md:flex-row  gap-6 justify-between">
                <div class="font-bold text-3xl">
                    <h2>Popular products</h2>
                </div>
                <div class="flex items-center gap-2">
                    <div class="border-2 p-2 rounded-2xl text-pri-500 border-pri-500 px-6 ">
                        <h3>Cameras</h3>
                    </div>
                    <div class="border-2 p-2 rounded-2xl text-pri-500 border-pri-500 px-6 ">
                        <h3>Laptops</h3>
                    </div>
                    <div class="border-2 p-2 rounded-2xl text-pri-500 border-pri-500 px-6 ">
                        <h3>Tablets</h3>
                    </div>
                    <div class="border-2 p-2 rounded-2xl text-pri-500 border-pri-500 px-6 ">
                        <h3>Mouse</h3>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2  lg:grid-cols-4 gap-5">
                <Card item={{url:images[0], name:"Camera",price:"11.67"}}/>
                <Card item={{url:images[1], name:"Laptop",price:"11.67"}}/>
                <Card item={{url:images[2], name:"Headphone",price:"11.67"}}/>
                <Card item={{url:images[3], name:"Gamepad",price:"11.67"}}/>
                <Card item={{url:images[3], name:"Camera",price:"11.67"}}/>
                <Card item={{url:images[2], name:"Camera",price:"11.67"}}/>
                <Card item={{url:images[0], name:"Camera",price:"11.67"}}/>
                <Card item={{url:images[2], name:"Camera",price:"11.67"}}/>
                
            </div>
            <div class="flex justify-center py-10">
                <div class="py-5 px-15 flex items-center gap-5 text-center">
                  <Dots/>
                  <Dots/>
                  <Dots/>
                </div>
            </div>
        </section>


        </>
    )
}
function Card({item}){
    return (
        <div class="relative border-2 border-pri-500 rounded-3xl py-5 px-10 text-pri-500">
                    <div
                        class="absolute right-5 border-transparent bg-[#87BCD9] border-1 rounded-full w-7 h-7 flex items-center justify-center">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    {/* <img src="./Images/camera 1.png" alt="product"> */}
                    <img src={item.url} alt="" />
                    <h2 class="py-1 text-2xl font-bold">{item.name}</h2>
                    <h2 class="py-1 ">{item.price}</h2>
                    <div class="pt-5">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>

    );

}
export default Product;