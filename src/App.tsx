import './App.css';

import { FC } from 'react';

import { Form, Layout } from '@/containers';

import FormProvider from './context';

const App: FC = () => {
  return (
    <FormProvider>
      <Layout>
        <Form />
      </Layout>
    </FormProvider>
  );
};

export default App;
