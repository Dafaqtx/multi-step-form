import './Summary.css';

import { FC } from 'react';

import { useFormData } from '@/context';
import { getAddon, getPlan, getPrice, getTotalPrice } from '@/utils';

interface SummaryProps {
  startAdornment: React.ReactNode;
  endAdornment: React.ReactNode;
}

export const Summary: FC<SummaryProps> = ({ startAdornment, endAdornment }) => {
  const {
    formData: { plan, isYearly, addons },
    prevStep,
    nextStep,
  } = useFormData();

  const selectedPlan = getPlan(plan);
  const selectedAddons = getAddon(addons);
  const { formattedPrice: formattedPlanPrice } = getPrice({
    price: selectedPlan!.price,
    isYearly,
  });

  return (
    <form className="Summary" onSubmit={nextStep}>
      {startAdornment}
      <div className="Summary__box">
        <div className="Summary__plan">
          <div className="Summary__plan-name">
            {selectedPlan!.label} {isYearly ? '(Yearly)' : '(Monthly)'}
            <button type="button" className="Summary__change" onClick={prevStep}>
              Change
            </button>
          </div>
          <div className="Summary__plan-price">{formattedPlanPrice}</div>
        </div>
        <div className="Summary__addons">
          {selectedAddons.map(({ id, price, name }) => {
            const { formattedPrice } = getPrice({ price: price, isYearly });

            return (
              <div key={id} className="Summary__addon">
                <span className="Summary__addon-name">{name}</span>
                <span className="Summary__addon-price">+{formattedPrice}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="Summary__total">
        <span className="Summary__total-period">
          Total ${isYearly ? '(per year)' : '(per month)'}
        </span>
        <div className="Summary__total-price">
          {getTotalPrice({
            planPrice: selectedPlan!.price,
            addons: selectedAddons,
            isYearly,
          })}
        </div>
      </div>
      {endAdornment}
    </form>
  );
};

export default Summary;
