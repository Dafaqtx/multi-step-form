import './SelectPlan.css';

import cn from 'classnames';
import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { PLANS } from '@/constants';
import { FormData, useFormData } from '@/context';
import { getPrice } from '@/utils';

interface SelectPlanProps {
  endAdornment: React.ReactNode;
}

export const SelectPlan: FC<SelectPlanProps> = ({ endAdornment }) => {
  const { formData, setFormValues, nextStep } = useFormData();
  const { handleSubmit, register, watch, setValue } = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: formData,
  });
  const planeValue = watch('plan');
  const isYearlyValue = watch('isYearly');

  const handleChangePlan = useCallback(
    (value: string) => () => {
      setValue('plan', value);
    },
    [],
  );

  const handleChangePeriod = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('isYearly', e.target.checked);
  }, []);

  const saveData = (values: FormData) => {
    setFormValues(values);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(saveData)}
      className="SelectPlan"
      autoComplete="off"
      noValidate
    >
      <h1 className="form-title">Select your plan</h1>
      <p className="form-description">
        You have the option of monthly or yearly billing.
      </p>

      <div className="SelectPlan__plans">
        {PLANS.map(({ value, label, price }) => {
          const { formattedPrice } = getPrice({ price, isYearly: isYearlyValue });

          return (
            <button
              key={value}
              type="button"
              onClick={handleChangePlan(value)}
              className={cn('SelectPlan__plan', {
                'SelectPlan__item--selected': planeValue === value,
              })}
            >
              <input
                {...register('plan')}
                className="SelectPlan__radio"
                type="radio"
                value={value}
                id={value}
              />
              <div className="SelectPlan__image">
                <img src={`/images/icon-${value}.svg`} alt={label} />
              </div>
              <span className="SelectPlan__name">{label}</span>
              <span className="SelectPlan__price">{formattedPrice}</span>
            </button>
          );
        })}
      </div>

      <div className="SelectPlan__period">
        <span
          className={cn('SelectPlan__value', {
            'SelectPlan__value--active': !isYearlyValue,
          })}
        >
          Monthly
        </span>
        <div className="Switch">
          <input
            {...register('isYearly')}
            className="Switch__input"
            type="checkbox"
            checked={isYearlyValue}
            onChange={handleChangePeriod}
            id="isYearly"
          />
          <label htmlFor="isYearly" className="Switch__toggler">
            Toggle
          </label>
        </div>
        <span
          className={cn('SelectPlan__value', {
            'SelectPlan__value--active': isYearlyValue,
          })}
        >
          Yearly
        </span>
      </div>

      {endAdornment}
    </form>
  );
};

export default SelectPlan;
