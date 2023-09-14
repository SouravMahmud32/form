import { FaAngleDown } from "react-icons/fa";

const Task = () => {
  return (
    <div className="bg-slate-400 px-4 py-2 items-center">
      <h3 className="text-lg font-bold">Schedule Details</h3>
      <form className="grid grid-cols-1 gap-3 mt-10">
        <div className="flex text-center">
          <h4 className="mt-1 me-3">Starts</h4>
          <div className="relative flex items-center">
            <input
              type="text"
              value='May 16, 2023'
              className="input input-sm rounded-xl  input-bordered pr-12" 
            />
            <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <span className="mt-1 mx-6">-</span>
          <div className="relative flex items-center">
            <input
              type="text"
              value='Set Time'
              className="input input-sm rounded-xl input-bordered pr-12" 
            />
            <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex text-center">
          <h4 className="mt-1 me-3">Ends</h4>
          <div className="relative flex items-center">
            <input
              type="text"
              value='May 16, 2023'
              className="input input-sm rounded-xl input-bordered pr-12" 
            />
            <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <span className="mt-1 mx-6">-</span>
          <div className="relative flex items-center">
            <input
              type="text"
              value='Set Time'
              className="input input-sm rounded-xl input-bordered pr-12" 
            />
            <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex flex-col w-80 mx-28 items-center">
          <textarea placeholder="Notes" className="p-4 rounded-md resize-none text-center w-full"></textarea> {/* Use w-full to take up the full width */}
        </div>
        <div>
          <button className="btn btn-sm">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Task;
