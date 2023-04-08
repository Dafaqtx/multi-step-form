/* eslint-disable jsx-a11y/label-has-associated-control */
import './Checkbox.css';

import React, { forwardRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, onChange, id, ...props }, ref) => (
    <div className="Checkbox">
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="Checkbox__input"
        name={name}
        onChange={onChange}
        ref={ref}
        {...props}
      />
      <label htmlFor={`checkbox-${id}`} className="Checkbox__label" />
    </div>
  ),
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
