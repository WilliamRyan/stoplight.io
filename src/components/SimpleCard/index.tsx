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
  summary?: string;
  href?: string;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  color?: string;
  tag?: string;
  date?: string;
  publication?: string;
}

export const SimpleCard: React.FunctionComponent<ISimpleCard> = ({
  name,
  image,
  icon,
  iconStyle,
  description,
  summary,
  href,
  className,
  company,
  color,
  tag,
  date,
  publication,
}) => {
  const sampleCards: ISimpleCard[] = [
    {
      name: 'Card w/ icon and href',
      className: 'test className',
      icon: ['fad', 'chart-network'],
      iconStyle: {
        '--fa-primary-color': 'dodgerblue',
        '--fa-secondary-color': 'limegreen',
      },
      description: 'Description for a card with an icon and an href. ',
      summary: 'Summary for a card with an icon and an href. Here is some more text.',
      href: 'https://stoplight.io/',
    },
    {
      name: 'Card w/ icon and href',
      className: 'test className',
      icon: ['fad', 'chart-network'],
      iconStyle: {
        '--fa-primary-color': 'dodgerblue',
        '--fa-secondary-color': 'limegreen',
      },
      description: 'Description for a card with an icon and an href',
      summary: 'Summary for a card with an icon and an href. Here is some more text.',
      href: 'https://stoplight.io/',
    },
    {
      name: 'Card w/ icon and href',
      className: 'test className',
      icon: ['fad', 'chart-network'],
      iconStyle: {
        '--fa-primary-color': 'dodgerblue',
        '--fa-secondary-color': 'limegreen',
      },
      description: 'Description for a card with an icon and an href',
      summary: 'Summary for a card with an icon and an href. Here is some more text.',
      href: 'https://stoplight.io/',
    },
    {
      name: 'Card w/ icon and href',
      className: 'test className',
      icon: ['fad', 'chart-network'],
      iconStyle: {
        '--fa-primary-color': 'dodgerblue',
        '--fa-secondary-color': 'limegreen',
      },
      description: 'Description for a card with an icon and an href',
      summary: 'Summary for a card with an icon and an href. Here is some more text.',
      href: 'https://stoplight.io/',
    },

    {
      name: 'Card with icon',
      className: 'test className',
      icon: ['fad', 'server'],
      iconStyle: {
        '--fa-primary-color': 'purple',
        '--fa-secondary-color': 'purple',
      },
      description: 'Description for a card with just an icon',
      summary: 'Summary for a card with just an icon. More text. Even more.',
    },
    {
      name: 'Card with icon',
      className: 'test className',
      icon: ['fad', 'server'],
      iconStyle: {
        '--fa-primary-color': 'purple',
        '--fa-secondary-color': 'purple',
      },
      description: 'Description for a card with just an icon',
      summary: 'Summary for a card with just an icon. More text. Even more.',
    },
    {
      name: 'Card with icon',
      className: 'test className',
      icon: ['fad', 'server'],
      iconStyle: {
        '--fa-primary-color': 'purple',
        '--fa-secondary-color': 'purple',
      },
      description: 'Description for a card with just an icon',
      summary: 'Summary for a card with just an icon. More text. Even more.',
    },
    {
      name: 'Card with icon',
      className: 'test className',
      icon: ['fad', 'server'],
      iconStyle: {
        '--fa-primary-color': 'purple',
        '--fa-secondary-color': 'purple',
      },
      description: 'Description for a card with just an icon',
      summary: 'Summary for a card with just an icon. More text. Even more.',
    },

    {
      name: 'Linked Business Card',
      image: '/images/logo_arkea_transparent.png',
      summary:
        'Arkéa has been involved in open banking for several years by providing white label banking services and saw PSD2 as an opportunity to extend their open banking features.',
      href: '/case-studies/arkea',
      company: 'Arkea',
      color: 'orange',
      tag: 'Finance',
    },
    {
      name: 'Linked Business Card',
      image: '/images/logo_namely_transparent.png',
      summary:
        'Namely’s chief objective was to adopt API Design First principles. As they applied their new principle, they realized the importance of reliable, up to date, documentation.',
      href: '/case-studies/namely',
      company: 'Namely',
      color: 'green',
      tag: 'HR',
    },
    {
      name: 'Linked Business Card',
      image: '/images/logo_appointmentplus_transparent.png',
      summary:
        'AppointmentPlus was managing multiple APIs built by different teams, at different times, with different strategies and intents.',
      href: '/case-studies/appointmentplus',
      company: 'AppointmentPlus',
      color: 'blue',
      tag: 'Finance',
    },
    {
      name: 'Quote Business Card no link',
      className: 'test className',
      image: '/images/hudya_logo.png',
      description: 'Description for business card with no link',
      summary:
        'Having all the tools to model, test, and document our API in one place, and integrating it nicely along the entire CI/CD workflow process has been extremely helpful for us.',
      author: 'Evan Callahan',
      role: 'Cloud Architect',
    },
    {
      name: 'Quote Business Card no link',
      className: 'test className',
      image: '/images/appointment_plus_logo.png',
      description: 'Description for business card with no link',
      summary:
        'We really enjoy the modeling feature, helping us define our API before even writing code. Also, the way the modeling feature inherits models from other Projects. Hubs integrates with OAS files, both partials of the entire schema, which is rad.',
      author: 'Josh Flyer',
      role: 'Lead Developer',
    },
    {
      name: 'Quote Business Card no link',
      className: 'test className',
      image: '/images/gft_group_logo.jpg',
      description: 'Description for business card with no link',
      summary: 'Stoplight is getting better all the time. Big leap from [Stoplight] Classic.',
      author: 'Carlos Lozano',
      role: 'Senior Enterprise Architect',
    },
    {
      name: 'Press Card',
      date: 'October, 2018',
      publication: 'Austin Business Journal',
      image: '/images/logo_austin_bj.png',
      summary: 'Austin startup Stoplight raises more than $3 million.',
      href: 'https://www.bizjournals.com/austin/news/2018/10/03/software-startup-raises-more-than-3m-in-round-led.html',
    },
    {
      name: 'Press Card',
      date: 'October, 2018',
      publication: 'Austin Business Journal',
      image: '/images/logo_austin_bj.png',
      summary: 'Austin startup Stoplight raises more than $3 million.',
      href: 'https://www.bizjournals.com/austin/news/2018/10/03/software-startup-raises-more-than-3m-in-round-led.html',
    },
    {
      name: 'Press Card',
      date: 'October, 2018',
      publication: 'Austin Business Journal',
      image: '/images/logo_austin_bj.png',
      summary: 'Austin startup Stoplight raises more than $3 million.',
      href: 'https://www.bizjournals.com/austin/news/2018/10/03/software-startup-raises-more-than-3m-in-round-led.html',
    },
    {
      name: 'Press Card',
      date: 'October, 2018',
      publication: 'Austin Business Journal',
      image: '/images/logo_austin_bj.png',
      summary: 'Austin startup Stoplight raises more than $3 million.',
      href: 'https://www.bizjournals.com/austin/news/2018/10/03/software-startup-raises-more-than-3m-in-round-led.html',
    },
  ];
  return (
    <div className={cn(className, 'flex justify-around flex-wrap')}>
      {sampleCards.map((sampleCard, index) => {
        return (
          <div
            className={
              !sampleCard.image
                ? cn(className, 'mb-12 flex flex-col w-80 text-center justify-between px-5 mt-14 sm:pt-14')
                : cn(
                    className,
                    ' mb-12 w-96 h-80 flex flex-col rounded-lg p-8 pb-6 px-4 shadow bg-white rounded-lg justify-between sm:mb-8 shadow-md'
                  )
            }
          >
            <div
              className={
                !sampleCard.publication
                  ? cn('px-2 py-2 pb-8 flex justify-center items-start m-auto')
                  : cn('mx-auto bg-center h-32 mb-10')
              }
            >
              <Link to={sampleCard.href}>
                {sampleCard.icon && <Icon icon={sampleCard.icon} size="3x" style={sampleCard.iconStyle} />}
                {sampleCard.image && (
                  <div className="max-h-50">
                    <Image
                      className={
                        !sampleCard.publication
                          ? cn(className, 'h-10 text-grey-darkest')
                          : cn(className, 'h-20 text-grey-darkest')
                      }
                      src={sampleCard.image}
                      title={`${sampleCard.company} Logo`}
                      alt={sampleCard.company}
                      size="sm"
                    />
                  </div>
                )}
                {sampleCard.icon && <div className="font-bold text-grey-darkest text-xl mt-5">{sampleCard.name}</div>}

                <div
                  className={
                    !sampleCard.publication
                      ? cn('text-grey-dark font-medium my-5 leading-loose pb-2 mt-4 flex-1')
                      : cn('text-grey-dark font-medium my-10 leading-loose pb-6')
                  }
                >
                  {sampleCard.summary}
                </div>
                {sampleCard.company && sampleCard.href && !sampleCard.icon && (
                  <>
                    <div className="flex items-center mt-6 border-t pt-6">
                      <div className="flex items-center flex-1">
                        <div className="mr-3 font-semibold">Learn More</div>
                        <Icon icon={['fad', 'arrow-right']} />
                      </div>

                      <div className="flex">
                        <div
                          className={`flex items-center text-sm rounded-full border border-${sampleCard.color}-lighter bg-${sampleCard.color}-lightest text-${sampleCard.color} uppercase font-semibold px-4 py-1`}
                        >
                          {icon && <Icon icon={icon} className="mr-3" />} <div>{sampleCard.tag}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {sampleCard.author && (
                  <>
                    <div className="font-bold pb-1 uppercase text-blue">{sampleCard.author}</div>

                    <div>{sampleCard.role}</div>
                  </>
                )}
                {sampleCard.href && !sampleCard.company && (
                  <div className="items-center font-semibold">
                    Learn More
                    <Icon className="pl-2" size="lg" icon={['fad', 'arrow-right']} />
                  </div>
                )}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
