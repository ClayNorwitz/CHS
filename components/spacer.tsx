import React, { ReactNode } from 'react';

interface SpacerProps {
  children: ReactNode;
  bgCol: string;
}

const Spacer: React.FunctionComponent<SpacerProps> = ({ children, bgCol }) => {
  return <section className={`relative pt-40 ${bgCol}`}>{children}</section>;
};

export default Spacer;
