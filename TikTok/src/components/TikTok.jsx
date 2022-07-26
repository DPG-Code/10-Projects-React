import React, { useEffect, useState } from 'react'
import TiktokVideo from './TiktokVideo'
import useFetch from './useFetch'
import useItems from './useItems'

import './tiktok.css'

export default function TikTok() {
    const [url, setUrl] = useState('')
    const [page, setPage] = useState(0)
    const [index, setIndex] = useState(0)
    const [response, data, isLoading] = useFetch(url, 'json')
    const [items] = useItems(data)

    useEffect(() => {
        setUrl('http://localhost:4000/page/' + page)
    }, [page])

    function nextVideo() {
        if(index + 2 === items.length) {
            setPage(page + 1)
        }
        if(index < items.length - 1){
            setIndex(index + 1)
        }
    }

    function prevVideo() {
        if(index > 0) {
            setIndex(index - 1)
        }
    }

    return (
        <div className='container'>
            { isLoading ? <p>Cargando...</p> :  '' }
            <div className='buttons'>
                <button disabled={isLoading} onClick={() => prevVideo()}>Prev Video</button>
                <button disabled={isLoading} onClick={() => nextVideo()}>Next Video</button>
            </div>
            <div className='tiktoksContainerView'>
                <div className='tiktoksContainer' style={{transform: `translateY(${-1 * index * 960 + 'px'})`}}>
                    <Videos items={items} index={index} />
                </div>
            </div>
        </div>
    )
}

const Videos = React.memo(({items, index}) => {
    return (
        <>
            {items?.map((item, i) => (
                        <TiktokVideo key={item.id} item={item} current={index === i}/>
                    ))}
        </>
    )
})