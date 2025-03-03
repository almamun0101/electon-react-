function Header(){
    return(
        <>
            <div className="container">
                <div className="flex justify-between py-5">
                <div className="text">
                    <h3>
                    Need help? Call us: (+98) 0234 456 789
                    </h3>
                </div>
                <div className="flex items-center gap-20">
                    <div className="flex items-center gap-5">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>Our Store</h3>
                    </div>
                    <div className="flex items-center gap-5">
                    <i className="fa-solid fa-truck-fast"></i>
                    <h3>Track your Order</h3>
                    </div>
                </div>
            </div>

            <div class="navbar bg-pri-500">
            <div class="container p-4 flex  items-center justify-between text-xs">
                <div class="flex  gap-20">
                   <img src="./Images/logo.png" alt="logo" />

                    <div class=" flex ">
                        <input type="search" className="border-1 bg-white rounded-l-lg"/>
                        <button class="bg-sec-500 rounded-r-lg p-2 ">Searh</button>
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="flex items-center text-white gap-3 font-light">
                        <i class="fa-solid fa-user"></i>
                        <h2>Sign In</h2>
                    </div>
                    <div class="flex items-center text-white gap-3 font-light">
                        <i class="fa-solid fa-user"></i>
                        <h2>Sign In</h2>
                    </div>
                    <div class="flex items-center text-white gap-3 font-light">
                        <i class="fa-solid fa-user"></i>
                        <h2>Cart</h2>
                    </div>
                </div>
            </div>
        </div>

  </div>
        
        
        
        
        
        
        
        </>
    )
}
export default Header