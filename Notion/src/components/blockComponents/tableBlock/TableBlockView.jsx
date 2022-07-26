import { forwardRef } from "react";
import TableBlock from "./TableBlock";

function TableBlockView({data, onChange, onCreate, columns, onCreateNewColumn}, ref) {
    function handleNewColumn() {
        const name = prompt('Name of Column')
        if(!!name) {
            onCreateNewColumn(name)
        }
    }

    function handleNewRow() {
        onCreate()
    }

    function handleOnChange(row, property, value) {
        const item = (data[row][property] = value)
        onChange({ type : 'table', id : item.id, text : item.text, item : item })
    }

    return (
        <div className="table">
            <div className="buttons-table">
                <button onClick={handleNewColumn}>Add new Column</button>
                <button onClick={handleNewRow}>Add new Row</button>
            </div>
            <TableBlock ref={ref} columns={columns} data={data} onChange={handleOnChange}/>
        </div>
    )
}

export default forwardRef(TableBlockView)