type buttonProps = {
    text:string
    style:string
    type?:"submit" | "button"
    onGetEvent?:() => void
}

const ButtonElement = (props: buttonProps) => {
    const {text, onGetEvent, style, type} = props
    const primaryButtonStyle = `bg-[#5C0303] text-white py-1 px-3 rounded capitalize font-semibold mt-2 w-full`
    const secondaryButtonStyle = `bg-white text-[#5C0303] py-1 px-3 rounded capitalize font-semibold text-sm`
    const BaseStyle = `text-[#5C0303] capitalize font-thin text-xs ms-[-11px]  border border-transparent`
  return (
    <div>
<button type={type} onClick={onGetEvent} className={`${style === "primary" ? primaryButtonStyle : secondaryButtonStyle} ${style === "base" ? BaseStyle : null}`}>
        {text}
    </button>
    </div>
  )
}

export default ButtonElement