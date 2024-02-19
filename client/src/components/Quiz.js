import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { useDispatch, useSelector } from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'

const Quiz = () => {
    const [check, setChecked] = useState(undefined)
    const { queue, trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const dispatch = useDispatch()
    // const { questions } = useSelector(state => state)
    // useEffect(() => {
    //     console.log(questions)
    // })
    function onNext() {
        if (trace < queue.length) {
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }

        // /** reset the value of the checked variable */
        // setChecked(undefined)
    }
    function onPrev() {
        if (trace > 0) {
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }
    function onChecked(check) {
        setChecked(check)
    }
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            {/* display questions */}
            <Questions onChecked={onChecked} />


            <div className='grid'>
                {/* {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>} */}
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz