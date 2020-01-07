import cn from 'classnames';
import * as React from 'react';
import { Image } from 'src/components/Image';
import { Link } from 'src/components/Link';

export interface IAuthor {
  className?: string;
  name?: string;
  path?: string;
  image?: string;
  meta?: string;
}

export const Author: React.FunctionComponent<IAuthor> = ({ className, name, path = '', image, meta }) => {
  if (!image && !name && !meta) return null;
  return (
    <Link to={path} disabled={!path} className={cn(className, 'flex items-center')}>
      {image && (
        <Image
          className="mr-4 bg-center bg-no-repeat bg-contain rounded-full h-14 w-14"
          src={image}
          alt="author"
          background
          size="sm"
        />
      )}
      <div>
        {name && <div className="pb-1 font-bold uppercase text-blue">{name}</div>}
        {meta && <div>{meta}</div>}
      </div>
    </Link>
  );
};
