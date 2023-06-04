type Pops = {
  title?: string;
  Icon?: any;
  className?: string;
};

function ButtonLogin(props: Pops) {
  const { title, Icon, className } = props;
  return (
    <div
      className={`flex bg-[#FFF] text-[20px] gap-[15px] items-center py-[14px] pl-[37px] border border-solid border-[#E3E3E2] rounded-[10px] cursor-pointer leading-[25px] min-w-[400px] ${className}`}
    >
      {Icon} {title}
    </div>
  );
}

export default ButtonLogin;
