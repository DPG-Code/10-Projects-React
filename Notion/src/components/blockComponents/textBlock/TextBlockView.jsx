import { forwardRef, useEffect } from "react";
import TextBlock from "./TextBlock";

function TextBlockView({data, onChange, onCreate, focusId}, ref) { //ref no va desestructurado
    useEffect(() => {
        if(focusId) {
            ref.current.focus()
        }
    }, [focusId])

    function handleOnChange(item, e) {
        onChange({ type : 'text', id : item.id, text : e.target.value })
    }

    function handleOnKeyDown(e) {
        if(e.key === 'Enter') {
            onCreate()
        }
    }

    return (
        <div className="text">
            {
                data.map((item) => (
                    <TextBlock
                        ref={ref}
                        key={item.id}
                        item={item}
                        focus={focusId === item.id}
                        onChange={handleOnChange}
                        onKeyDown={handleOnKeyDown}
                    />
                ))
            }
        </div>
    )
}

export default forwardRef(TextBlockView)