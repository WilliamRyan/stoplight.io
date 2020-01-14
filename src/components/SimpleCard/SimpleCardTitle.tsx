import cn from 'classnames';
import * as React from 'react';

export interface ISimpleCardTitle {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const SimpleCardTitle: React.FunctionComponent<ISimpleCardTitle> = ({ title, subtitle, className }) => {
  return (
    <div className={cn(className)}>
      {title && <p className="text-xl text-center">{title}</p>}
      {subtitle && <p className="text-left uppercase">{subtitle}</p>}
    </div>
  );
};
