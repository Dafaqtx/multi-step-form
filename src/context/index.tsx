/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useEffect, useState } from 'react';

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  isYearly: boolean;
  addons: Record<string, boolean>;
}

export interface FormContextType {
  formData: FormData;
  setFormValues(values: Partial<FormData>): void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isFinish: boolean;
}

export interface FormProviderProps {
  children: React.ReactNode;
}

const defaultFormData = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  isYearly: false,
  addons: { service: false, storage: false, customization: false },
};

export const FormContext = createContext<FormContextType>({
  formData: defaultFormData,
  setFormValues: () => {},
  currentStep: 1,
  nextStep: () => {},
  prevStep: () => {},
  isFinish: false,
});

export default function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isFinish, setIsFinish] = useState(false);

  const setFormValues = (values: Partial<FormData>) => {
    setFormData((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (currentStep === 5) {
      setIsFinish(true);
    }
  }, [currentStep]);

  const contextValue = {
    formData,
    setFormValues,
    currentStep,
    nextStep,
    prevStep,
    isFinish,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
}

export const useFormData = () => useContext<FormContextType>(FormContext);
