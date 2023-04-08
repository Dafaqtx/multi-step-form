import './Sidebar.css';

import cn from 'classnames';
import { FC } from 'react';

import { useFormData } from '@/context';

const STEPS = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

export const Sidebar: FC = () => {
  const { currentStep } = useFormData();

  return (
    <ul className="Sidebar">
      {STEPS.map((label, idx) => (
        <li key={label} className="Sidebar__step Step">
          <div
            className={cn('Step__count', {
              'Step__count--active': currentStep === idx + 1,
            })}
          >
            {idx + 1}
          </div>
          <div className="Step__info">
            <div className="Step__label">Step {idx + 1}</div>
            <div className="Step__name">{label}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
