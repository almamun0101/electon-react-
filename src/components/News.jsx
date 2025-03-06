import Dots from "./Dots";
import Product from "./Product";

let blog1 = "./Images/blog1.png";
let blog2 = "./Images/blog2.png";

function News() {
  return (
    <>
      <div className="container">
        <div className="px-5 py-10 flex items-center justify-between text-pri-500">
          <h2 className="font-bold text-3xl ">Latest News</h2>
          <button>View All</button>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <CardNews blog={blog1} />
          <CardNews blog={blog2} />
        </div>
      </div>
      <div class="flex justify-center py-10">
        <div class="py-5 px-15 flex items-center gap-5 text-center">
          <Dots />
          <Dots />
          <Dots />
          <Dots />
          <Dots />
        </div>
      </div>
    </>
  );
}
function CardNews({ blog }) {
  return (
    <>
      <div className="border border-ass-500 px-4 py-7 rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-4">
          <img src={blog} alt={blog} />
          <div className="px-5 text-pri-500">
            <h3 className="p-1 border-2 inline-block font-medium border-ass-500 rounded-2xl">
              22,Oct ,2021
            </h3>
            <h2 className="text-3xl font-medium py-2">
              Who avoids a pain that produces?
            </h2>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </p>

            <h4 className="py-5">By specing Tech</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
