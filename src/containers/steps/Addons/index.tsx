import './Addons.css';

import cn from 'classnames';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Checkbox } from '@/components';
import { ADDONS } from '@/constants';
import { FormData, useFormData } from '@/context';
import { getPrice } from '@/utils';

interface AddonsProps {
  endAdornment: React.ReactNode;
}

export const Addons: FC<AddonsProps> = ({ endAdornment }) => {
  const { formData, nextStep, setFormValues } = useFormData();
  const { handleSubmit, setValue, watch } = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: formData,
  });

  const addons = watch('addons');

  const saveData = (values: FormData) => {
    setFormValues(values);
    nextStep();
  };

  const handleChangeAddon = (addonId: string) => () => {
    setValue('addons', { ...addons, [addonId]: !addons[addonId] });
  };

  return (
    <form
      onSubmit={handleSubmit(saveData)}
      className="Addons"
      autoComplete="off"
      noValidate
    >
      <h1 className="form-title">Pick add-ons</h1>
      <p className="form-description">Add-ons help enhance your gaming experience.</p>

      <div className="Addons__list">
        {ADDONS.map(({ id, name, description, price }) => {
          const { formattedPrice } = getPrice({ price, isYearly: formData.isYearly });

          return (
            <button
              key={id}
              type="button"
              className={cn('Addon', { 'Addon--active': addons[id] })}
              onClick={handleChangeAddon(id)}
            >
              <Checkbox id={id} name="addons" value={id} checked={addons[id]} />
              <div className="Addon__info">
                <div className="Addon__name">{name}</div>
                <div className="Addon__description">{description}</div>
              </div>
              <div className="Addon__price">{`+${formattedPrice}`}</div>
            </button>
          );
        })}
      </div>

      {endAdornment}
    </form>
  );
};

export default Addons;
