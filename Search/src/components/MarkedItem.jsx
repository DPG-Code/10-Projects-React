import { useMemo } from "react"

export default function MarkedItem({item, query, onClick}) {
    const {left, right, center} = useMemo(() => getPosition(item, query), [item, query])

    function getPosition(item, query){
        const index = item.title.toLowerCase().indexOf(query)
        const left = item.title.slice(0, index)
        const right = item.title.slice(index + query.length)
        const center = item.title.slice(index, index + query.length)

        return {left, right, center}
    }

    function handleOnClick(e){
        onClick(item)
    }

    return <button onClick={handleOnClick}>
        {left}
        <span style={{backgroundColor : 'yellow'}}>{center}</span>
        {right}
    </button>
}