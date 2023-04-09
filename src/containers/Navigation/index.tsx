import './Navigation.css';

import cn from 'classnames';
import { FC } from 'react';

import { Button } from '@/components';
import { useFormData } from '@/context';

export const Navigation: FC = () => {
  const { currentStep, prevStep } = useFormData();
  return (
    <div
      className={cn('Navigation', {
        'Navigation--only-next': currentStep === 1,
      })}
    >
      {currentStep !== 1 && (
        <button type="button" className="Navigation__link" onClick={prevStep}>
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
    </div>
  );
};

export default Navigation;
