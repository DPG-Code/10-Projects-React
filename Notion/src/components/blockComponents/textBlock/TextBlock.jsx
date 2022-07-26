import { forwardRef } from 'react'

function TextBlock({item, onChange, onKeyDown, focus}, ref) {
    function handleOnChange(e) {
        onChange(item, e)
    }

    function handleOnKeyDown(item, e) {
        onKeyDown(item, e)
    }

    return (
        <input
            type="text"
            value={item.text}
            ref={focus ? ref : null}
            onKeyDown={handleOnKeyDown}
            onChange={handleOnChange}
        />
    )
}

export default forwardRef(TextBlock)