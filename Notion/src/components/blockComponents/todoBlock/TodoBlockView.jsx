import { forwardRef, useEffect } from "react";
import TodoBlock from "./todoBlock";

function TodoBlockView({data, onChange, onCreate, focusId}, ref) {
    useEffect(() => {
        if(focusId) {
            ref.current.focus()
        }
    }, [focusId])

    function handleOnChange(item, e) {
        if (e.target.name === "checkbox") {
            onChange({ type: "todo", id: item.id, completed: e.target.checked });
        } else {
            onChange({ type: "todo", id: item.id, text: e.target.value });
        }
    }

    function handleOnKeyDown(item, e) {
        if(e.key === 'Enter') {
            onCreate()
        }
    }

    return (
        <div className="todo">
            {
                data.map((item) => (
                <TodoBlock
                    key={item.id}
                    ref={ref}
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

export default forwardRef(TodoBlockView)