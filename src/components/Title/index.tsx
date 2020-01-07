import cn from 'classnames';
import * as React from 'react';

export interface ITitle {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Title: React.FunctionComponent<ITitle> = ({ title, subtitle, className }) => {
  return (
    <div className={cn(className, 'flex-1 mt-5 font-bold text-grey-darkest')}>
      {title && <p className="text-xl text-center">{title}</p>}
      {subtitle && <p className="text-left uppercase">{subtitle}</p>}
    </div>
  );
};
