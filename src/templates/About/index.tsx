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

import { IBusinesses, IPressSection } from 'src/types';
import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { FeatureSection, FeatureStrip, IFeatureSection } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';
import { IValueSection } from '../../components/Value';

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

      {pressSection.articles && (
        <Section id="press" {...sectionProps}>
          <div className="mb-20 text-3xl font-bold text-center md:mb-14">In The Press</div>
          <Container className="flex flex-wrap justify-center" cta={pressSection.cta}>
            {pressSection.articles.map((press, index) => (
              <SimpleCard key={index} className="flex px-6 mb-12 w-80">
                <div className="h-64 px-6 pb-6 bg-white rounded-lg shadow cursor-pointer text-grey-darker hover:bg-grey-lightest">
                  <SimpleCardTop className="flex items-start h-10 px-2 py-10">
                    <div className="flex items-start items-center justify-center h-32">
                      <Image
                        src={press.image}
                        title={`${press.publication} Logo`}
                        alt={press.publication}
                        size="sm"
                        className="h-10"
                      />
                    </div>

                    <SimpleCardTitle subtitle={press.date} className="mt-3 mb-3 font-bold uppercase" />
                  </SimpleCardTop>
                  <SimpleCardBody description={press.description} className="flex-1 mb-5 mt-14" />
                </div>
              </SimpleCard>
            ))}
          </Container>
        </Section>
      )}

      {businessQuotes.quotes && (
        <Section id="customers" {...sectionProps}>
          <div className="mb-20 text-3xl font-bold text-center md:mb-14">Businesses Love Stoplight</div>
          <Container className="flex flex-wrap justify-center -mb-12">
            {businessQuotes.quotes.map((business, index) => (
              <SimpleCard key={index} className="flex flex-col px-6 py-8 mx-5 mb-12 bg-white rounded-lg shadow w-96">
                <SimpleCardTop className="flex items-start px-2 py-2">
                  <div className="flex items-start justify-center h-12 px-2 py-2 pb-8 m-auto">
                    <Image
                      src={business.image}
                      title={`${business.company} Logo`}
                      alt={business.company}
                      size="sm"
                      className="h-12"
                    />
                  </div>
                </SimpleCardTop>
                <SimpleCardBody description={business.description} className="flex-1 mt-4 mb-5" />
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
