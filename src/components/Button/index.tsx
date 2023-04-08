import './Button.css';

import cn from 'classnames';
import { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'standard' | 'finish';
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, variant = 'standard', ...props }) => (
  <button
    className={cn('Button', {
      'Button--finish': variant === 'finish',
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;
