import icon from "../../assets/icon.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <img
        src={icon}
        alt="CareerBridge Logo"
        className="h-12 w-auto object-contain"
      />

      <div className="flex flex-col leading-tight">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-[#14213D]">Tech</span>
          <span className="text-[#0EA5E9]">Hub</span>
        </h1>

        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
          CConnecting Talent to Opportunity
        </p>
      </div>
    </div>
  );
};

export default Logo;