import './CourseGoalItem.css';

import React, { Key } from 'react';

import { Props } from '../../../types/Props';

interface PropsCourseGoalItem extends Props {
  id: Key;
  onDelete: Function;
}

const CourseGoalItem = (props: PropsCourseGoalItem) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
