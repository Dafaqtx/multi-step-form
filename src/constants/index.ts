import { Addon } from '@/context';

export const ADDONS: Addon[] = [
  {
    id: 'service',
    name: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: 'storage',
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: 'customization',
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 4,
  },
];

export const PERSONAL_INFO_FIELDS = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    type: 'text',
    mask: '',
  },
  {
    name: 'email',
    label: 'Email Address',
    placeholder: 'e.g. stephenking@lorem.com',
    type: 'email',
    mask: '',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    placeholder: 'e.g. +1 234 567 890',
    type: 'tel',
    mask: '+1 999 999 999',
  },
] as const;

export const PLANS = [
  {
    label: 'Arcade',
    value: 'arcade',
    price: 9,
  },
  {
    label: 'Advanced',
    value: 'advanced',
    price: 12,
  },
  {
    label: 'Pro',
    value: 'pro',
    price: 15,
  },
];
