import './Form.css';

import cn from 'classnames';
import React, { FC } from 'react';

import { Button } from '@/components';
import { Addons, Finish, PersonalInfo, SelectPlan, Summary } from '@/containers/steps';
import { useFormData } from '@/context';

export const Form: FC = () => {
  const { currentStep, formData, prevStep } = useFormData();

  console.log('formData', formData);

  const renderStep = (footer: React.ReactNode) => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo endAdornment={footer} />;
      case 2:
        return <SelectPlan endAdornment={footer} />;
      case 3:
        return <Addons endAdornment={footer} />;
      case 4:
        return <Summary endAdornment={footer} />;
      case 5:
        return <Finish />;

      default:
        return null;
    }
  };

  return (
    <div className="Form">
      {renderStep(
        <div
          className={cn('Form__navigation', {
            'Form__navigation--only-next': currentStep === 1,
          })}
        >
          {currentStep !== 1 && (
            <button type="button" className="Form__Link" onClick={prevStep}>
              Go Back
            </button>
          )}

          {currentStep < 4 ? (
            <Button type="submit">Next Step</Button>
          ) : (
            <Button variant="finish" type="submit">
              Confirm
            </Button>
          )}
        </div>,
      )}
    </div>
  );
};

export default Form;
