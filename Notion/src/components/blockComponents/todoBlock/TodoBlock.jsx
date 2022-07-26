import { forwardRef } from 'react'

function TodoBlock({item, onChange, onKeyDown, focus}, ref) {
    function handleOnChange(e) {
        onChange(item, e)
    }

    function handleOnKeyDown(e) {
        onKeyDown(item, e)
    }

    return (
        <div className='todo-item'>
            <input
                name='checkbox'
                type={'checkbox'}
                onChange={handleOnChange}
                checked={item.completed}
            />
            <input
                name='text'
                type={'text'}
                value={item.text}
                ref={focus ? ref : null}
                onChange={handleOnChange}
                onKeyDown={handleOnKeyDown}
            />
        </div>
    )
}

export default forwardRef(TodoBlock)