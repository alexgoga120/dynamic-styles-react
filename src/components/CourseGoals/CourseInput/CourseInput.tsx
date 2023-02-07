import {ChangeEvent, FormEvent, useState} from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import PropsCourseInput from "./PropsCourseInput";

const CourseInput = (props: PropsCourseInput) => {
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
