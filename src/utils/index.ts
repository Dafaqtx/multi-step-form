import { ADDONS, PLANS } from '@/constants';
import type { Addon } from '@/context';

interface IPriceCalculationResult {
  factor: number;
  payTime: string;
  formattedPrice: string;
}

interface IPriceCalculationInput {
  price: number;
  isYearly: boolean;
}

export const getFactor = (isYearly: boolean): number => (isYearly ? 10 : 1);

export const getPayTime = (isYearly: boolean): string => (isYearly ? 'yr' : 'mo');

export const getPrice = ({
  price,
  isYearly,
}: IPriceCalculationInput): IPriceCalculationResult => {
  const factor = getFactor(isYearly);
  const payTime = getPayTime(isYearly);
  const formattedPrice = `$${price * factor}/${payTime}`;

  return {
    factor,
    payTime,
    formattedPrice,
  };
};

export const getTotalPrice = ({
  planPrice,
  addons,
  isYearly,
}: {
  planPrice: number;
  addons: Addon[];
  isYearly: boolean;
}): string => {
  const factor = getFactor(isYearly);
  const payTime = getPayTime(isYearly);
  const total = (planPrice + addons.reduce((acc, cur) => acc + cur.price, 0)) * factor;

  return `+$${total}/${payTime}`;
};

export const getPlan = (plan: string) => {
  return PLANS.find((planData) => planData.value === plan);
};

export const getAddon = (addons: Record<string, boolean>) => {
  return ADDONS.filter((addon) => addons[addon.id]);
};
