// import img1 from './Images/item1.png'
let img1 = "./Images/item1.png"
let img2 = "./Images/item2.png"

function Sldieshow(){
    return(
        <>
        <section id="slideshow">
            <div className="container">
                <div className="relative">
                    <button
                        className="absolute top-15 border-1 border-transparent rounded-full w-10 h-10 bg-[#EAEAEA] -left-5">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                        className="absolute top-15 border-1 border-transparent rounded-full w-10 h-10 bg-[#EAEAEA] -right-5">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <div className="grid lg:grid-cols-3 gap-5">
                    <Card product={{url:img1 ,name: "Laptop", quantity: "6 Item"}}/>
                    <Card product={{url:img2 ,name: "Laptop", quantity: "6 Item"}}/>
                    <Card product={{url:img2 ,name: "Laptop", quantity: "6 Item"}}/>
                    
             </div>
                </div>
            </div>

        </section>


        </>
    )
}

function Card({product}){
    return(
                <div className="border-1 border-pri-500 rounded-4xl py-5 px-5 flex items-center justify-around">
                    <img src={product.url} alt="speaker" />
                    <div className="text-pri-500 text-2xl">
                        <h2>{product.name}</h2>
                        <h2>{product.quantity}</h2>
                    </div>
                </div>
    )
}

export default Sldieshow