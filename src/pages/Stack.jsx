const Stack = () => {
  return (
    <div className="px-[36px]">
      <h1 className="text-[48px] font-semibold">Stack</h1>
      <p className="text-[16px] mt-[24px] font-medium">
        Tools I use & love that you should check out.
      </p>
      <div className="mt-[52px] flex items-center">
        <div className="flex">
          <img src="" alt="" className="w-[40px] h-[40px] bg-black" />
          <div>
            <h2>Tool Name</h2>
            <p>Tool Description</p>
          </div>
        </div>
        <div className="flex">
          <img src="" alt="" className="w-[40px] h-[40px] bg-black" />
          <div>
            <h2>Tool Name</h2>
            <p>Tool Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
