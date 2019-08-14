import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import * as React from 'react';
import { Link } from 'src/components/Link';
import { Button } from '../Button';
import { Download, IDownload } from '../Download';
import { ISubmit, Submit } from '../Submit';
import { VideoPlayerModal } from '../VideoPlayerModal';

export interface ICallToAction {
  name?: string;
  color?: string;
  href?: string;
  className?: string;
  type?: 'link' | 'video' | 'submit' | 'download';
  icon?: IconProp;
  submit?: ISubmit;
  outlined?: boolean;
  download?: IDownload;
}

export const CallToAction: React.FunctionComponent<ICallToAction> = ({
  name,
  color = 'purple',
  className,
  href = 'https://next.stoplight.io',
  type = 'link',
  icon,
  submit,
  outlined,
  download,
}) => {
  if (!name) {
    return null;
  }

  const cta = (
    <div
      className={cn(
        `Button rounded shadow-md flex select-none inline-flex justify-center whitespace-no-wrap font-bold h-xl
      rounded z-0 hover:z-5 border-transparent text-white hover:text-white cursor-pointer solid`,
        {
          [`bg-${color} hover:bg-${color}-dark text-white`]: !outlined,
          [`border-2 border-${color} text-${color}-dark hover:text-${color}-darker`]: outlined,
        },
      )}
    >
      <div className="flex items-center px-6">
        <div className={'text-lg'}>{name}</div>
        {icon && (
          <div className="ml-2">
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
        )}
      </div>
    </div>
  );

  let ctaComponent;
  if (submit) {
    ctaComponent = <Submit {...submit} />;
  } else if (download) {
    ctaComponent = <Button className="text-lg" shadow="md" title={name} {...download} />;
  } else if (type === 'video') {
    ctaComponent = <VideoPlayerModal href={href} cta={cta} />;
  } else if (type === 'link') {
    ctaComponent = <Link to={href}>{cta}</Link>;
  }

  return <div className={cn(className)}>{ctaComponent}</div>;
};
