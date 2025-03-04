let icon1 = "./Svg/icon1.svg"
let icon2 = "./Svg/icon2.png"
let icon3 = "./Svg/icon3.svg"

function Review(){
    return(
        <>
        <div className="container">
            <div className="bg-[#E2F4FF] p-5 rounded-3xl">
                <div className="grid grid-cols-3 gap-5">
                    <CardReview Review={{url:icon1 , title:"Free Delivery" , details:"On Order Above $50,00"}}/>
                    <CardReview Review={{url:icon2 , title:"Best Quality" , details:"Best Quality In Low Price"}}/>
                    <CardReview Review={{url:icon3 , title:"1 year Warranty " , details:"Available Warranty"}}/>
                </div>
            </div>


        </div>
        </>
    )
}

function CardReview({Review}) {
    return(
        <div className="flex items-center gap-10 px-10 py-2">
            <img src={Review.url} alt="" />
            <div className="">
                <h2 className="text-pri-500 font-bold text-2xl py-2">{Review.title}</h2>
                <h2 className="text-pri-500 font-medium">{Review.details}</h2>
            </div>
        </div>
    )
}
export default Review
