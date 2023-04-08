import './Finish.css';

import { FC } from 'react';

export const Finish: FC = () => {
  return (
    <div className="Finish">
      <img src="/images/icon-thank-you.svg" alt="Thank you!" className="Finish__img" />
      <h1 className="Finish__title">Thank you!</h1>
      <p className="Finish__text">
        Thanks for confirming your subscription! We hope you have fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};

export default Finish;
