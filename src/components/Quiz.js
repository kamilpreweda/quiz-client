import React, { useContext } from 'react'
import useStateContext from './hooks/useStateContext'

export default function Quiz() {

    const { context, setContext } = useStateContext()

    return (
        <div>Question</div>
    )
}