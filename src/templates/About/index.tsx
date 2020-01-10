import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Container } from 'src/components/Container';
import { SimpleCard } from 'src/components/SimpleCard';
import { Author } from 'src/components/SimpleCard/Author';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { IBusinesses } from '../../components/Businesses';
import { Collage, ICollage } from '../../components/Collage';
import { FeatureSection, FeatureStrip, IFeatureSection } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { IPressSection, PressSection } from '../../components/PressSection';
import { Section } from '../../components/Section';
import { IValueSection, ValueSection } from '../../components/Value';

export interface IMember {
  image: string;
  name: string;
  role: string;
  isLast: boolean;
}

export interface IAbout {
  color: string;
  hero: IHero;
  team: IMember[];
  actionBar: IActionBar;
  businessQuotes: IBusinesses;
  pressSection: IPressSection;
  collage: ICollage;
  featureSection: IFeatureSection;
  valueSection: IValueSection;
}

const Member: React.FunctionComponent<IMember> = ({ image, name, role, isLast }) => {
  return (
    <div className={cn('mb-48 -mt-20 px-10 sm:px-0 sm:w-48', { 'sm:mb-24': isLast })}>
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

export const About: React.FunctionComponent<IAbout> = ({
  color,
  hero,
  businessQuotes,
  team,
  actionBar,
  pressSection,
  collage,
  featureSection,
  valueSection,
  ...sectionProps
}) => {
  return (
    <Layout>
      <Hero key="hero" bgColor={color} greyBg {...hero} />

      <Section noPadding>
        <FeatureStrip features={featureSection.features} />
      </Section>

      {/* commenting out values section while we wait to solidify company values */}
      {/* {valueSection.values && <ValueSection values={valueSection.values} />} */}

      <FeatureSection color={color} {...featureSection} />

      {team.length ? (
        <div>
          <h3 className="relative pb-48 text-3xl text-center md:mb-14 sm:pb-10">Meet The Team</h3>
          <div className="bg-grey-lightest z-5 sm:pt-32">
            <div className="container flex flex-wrap justify-center text-center md:justify-around md:px-0">
              {team.map((member, index) => (
                <Member key={index} isLast={index === team.length - 1} {...member} />
              ))}
            </div>
          </div>

          {actionBar && actionBar.enabled ? (
            <div className="-mt-10 md:pb-24">
              <ActionBar {...actionBar} />
            </div>
          ) : null}
        </div>
      ) : null}

      {/* <PressSection id="press" {...pressSection} /> */}

      {/* TO DO: format this strip */}

      {pressSection.articles && (
        <Section id="press" {...sectionProps}>
          <div className="mb-20 text-3xl font-bold text-center md:mb-14">In The Press</div>
          <Container className="flex flex-wrap justify-center">
            {pressSection.articles.map((press, index) => (
              <SimpleCard key={index} className="w-1/4 px-6 mb-12 text-left">
                <SimpleCardTop className="flex items-start px-2 py-2">
                  <Image
                    src={press.image}
                    title={`${press.publication} Logo`}
                    alt={press.publication}
                    size="sm"
                    className="max-h-50"
                  />
                  <SimpleCardTitle subtitle={press.date} />
                </SimpleCardTop>
                <SimpleCardBody summary={press.description} className="mt-4 mb-5" />
              </SimpleCard>
            ))}
          </Container>
        </Section>
      )}

      {/*TO DO: make sure images and summaries are all evenly lined up*/}
      {businessQuotes.quotes && (
        <Section id="customers" {...sectionProps}>
          <div className="mb-20 text-3xl font-bold text-center md:mb-14">Businesses Love Stoplight</div>
          <Container className="flex flex-wrap justify-between">
            {businessQuotes.quotes.map((business, index) => (
              <SimpleCard key={index} className="text-left w-96">
                <SimpleCardTop className="flex items-start px-2 py-2">
                  <Image
                    src={business.image}
                    title={`${business.company} Logo`}
                    alt={business.company}
                    size="sm"
                    className="max-h-50"
                  />
                </SimpleCardTop>
                <SimpleCardBody summary={business.quote} className="mt-4 mb-5" />
                <SimpleCardBottom className="mb-4">
                  <Author name={business.author} meta={business.role} />
                </SimpleCardBottom>
              </SimpleCard>
            ))}
          </Container>
        </Section>
      )}

      <Collage id="investors" {...collage} />
    </Layout>
  );
};

export default withRouteData(About);
