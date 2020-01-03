import cn from 'classnames';
import * as React from 'react';

import { slugify } from '../../utils/slugify';
import { ActionBar, IActionBar } from '../ActionBar';
import { Button, IButton } from '../Button';
import { Container } from '../Container';
import { Icon } from '../Icon';
import { Image } from '../Image';
import { Link } from '../Link';
import { ISection, Section } from '../Section';

export interface IFeature {
  title: string;
  shortName: string;
  titleURL: string;
  description: string;
  image: string;
  isReversed: boolean;
  titleColor: string;
  isLast: boolean;
}

export interface IFeatureSection extends ISection {
  title: string;
  description: string;
  color: string;
  features: IFeature[];
  actionBar: IActionBar;
  buttons: IButton[];
}

export const Feature: React.FunctionComponent<IFeature> = props => {
  const { title, titleURL, description, image, isReversed, titleColor, isLast } = props;

  return (
    <div
      id={slugify(title)}
      key="content"
      className={cn('flex items-center py-12 sm:pb-0', {
        'flex-row': !isReversed,
        'flex-row-reverse': isReversed,
      })}
    >
      <div
        className={cn('flex flex-col flex-1 w-1/2 sm:w-100 sm:items-center sm:text-center', {
          'pr-24 sm:pr-0': !isReversed,
          'pl-18 sm:pl-0': isReversed,
        })}
      >
        <h2 className={cn('max-w-sm mb-10 text-3xl', `text-${titleColor || 'grey-darkest'}`)}>
          {titleURL ? (
            <Link to={titleURL} className={`text-${titleColor || 'grey-darkest'}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div
          className={cn('mb-12 pb-12 sm:pb-0 max-w-md leading-loose text-lg', {
            'sm:mb-0': isLast,
          })}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="flex-1 w-1/2 sm:hidden relative">
        <Image
          src={image}
          className={cn('bg-center bg-cover bg-no-repeat h-128 w-128 rounded-full', { 'ml-auto': !isReversed })}
          style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)' }}
          useDiv
        />
      </div>
    </div>
  );
};

export interface IFeatureStrip {
  features: Array<{
    shortName: string;
    title?: string;
  }>;
}

export const FeatureStrip = ({ features }: IFeatureStrip) => {
  return (
    <div className="bg-blue-darkest shadow py-4 text-white whitespace-no-wrap overflow-auto">
      <div className="container flex items-center justify-around flex-no-wrap sm:justify-start">
        {features.map((feature, key) => (
          <a
            key={key}
            href={`#${slugify(feature.title)}`}
            className="flex items-center justify-center py-2 px-4 hover:bg-lighten-50 rounded-lg text-white font-semibold"
          >
            <Icon className="text-lg" icon={['fad', 'check-circle']} />
            <div className="ml-3">{feature.shortName}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export const FeatureSection: React.FunctionComponent<IFeatureSection> = ({
  title,
  description,
  color,
  features,
  actionBar,
  buttons = [],
  children,
  ...sectionProps
}) => {
  if (!features || !features.length) {
    return null;
  }

  return (
    <Section id="product" {...sectionProps} className="pb-32" noPadding>
      {(title || description) && (
        <Container title={title} className={cn(!buttons || !buttons.length ? 'py-32 border-b' : null)}>
          {description && (
            <div
              className="flex leading-loose text-lg text-center max-w-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </Container>
      )}
      {children}
      {buttons && buttons.length ? (
        <Container className="mt-20 border-b">
          <div className="flex-1 flex lg:justify-center lg:items-between lg:flex-wrap">
            {buttons.map((button, index) => (
              <Button key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...button} />
            ))}
          </div>
        </Container>
      ) : null}

      <Container className="mx-auto pt-16">
        {features.map((feature, index) => (
          <Feature
            key={index}
            titleColor={color}
            {...feature}
            isReversed={index % 2 !== 0}
            isLast={index === features.length - 1}
          />
        ))}
      </Container>

      <ActionBar className="sm:mt-14 mt-20" {...actionBar} />
    </Section>
  );
};
