import { useState } from "react"
import Results from "./Result"

export default function SearchBar({items, onItemSelected}) {
    const [query, setQuery] = useState('a')
    const [results, setResults] = useState([])

    function handleOnChange(e) {
        const value = e.target.value
        setQuery(value)
    }

    function handleResults(items){
        setResults(items)
    }

    return (
        <>
            {results && <p className="quantity">{results.length} results</p>}
            <input className="search-input" onChange={handleOnChange} value={query} type="text" />
            <Results items={items} onItemSelected={onItemSelected} query={query} onResutlsCalculated={handleResults} />
        </>
    )
}