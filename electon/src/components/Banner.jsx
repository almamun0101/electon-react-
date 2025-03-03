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