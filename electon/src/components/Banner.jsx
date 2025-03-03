let bannerImg = "./Images/banner2.png"
function Banner(){
    return(
        <>
          <div className="container">
            <div className="relative">
                <img src={bannerImg} alt="Banner2" />
                <div className="absolute text-center  top-20 right-10 text-white">
                    <Btn name="New Laptop"/>
                    <h2 className="text-6xl font-bold py-6 text-[#2E8FC5]">Sale up to 50% off</h2>
                    <h4 className="py-6">12 inch hd display</h4>
                    <Btn name="Shop Now"/>
                </div>
            </div>

            <div class="flex w-full py-20 gap-5">
                <div class="w-2/3 border border-[#B6B6B6] rounded-2xl p-10 flex">
                    <img src="./Images/speaker.png" alt="" />
                    <div className="pt-5">
                        <h2 className="text-2xl text-pri-500 font-medium py-5">JBL bar 2.1 deep Bass</h2>
                        <h2 className="text-2xl">$11.70</h2>
                        <div class="flex py-5 gap-2 text-gray-400">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="">
                            
                        </div>
                        
                    </div>

                </div>
                <div class="w-1/2 flex flex-col gap-5">
                    <div class="p-10 border border-[#B6B6B6] rounded-2xl flex-1">

                    </div>
                    <div class="p-10 border border-[#B6B6B6] rounded-2xl flex-1">

                    </div>
                </div>
            </div>





          </div>
        </>
    );
}
function Btn({name}){
    return(
        <>
        <button className="bg-sec-500 rounded-3xl px-10 py-5 hover:bg-white hover:text-pri-500">
            {name}
        </button>
        </>
    )
}
export default Banner;