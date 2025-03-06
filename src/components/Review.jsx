let icon1 = "./Svg/icon1.svg"
let icon2 = "./Svg/icon2.png"
let icon3 = "./Svg/icon3.svg"

let team1 = "./Images/team1.png"
let team2 = "./Images/team2.png"
let team3 = "./Images/team3.png"

let brand1 = "./Images/brand1.png"
let brand2 = "./Images/brand2.png"
let brand3 = "./Images/brand3.png"
let brand4 = "./Images/brand4.png"
let brand5 = "./Images/brand5.png"

function Review(){
    return(
        <>
        <div className="container">
            <div className="bg-[#E2F4FF] p-5 rounded-3xl">
                <div className="grid lg:grid-cols-3 gap-5">
                    <CardReview Review={{url:icon1 , title:"Free Delivery" , details:"On Order Above $50,00"}}/>
                    <CardReview Review={{url:icon2 , title:"Best Quality" , details:"Best Quality In Low Price"}}/>
                    <CardReview Review={{url:icon3 , title:"1 year Warranty " , details:"Available Warranty"}}/>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-5">
                <Team team={{url:team1, name:"Savannah nguyan"}}/>
                <Team team={{url:team2, name:"Estheryy"}}/>
                <Team team={{url:team3, name:"Esther Howard"}}/>
            </div>
            <div className="bg-[#E2F4FF] py-10 rounded-3xl">
                <div className="grid grid-cols-5 gap-5">

                    <img src={brand1} alt="brand1" />
                    <img src={brand2} alt="brand1" />
                    <img src={brand3} alt="brand1" />
                    <img src={brand4} alt="brand1" />
                    <img src={brand5} alt="brand1" />
                  
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

function Team({team}){
    return(
        <>
            <div className="border border-ass-500 mt-5 my-2 lg:my-20 p-10 rounded-3xl">
                <div className="flex items-center gap-8">
                    <div className="border-red-600 border-4 rounded-full inline-block p-2 border-dashed">
                        <img src={team.url} alt="" />
                    </div>
                    <div className="text-2xl font-medium text-pri-500">
                        <h2>{team.name}</h2>
                    </div>

                </div>
                <p className="p-5 bg-[#E2F4FF] rounded-2xl mt-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum consequuntur neque quod, quisquam consequatur nulla ipsa praesentium! Et, optio quisquam.
                </p>
            </div>
        </>

    )
}
export default Review
