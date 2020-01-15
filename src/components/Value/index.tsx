import * as React from 'react';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { Icon } from '../Icon';

export interface IValue {
  title: string;
  summary: string;
  icon: IconName;
  iconStyle: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
  className?: string;
}

export const Value: React.FunctionComponent<IValue> = ({ title, summary, icon, iconStyle }) => {
  return (
    <div className="px-5 text-center w-80 mt-14 sm:pt-14">
      <Icon icon={['fad', icon]} size="3x" style={iconStyle} />
      <div className="mt-5 text-2xl font-bold text-grey-darkest">{title}</div>
      <div className="my-2 font-medium leading-loose text-grey-dark">{summary}</div>
    </div>
  );
};
