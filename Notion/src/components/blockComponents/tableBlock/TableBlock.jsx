import { forwardRef } from "react";
import Cell from "./Cell";
import Headers from "./headers";

function TableBlock({ columns, data, onChange }, ref) {
    return (
        <table>
            <thead>
                <Headers columns={columns} />
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={crypto.randomUUID()}>
                        {columns.map((cell, cellIndex) => (
                            <Cell
                                key={crypto.randomUUID()}
                                text={row[cell].toString() ?? ''}
                                onChange={(value) => onChange(rowIndex, cell, value)}
                                canBeEdited={columns[cellIndex] !== 'id'}
                            />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default forwardRef(TableBlock)