import './Form.css';

import { FC } from 'react';

import { Addons, Finish, PersonalInfo, SelectPlan, Summary } from '@/containers/steps';
import { useFormData } from '@/context';

import Header from '../Header';
import Navigation from '../Navigation';

export const Form: FC = () => {
  const { currentStep } = useFormData();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo startAdornment={<Header />} endAdornment={<Navigation />} />;
      case 2:
        return <SelectPlan startAdornment={<Header />} endAdornment={<Navigation />} />;
      case 3:
        return <Addons startAdornment={<Header />} endAdornment={<Navigation />} />;
      case 4:
        return <Summary startAdornment={<Header />} endAdornment={<Navigation />} />;
      case 5:
        return <Finish />;

      default:
        return null;
    }
  };

  return <div className="Form">{renderStep()}</div>;
};

export default Form;
