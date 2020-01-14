import cn from 'classnames';
import * as React from 'react';

import { Container, IContainer } from '../Container';
import { Icon, IconProp } from '../Icon';
import { IImage, Image } from '../Image';
import { Link } from '../Link';
import { ISection, Section } from '../Section';

export interface ICustomerSection extends ISection {
  images: IImage[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
  cardBg?: string;
}

export const CustomerSection: React.FunctionComponent<ICustomerSection> = ({
  images,
  title,
  cta,
  cardBg,
  ...sectionProps
}) => {
  if (!images || !images.length) {
    return null;
  }

  return (
    <Section id="customers" {...sectionProps}>
      <Container
        chips={{
          className: 'justify-center mb-10',
          segments: [{ color: 'indigo-light', length: 2 }, { color: 'indigo-dark', length: 3 }, { color: 'indigo' }],
        }}
      >
        <div className="text-lg font-semibold text-center uppercase text-grey-dark">
          Stoplight powers some of the world's leading API first companies
        </div>

        <div className="flex flex-wrap items-center justify-between sm:justify-center mt-14">
          <CaseStudyCard
            href="/case-studies/arkea"
            company="Arkea"
            image="/images/logo_arkea_transparent.png"
            summary="Arkéa has been involved in open banking for several years by providing white label banking services and saw PSD2 as an opportunity to extend their open banking features."
            tag="Finance"
            color="orange"
            bg={cardBg}
          />

          <CaseStudyCard
            href="/case-studies/namely"
            company="Namely"
            image="/images/logo_namely_transparent.png"
            summary="Namely’s chief objective was to adopt API Design First principles. As they applied their new principle, they realized the importance of reliable, up to date, documentation."
            tag="HR"
            color="indigo"
            bg={cardBg}
          />

          <CaseStudyCard
            href="/case-studies/appointmentplus"
            company="AppointmentPlus"
            image="/images/logo_appointmentplus_transparent.png"
            summary="AppointmentPlus was managing multiple APIs built by different teams, at different times, with different strategies and intents."
            tag="Tech"
            color="green"
            bg={cardBg}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between px-6 mt-10">
          {images.map((image, key) => (
            <div key={key} className="py-8 text-center sm:w-1/2 sm:p-6">
              <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} size="sm" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export interface ICaseStudyCard {
  href: string;
  company: string;
  image: string;
  tag: string;
  summary: string;
  color: string;
  bg?: string;
  icon?: IconProp;
}

const CaseStudyCard = ({ company, image, color, summary, href, tag, icon, bg = 'white' }: ICaseStudyCard) => {
  return (
    <Link
      className={cn(`bg-${bg}`, 'w-96 h-80 flex flex-col rounded-lg p-8 pb-6 sm:mb-8 shadow-md hover-scale')}
      to={href}
    >
      <div>
        <Image className="h-10 text-grey-darkest" src={image} title={`${company} Logo`} alt={company} size="sm" />
      </div>

      <div className="flex-1 mt-4 leading-loose text-grey-darker">{summary}</div>

      <div className="flex items-center pt-6 mt-6 border-t">
        <div className="flex items-center flex-1">
          <div className="mr-3 font-semibold">Read</div>
          <Icon icon={['fad', 'arrow-right']} />
        </div>

        <div className="flex">
          <div
            className={`flex items-center text-sm rounded-full border border-${color}-lighter bg-${color}-lightest text-${color} uppercase font-semibold px-4 py-1`}
          >
            {icon && <Icon icon={icon} className="mr-3" />} <div>{tag}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
