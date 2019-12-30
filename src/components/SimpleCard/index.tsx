import cn from 'classnames';
import * as React from 'react';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { Icon, IconProp } from '../Icon';
import { IImage, Image } from '../Image';
import { Link } from '../Link';

export interface ISimpleCard {
  name?: string;
  className?: string;
  image?: string;
  icon?: IconProp;
  iconStyle?: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
  description?: string;
  subtitle?: string;
  subtext?: string;
  summary?: string;
  href?: string;
}

export const SimpleCard: React.FunctionComponent<ISimpleCard> = ({
  name,
  image,
  icon,
  iconStyle,
  description,
  subtitle,
  subtext,
  summary,
  href,
  className,
}) => {
  const sampleCards: ISimpleCard[] = [
    {
      name: 'Card with an icon and an href',
      className: 'test className',
      image: 'https://i.redd.it/w3kr4m2fi3111.png',
      icon: ['fad', 'chart-network'],
      iconStyle: {
        '--fa-primary-color': 'dodgerblue',
        '--fa-secondary-color': 'limegreen',
      },
      description: 'Description for a card with an icon and an href',
      subtitle: 'Subtitle for a card with an icon and an href',
      subtext: 'Subtext for a card with an icon and an href',
      summary: 'Summary for a card with an icon and an href',
      href: 'https://stoplight.io/',
    },
    {
      name: 'Card with just an icon',
      className: 'test className',
      image: 'https://i.redd.it/w3kr4m2fi3111.png',
      icon: ['fad', 'chart-network'],
      iconStyle: {
        '--fa-primary-color': 'dodgerblue',
        '--fa-secondary-color': 'limegreen',
      },
      description: 'Description for a card with just an icon',
      subtitle: 'Subtitle for a card with just an icon',
      subtext: 'Subtext for a card with just an icon',
      summary: 'Summary for a card with just an icon',
    },
    {
      name: 'Linked Business Card',
      className: 'test className',
      image: 'https://i.redd.it/w3kr4m2fi3111.png',
      description: 'Description for linked business card',
      subtitle: 'Subtitle for linked business card',
      subtext: 'Subtext for linked business card',
      summary: 'Summary for linked business card',
      href: 'https://stoplight.io/',
    },
    {
      name: 'Business Card no link',
      className: 'test className',
      image: 'https://i.redd.it/w3kr4m2fi3111.png',
      description: 'Description for business card with no link',
      subtitle: 'Subtitle for business card with no link',
      subtext: 'Subtext for business card with no link',
      summary: 'Summary for business card with no link',
    },
  ];
  return (
    <div className={cn(className, 'flex justify-around flex-wrap')}>
      {sampleCards.map((sampleCard, index) => {
        return (
          <div className="w-80 text-center px-5 mt-14 sm:pt-14">
            <Link to={sampleCard.href}>
              {sampleCard.icon && <Icon icon={sampleCard.icon} size="3x" style={sampleCard.iconStyle} />}
              <div>
                <Image
                  className="h-10 text-grey-darkest"
                  src="https://i.redd.it/w3kr4m2fi3111.png"
                  title={`${sampleCard.name} Logo`}
                  alt={'placeholder'}
                  size="sm"
                />
              </div>
              <div className="font-bold text-grey-darkest text-xl mt-5">{sampleCard.name}</div>
              <div className="text-grey-dark font-medium my-2 leading-loose">{sampleCard.summary}</div>
              {sampleCard.href && (
                <div className="items-center font-semibold">
                  Learn More
                  <Icon className="pl-2" size="lg" icon={['fad', 'arrow-right']} />
                </div>
              )}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
