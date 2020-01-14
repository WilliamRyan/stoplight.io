import cn from 'classnames';
import * as React from 'react';
import { Container } from '../Container';

export interface ILargeCard {
  title: string;
  body: string;
}

export const LargeCard: React.FunctionComponent<ILargeCard> = ({ title, body, children }) => {
  return (
    <>
      <h2 className="text-5xl text-center pb-14 md:mb-14">{title}</h2>
      <h3 className="max-w-xl pb-16 mx-auto text-xl font-default md:mt-4">{body}</h3>
      {children}
    </>
  );
};
