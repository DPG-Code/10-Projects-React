import { useState, useEffect, useMemo } from "react"
import MarkedItem from "./MarkedItem"

export default function Results({items, onItemSelected, query, onResutlsCalculated}) {
    const [results, setResults] = useState([])
    const filteredItems = useMemo(() => findMatch(items, query), [items, query])

    useEffect(function() {
        onResutlsCalculated(results)
    }, [results])

    function findMatch(items, query){
        const res = items.filter(i => {
            return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0
        })

        setResults(res)
        return(res)
    }

    return <div className="results">
            {
                query
                ? filteredItems.map(item => <MarkedItem key={item.id} item={item} query={query} onClick={onItemSelected}/>)
                : ''
            }
        </div>
}