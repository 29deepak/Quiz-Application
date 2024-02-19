import React, { useEffect, useState } from 'react'
import data from '../database/data'
import { useFetchQestion } from '../hooks/FetchQuestion'
import { useSelector } from 'react-redux'
const Questions = ({ onChecked }) => {
    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError }] = useFetchQestion()
    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const trace = useSelector(state => state.questions.trace)
    useEffect(() => {
        console.log(trace)
    })
    // useEffect(() => {
    //     console.log(isLoading)
    //     console.log(apiData)
    //     console.log(serverError)
    // }, [checked])
    const question = data[0]

    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        // dispatch(updateResult({ trace, checked }))
    }
    if (isLoading) return <h3 className='text-light'>isLoading</h3>
    if (serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
    return (
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)}
                            />

                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className={`check }`}></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Questions