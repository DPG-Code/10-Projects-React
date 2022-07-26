import MainContainer from '../components/MainContainer'
import CreateForm from '../components/CreateForm'
import ItemsContainer from '../components/Itemscontainer'
import Item from '../components/Item'
import useReducerApp from '../store/store'
import { useEffect, useState } from 'react'

export default function Create() {
    const [state, dispatch] = useReducerApp()
    const [url, setUrl] = useState("")

    useEffect(function() {
        dispatch({ type : 'LOAD' })
    }, [])

    return (
        <MainContainer >
            <CreateForm dispatch={dispatch}/>
            <ItemsContainer>
                {state?.items.map((item) =>
                    <Item key={crypto.randomUUID()} item={item}/>
                )}
            </ItemsContainer>
        </MainContainer>
    )
}