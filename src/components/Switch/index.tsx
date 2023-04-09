import './Switch.css';

import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Switch = forwardRef<HTMLInputElement, InputProps>(
  ({ id, onChange, ...props }, ref) => {
    return (
      <div className="Switch">
        <input
          className="Switch__input"
          type="checkbox"
          ref={ref}
          id={id}
          onChange={onChange}
          {...props}
        />
        <label htmlFor={id} className="Switch__toggler">
          Toggle
        </label>
      </div>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
