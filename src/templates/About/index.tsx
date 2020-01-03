import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Container } from 'src/components/Container';
import { Features } from 'src/components/Features';
import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Businesses, IBusinesses } from '../../components/Businesses';
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
  businesses: IBusinesses;
  pressSection: IPressSection;
  collage: ICollage;
  featureSection: IFeatureSection;
  valueSection: IValueSection;
}

const Member: React.FunctionComponent<IMember> = ({ image, name, role, isLast }) => {
  return (
    <div className={cn('mb-48 -mt-20 px-10 sm:px-0 sm:w-48', { 'sm:mb-24': isLast })}>
      <div className="block text-center shadow bg-white py-10 sm:py-4 px-4 sm:px-0 w-64 sm:w-full rounded-lg">
        <Image
          src={image}
          className="-mt-20 mx-auto rounded-full bg-center bg-contain shadow-sm border-grey border h-32 w-32 mb-10"
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
  businesses,
  team,
  actionBar,
  pressSection,
  collage,
  featureSection,
  valueSection,
}) => {
  return (
    <Layout>
      <Hero key="hero" bgColor={color} greyBg {...hero} />

      <Section noPadding>
        <FeatureStrip features={featureSection.features} />
      </Section>

      {/* commenting out values section while we wait to solidify company values */}
      {/* {valueSection.values && <ValueSection values={valueSection.values} />} */}

      <FeatureSection color={color} {...featureSection}>
        <Container title="Core Values" className="pt-32">
          <Features
            features={[
              {
                name: 'Build Together',
                icon: 'hammer',
                iconStyle: {
                  '--fa-primary-color': 'green',
                  '--fa-secondary-color': 'green',
                },
                summary:
                  'Collaboration is key to our success. Involving others in decision-making increases the amount of data, experience, and perspective to ensure the best path forward.',
              },
              {
                name: 'Be An Owner',
                icon: 'medal',
                iconStyle: {
                  '--fa-primary-color': 'gold',
                  '--fa-secondary-color': 'gold',
                },
                summary:
                  'We do our best work when we feel empowered. When we see an opportunity to make an impact, we seize it.',
              },
              {
                name: 'Practice Mindfulness',
                icon: 'brain',
                iconStyle: {
                  '--fa-primary-color': 'blue',
                  '--fa-secondary-color': 'blue',
                },
                summary:
                  'When interacting with our coworkers, our customers, and our communities we begin where they are, not where we want them to be.',
              },
            ]}
            className="mt-2 sm:mt-6"
          />
        </Container>
      </FeatureSection>

      {team.length ? (
        <div>
          <h3 className="text-center text-3xl pb-48 md:mb-14 sm:pb-10 relative">Meet The Team</h3>
          <div className="bg-grey-lightest z-5 sm:pt-32">
            <div className="container flex flex-wrap justify-center md:justify-around text-center md:px-0">
              {team.map((member, index) => (
                <Member key={index} isLast={index === team.length - 1} {...member} />
              ))}
            </div>
          </div>

          {actionBar && actionBar.enabled ? (
            <div className="md:pb-24 -mt-10">
              <ActionBar {...actionBar} />
            </div>
          ) : null}
        </div>
      ) : null}

      <PressSection id="press" {...pressSection} />

      {/* <Businesses id="businesses" {...businesses} /> */}

      <Collage id="investors" {...collage} />
    </Layout>
  );
};

export default withRouteData(About);
