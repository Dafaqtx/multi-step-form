import './Input.css';

import cn from 'classnames';
import { forwardRef } from 'react';
import type { FieldError } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: FieldError;
  mask?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, name, mask = '', ...props }, ref) => {
    return (
      <div className="Input">
        <div className="Input__top">
          <label className="Input__label" htmlFor={name}>
            {label}
          </label>
          {error && <span className="Input__error">{error.message}</span>}
        </div>
        <InputMask
          className={cn('Input__field', { 'Input__field--error': error })}
          id={name}
          mask={mask}
          autoComplete="off"
          inputRef={ref}
          maskChar=""
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
