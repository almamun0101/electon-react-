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
                        <div className="flex  gap-3 py-5">
                            <div className="bg-[#E2F4FF] w-15 h-15 rounded-full flex justify-center items-center">
                                <h2 className="text-sec-500 text-2xl font-bold">57</h2>
                            </div>
                            <div className="bg-[#E2F4FF] w-15 h-15 rounded-full flex justify-center items-center">
                                <h2 className="text-sec-500 text-2xl font-bold">57</h2>
                            </div>
                            <div className="bg-[#E2F4FF] w-15 h-15 rounded-full flex justify-center items-center">
                                <h2 className="text-sec-500 text-2xl font-bold">57</h2>
                            </div>
                            <div className="bg-[#E2F4FF] w-15 h-15 rounded-full flex justify-center items-center">
                                <h2 className="text-sec-500 text-2xl font-bold">57</h2>
                            </div>
                        </div>
                     <div className="flex items-center gap-3">
                     <button className="bg-[#87BCD9] px-8 py-3 rounded-3xl font-bold flex items-center justify-between gap-5">Add To Chart
                        <div className="bg-sec-500 p-2 rounded-full">
                        <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                     </button>
                      <button className="bg-[#87BCD9] p-4 rounded-3xl font-bold">
                      <i class="fa-regular fa-eye"></i>
                      </button>
                      
                    </div>
                    <div class="py-5 px-15 flex items-center gap-5 text-center">
                    <div
                        class="border-2 border-pri-500 w-4 h-4 rounded-full bg-white hover:border-transparent hover:bg-sec-500">
                    </div>
                    <div
                        class="border-2 border-pri-500 w-4 h-4 rounded-full bg-white hover:border-transparent hover:bg-sec-500">
                    </div>
                   
                </div>
                        
                    </div>

                </div>
                <div class="w-1/2 flex flex-col gap-5">
                    <div class="p-10 border border-[#B6B6B6] rounded-2xl flex-1 ">
                       <div className="flex items-center">
                        <img src="./Images/gampad.png" alt="gamepad" />
                        <div className="text">
                            <div className="pt">
                            <h2 className="text-2xl text-pri-500 font-medium py-5">Play games</h2>
                            <h2 className="text-2xl">$11.70</h2>
                            <div class="flex py-5 gap-2 text-gray-400">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            </div>
                        </div>
                        </div> 
                    </div>
                    <div class="p-10 border border-[#B6B6B6] rounded-2xl flex-1">
                    <div className="flex items-center">
                        <img src="./Images/product2.png" alt="gamepad" />
                        <div className="text">
                            <div className="pt">
                            <h2 className="text-2xl text-pri-500 font-medium py-5">Play games</h2>
                            <h2 className="text-2xl">$11.70</h2>
                            <div class="flex py-5 gap-2 text-gray-400">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            </div>
                        </div>
                        </div>
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