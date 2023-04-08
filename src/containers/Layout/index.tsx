import './Layout.css';

import { FC, PropsWithChildren } from 'react';

import Sidebar from '../Sidebar';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout__sidebar">
        <Sidebar />
      </div>
      <div className="Layout__form">{children}</div>
    </div>
  );
};

export default Layout;
