import React from "react";

const Btn = ({ dataInform, btnTheme }) => {
  return (
    <button
      className={`w-full xl:py-[15px] lg:py-[13px] py-[10px]  font-medium
        border 
        ${btnTheme.borderColor || "border-[var(--color-primary)]"} 
        ${
          btnTheme.backGround.includes("bg-")
            ? btnTheme.backGround
            : `bg-[${btnTheme.backGround}]`
        } 
        ${btnTheme.textColor || "text-[var(--color-primary)]"} 
        rounded-md 
        transition 
        flex 
        justify-center 
        items-center 
        hover:${btnTheme.hovering.backGround || ""} 
        hover:${btnTheme.hovering.textColor || ""}
      `}
    >
      {dataInform.Icon && <span className="mr-2">{dataInform.Icon}</span>}
      {dataInform.title}
    </button>
  );
};

export default Btn;
