import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';
import {CourseGoal} from "../../../types/CourseGoal";
import {Props} from "../../../types/Props";

interface PropsCourseGoalList extends Props{
  onDeleteItem: Function,
  items: CourseGoal[]
}

const CourseGoalList = (props:PropsCourseGoalList) => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
