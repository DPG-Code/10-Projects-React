import { useEffect, useState, useRef } from "react";

export default function Cell({ text, onChange, canBeEdited }) {
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState(text)

    const ref = useRef(null)

    useEffect(() => {
        setValue(text)
    }, [text])

    useEffect(() => {
        if(ref.current) {
            ref.current.focus()
        }
    }, [editable])

    function handleOnChange(e) {
        setValue(e.target.value)
    }

    function handleOnDoubleClick() {
        setEditable(true)
    }

    function handleOnBlur(e) {
        onChange(e.target.value)
        setEditable(false)
    }

    function handleOnKeyDown(e) {
        if(e.key === 'Enter') {
            e.target.blur()
        }
    }

    return (
        editable && canBeEdited
        ? <td>
                <input
                    ref={ref}
                    type="text"
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    onKeyDown={handleOnKeyDown}
                    value={value}
                />
            </td>
        : <td onDoubleClick={handleOnDoubleClick}>{value}</td>
    )
}