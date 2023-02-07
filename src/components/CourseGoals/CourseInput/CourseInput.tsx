// import './CourseInput.css';

import {ChangeEvent, FormEvent, useState} from 'react';

import Button from '../../UI/Button/Button';
import PropsCourseInput from './PropsCourseInput';
import styled from "styled-components";


type PropsStyled =  {
    invalid:boolean
}

const CourseInput = (props: PropsCourseInput) => {
    const [enteredValue, setEnteredValue] = useState<string>('');
    const [hasErrors, setHasErrors] = useState<boolean>(false);

    const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim().length > 0) {
            setHasErrors(false);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setHasErrors(true);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    const FormControl = styled.div<PropsStyled>`
      & {
        margin: 0.5rem 0;
      }

      & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${props => props.invalid ? 'red' : 'black'}
      }

      & input {
        display: block;
        width: 100%;
        border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
        background: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
      }

      & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
      }
    `

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl invalid={hasErrors}>
                <label>Course Goal</label>
                <input type="text"
                       onChange={goalInputChangeHandler}/>
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
