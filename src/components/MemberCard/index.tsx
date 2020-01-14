import cn from 'classnames';
import * as React from 'react';
import { Image } from '../Image';

export interface IMember {
  image: string;
  name: string;
  role: string;
  isLast: boolean;
}

export const Member: React.FunctionComponent<IMember> = ({ image, name, role, isLast }) => {
  return (
    <div className={cn('mb-48 px-10 sm:px-0 sm:w-48', { 'sm:mb-24': isLast })}>
      <div className="block w-64 px-4 py-10 text-center bg-white rounded-lg shadow sm:py-4 sm:px-0 sm:w-full">
        <Image
          src={image}
          className="w-32 h-32 mx-auto mb-10 -mt-20 bg-center bg-contain border rounded-full shadow-sm border-grey"
          size="sm"
          useDiv
        />

        <div className="font-bold uppercase text-green">{name}</div>

        {role && <div className="pt-2 text-black">{role}</div>}
      </div>
    </div>
  );
};
