import { MouseEventHandler } from 'react';

import { Props } from '../../../types/Props';

interface ButtonProps extends Props {
  type: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default ButtonProps;
