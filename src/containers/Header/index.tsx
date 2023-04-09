import './Header.css';

import { FC } from 'react';

import { DESCRIPTIONS, TITLES } from '@/constants';
import { useFormData } from '@/context';

export const Header: FC = () => {
  const { currentStep } = useFormData();

  return (
    <div className="Header">
      <h1 className="Header__title">{TITLES[currentStep - 1]}</h1>
      <p className="Header__description">{DESCRIPTIONS[currentStep - 1]}</p>
    </div>
  );
};

export default Header;
