const Ripple: React.FC = () => {
  return (
    <div className="absolute -translate-x-35 -translate-y-26">
      <div className="flex justify-center items-center">
        <div className="size-[320px] rounded-full flex items-center justify-center border-gray-500">
          <div className="border size-[270px] rounded-full flex items-center justify-center border-gray-400">
            <div className="border size-[220px] rounded-full flex items-center justify-center border-gray-400">
              <div className="border size-[170px] rounded-full flex items-center justify-center border-gray-300">
                <div className="border size-[120px] rounded-full flex items-center justify-center border-gray-300">
                  <div className="border border-gray-300 size-[70px] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full bg-radial from-transparent via-white/95 to-white" />
      </div>
    </div>
  );
};

export default Ripple;
