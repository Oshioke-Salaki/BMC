/* eslint-disable react/prop-types */
function RequestModalControl({ step }) {
  return (
    <div className="flex flex-col">
      <div className="grid w-full grid-cols-[auto_206px_auto_206px_auto] text-center text-base font-medium">
        <div className="flex flex-col items-center">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#430F5D] text-center text-sm font-medium text-white">
            1
          </div>
          <h2>Initiating</h2>
        </div>
        <div className="mt-[15px] h-[1px] w-full bg-[#c4c4c4]"></div>
        <div className="flex flex-col items-center">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#430F5D] text-center text-sm font-medium text-white">
            2
          </div>
          <h2>
            Waiting for
            <br />
            Confirmation
          </h2>
        </div>
        <div className="mt-[15px] h-[1px] w-full bg-[#c4c4c4]"></div>
        <div className="flex flex-col items-center">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#430F5D] text-center text-sm font-medium text-white">
            3
          </div>
          <h2>
            Token <br /> Transferred
          </h2>
        </div>
      </div>
      <div className="mt-6 h-2 w-[94%] self-center rounded-[5px] bg-[#d9d9d9]">
        <div className={`h-full w-[33.3%] rounded-[5px] bg-[#430F5D]`}></div>
      </div>
    </div>
  );
}

export default RequestModalControl;
