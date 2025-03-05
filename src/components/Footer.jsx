function Footer(){
    return(
        <>
        <div className="bg-[#E2F4FF] p-20">
        <div className="container text-pri-500">
            <div className="p-8 bg-white rounded-2xl">
                <div className="flex gap-5 items-center justify-between">
                    <h2 className="font-bold text-3xl">Subscribe newsletter</h2>
                    <input type="text" className="w-80 bg-sec-500 rounded-2xl px-10 py-5 placeholder:text-white placeholder:font-bold" placeholder="Email Address"/>
                    <div className="flex items-center gap-5">
                        <img src="./Images/headphone.png" alt="headphone" />
                        <h2 className="w-30">Call us 24/7 :
                        (+62) 0123 567 789</h2>
                    </div>
                 </div>
            </div>
            <div className="flex justify-between gap-10 py-20">
                <div className="">
                    <img src="./Images/logo2.png" alt="logo" />
                    <p className="w-50 py-6">64 st james boulevard
                    hoswick , ze2 7zj</p>
                </div>

                <div className="">
                    <h2 className="text-2xl font-medium">Find Product</h2>
                    <ul className="py-5">
                        <li className="list-disc py-2">Brownze arnold</li>
                        <li className="list-disc py-2">Chronograph blue</li>
                        <li className="list-disc py-2">Smart phones</li>
                        <li className="list-disc py-2">Automatic watch</li>
                        <li className="list-disc py-2">Hair straighteners</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-2xl font-medium">Get help</h2>
                    <ul className="py-5">
                        <li className="list-disc py-2">About us</li>
                        <li className="list-disc py-2">Contact us</li>
                        <li className="list-disc py-2">Return policy</li>
                        <li className="list-disc py-2"> Privacy policy</li>
                        <li className="list-disc py-2">Payment policy</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-2xl font-medium">About us</h2>
                    <ul className="py-5">
                        <li className="list-disc py-2">News</li>
                        <li className="list-disc py-2">Service</li>
                        <li className="list-disc py-2">Our policy</li>
                        <li className="list-disc py-2">Custmer care</li>
                        <li className="list-disc py-2">Faq’s</li>
                    </ul>
                </div>

            </div>

        </div>
        </div>
        </>

    )
}
export default Footer