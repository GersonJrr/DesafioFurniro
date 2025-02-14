export default function Filter() {
    return (
      <div className="w-full h-[100px] bg-bg-filter flex items-center justify-between px-4 sm:px-8 md:px-20 font-poppins">
        <div className="flex space-x-4 items-center">
            <button className="flex items-center space-x-2">
                <img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/filter.svg" alt="Filter" />
                <span>Filter</span>
            </button>
            <button><img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/grid4.svg" alt="Grid" /></button>
            <button><img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/list.svg" alt="List" /></button>
            <span><img src="https://mybucketttimage.s3.us-east-2.amazonaws.com/Line5.svg" alt="Line" /></span>
            <span>Showing 1–16 of 32 results</span>
        </div>
        <div className="flex items-center space-x-2 md:flex">
            <span>Show</span>
            <input type="text" className=" w-[55px] h-[50px] flex-shrink-0" />
            <span>Short by</span>
            <input type="text" className=" w-[188px] h-[50px] flex-shrink-0"/>
        </div>
      </div>
    );
}

