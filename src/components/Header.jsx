import Dots from "./Dots"

function Header(){
    function changePage(){
        alert(this.innerHTML)
    }
    return(
        <>
            <div className="header">
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
            </div>

            <div class="navbar bg-pri-500">
            <div class="container p-4 flex  items-center justify-between text-xs">
                <div class="flex  gap-20">
                   <img src="./Images/logo.png" alt="logo" />

                    <div class=" flex ">
                        <input type="search" className="border-1 bg-white rounded-l-lg"/>
                        <button class="bg-sec-500 rounded-r-lg px-5 ">Searh</button>
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


         <div class="bg-[#F4F4F4]">
            <div class="">
                <nav class=" container flex items-center justify-between">
                    <div class="">
                        <button class="border-1 border-transparent p-4 bg-sec-500 text-white ">Browse
                            Catagories</button>
                    </div>
                    <ul class="flex items-center gap-15">
                        <li><a href="">Home</a></li>
                        <li onClick={changePage}><a href="Catalog.html">Catalog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Pages</a></li>
                        <li><a href="">About us</a></li>
                    </ul>
                    <div class="">
                        <h2 class="font-bold">30 Days Free Return</h2>
                    </div>
                </nav>
            </div>
        </div>

        <div class="container flex justify-between items-center py-10">
         
            <div class="">
                <h1 class="text-pri-500 text-7xl font-bold w-20 py-5">
                    Canon Camera
                </h1>
                <div className="flex gap-5">
                    <button
                        class="border-1 border-sec-500 text-white bg-sec-500 font-medium rounded-2xl p-3 hover:border-pri-500 hover:bg-transparent hover:text-pri-500">Shop
                        Now</button>
                    <button
                        class="border-1 border-sec-500 text-white bg-sec-500 font-medium rounded-2xl p-3 hover:border-pri-500 hover:bg-transparent hover:text-pri-500">Read
                        More</button>

                </div>
                <div class="py-5 px-15 flex items-center gap-5">
                   <Dots/>
                   <Dots/>
                   <Dots/>
                </div>
            </div>

            
            <div class="py-10 relative">
                <img src="./Images/banner.png" alt="Camera_banner" />
                <div
                    class="bg-sec-500 w-35 h-35 rounded-full absolute bottom-15 -right-10 flex justify-center items-center">
                    <h2 class="text-white text-2xl">
                        Only $89
                    </h2>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        
        </>
    )
}
export default Header