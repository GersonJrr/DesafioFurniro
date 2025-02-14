import filter from "../../../assets/filter.svg"
import grid from "../../../assets/grid4.svg"
import list from "../../../assets/list.svg"
import line from "../../../assets/Line5.svg"

export default function Filter() {
    return (
      <div className="w-full h-[100px] bg-bg-filter flex items-center justify-between px-4 sm:px-8 md:px-20 font-poppins">
        <div className="flex space-x-4 items-center">
            <button className="flex items-center space-x-2">
                <img src={filter} alt="Filter" />
                <span>Filter</span>
            </button>
            <button><img src={grid} alt="Grid" /></button>
            <button><img src={list} alt="List" /></button>
            <span><img src={line} alt="Line" /></span>
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

