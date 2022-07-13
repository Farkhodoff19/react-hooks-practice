import React, { useImperativeHandle, forwardRef, useRef} from "react"


const TextInput = forwardRef((props, ref) => {
    const {hasError, placeholder, value, update} = props;
    const inputRef = useRef();
    

    useImperativeHandle(ref, () => {
        return {
        focus() {
            inputRef.current.focus();
        }
        }
    })

    return (
        <input 
        ref={inputRef}
        value={value}
        onChange={e => update(e.target.value)}
        placeholder={placeholder}
        style={{
            borderColor: hasError ? "red" : "black",
            outline: "none",
        }}
        />
    )
})

export default TextInput;