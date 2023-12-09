type inputProps = {
    type: string
    name: string
    value?: string
    placeholder?: string
    onChange?: (e: any) => void
 
}

const InputElement = (props: inputProps) => {
    const {type, name, placeholder, onChange, value} = props
  return (
    <div>
            <div>
                <label htmlFor={name} className="text-sm capitalize">{name}</label>
            </div>
            <div>
                <input 
                onChange={onChange}
                className="w-full mb-3 p-2 py-1 rounded outline outline-[white] focus:outline focus:outline-[#5C0303] text-sm placeholder:text-xs placeholder:capitalize" 
                type={type} id={name} name={name} placeholder={placeholder}
                value={value}/>
            </div>
    </div>
  )
}

export default InputElement