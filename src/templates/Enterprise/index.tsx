import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { Chips, IChips } from 'src/components/Chip';
import { Icon } from 'src/components/Icon';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTag } from 'src/components/SimpleCard/SimpleCardTag';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';
import { ICaseStudyCard, ICustomerSection, IFeature } from 'src/types';
import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container } from '../../components/Container';
import { GartnerCoolVendor, IGartnerCoolVendor } from '../../components/GartnerCoolVendor';
import { Hero, IHero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';
import { SimpleCard } from '../../components/SimpleCard';

export interface IEnterprise {
  color: string;
  hero: IHero;
  gartnerCoolVendor: IGartnerCoolVendor;
  actionBar?: IActionBar;
  features: IFeature[];
  caseStudies?: ICaseStudyCard[];
  chips?: IChips;
  customers: ICustomerSection;
}

export const Enterprise: React.FunctionComponent<IEnterprise> = ({
  color,
  hero,
  caseStudies,
  gartnerCoolVendor,
  actionBar,
  features,
  chips,
  customers,
  ...sectionProps
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} aligned="center" image={hero.image && { ...hero.image, shadow: false }} />

      {features && (
        <Section id="features" className="pt-32 sm:pt-0" noPadding>
          <Container className="flex flex-wrap justify-around">
            {features.map((feature: IFeature, index) => (
              <SimpleCard key={index} className="items-center text-center w-80 mt-14">
                <Icon icon={['fad', feature.icon]} className="text-center" size="3x" style={feature.iconStyle} />
                <SimpleCardTop className="mt-5 text-xl font-bold text-center text-grey-darkest">
                  <SimpleCardTitle title={feature.name} />
                </SimpleCardTop>
                <SimpleCardBody
                  className="my-2 font-medium leading-loose text-grey-dark"
                  description={feature.description}
                />
              </SimpleCard>
            ))}
          </Container>
        </Section>
      )}

      {caseStudies && (
        <Section id="features" {...sectionProps} noPaddingB>
          <Chips
            className="justify-center mb-10"
            segments={[{ color: 'indigo-light', length: 2 }, { color: 'indigo-dark', length: 3 }, { color: 'indigo' }]}
          />
          <div className="text-lg font-semibold text-center uppercase text-grey-dark">
            Stoplight powers some of the world's leading API first companies
          </div>
          <Container className="flex flex-wrap items-center justify-between sm:justify-center mt-14">
            {caseStudies.map((caseStudy, index) => (
              <SimpleCard key={index} className="p-8 pb-6 bg-white w-96 h-80 sm:mb-8" hoverable href={caseStudy.href}>
                <SimpleCardTop>
                  <div>
                    <Image
                      src={caseStudy.image}
                      title={`${caseStudy.company} Logo`}
                      alt={caseStudy.company}
                      className="h-10 text-grey-darkest"
                    />
                  </div>
                </SimpleCardTop>
                <SimpleCardBody
                  description={caseStudy.description}
                  className="flex-1 mt-4 leading-loose text-grey-darker"
                />
                <SimpleCardBottom className="flex items-center mt-6 mb-3 border-t">
                  <SimpleCardTag tag={caseStudy.tag} text="Read" color={caseStudy.color} className="mt-8 text-center" />
                </SimpleCardBottom>
              </SimpleCard>
            ))}
          </Container>
          <div className="flex flex-wrap items-center justify-around px-20 mt-10">
            {customers.images.map((image, key) => (
              <div key={key} className="py-8 text-center sm:w-1/2 sm:p-6">
                <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} size="sm" />
              </div>
            ))}
          </div>
        </Section>
      )}

      {gartnerCoolVendor && <GartnerCoolVendor className="pt-32" noPadding {...gartnerCoolVendor} />}

      {actionBar && (
        <Section>
          <ActionBar {...actionBar} />
        </Section>
      )}
    </Layout>
  );
};

export default withSiteData(withRouteData(Enterprise));
