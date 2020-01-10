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
import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container } from '../../components/Container';
import { ICaseStudyCard } from '../../components/CustomerSection';
import { Features, IFeature } from '../../components/Features';
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
  customers?: ICaseStudyCard[];
  chips?: IChips;
}

export const Enterprise: React.FunctionComponent<IEnterprise> = ({
  color,
  hero,
  customers,
  gartnerCoolVendor,
  actionBar,
  features,
  chips,
  ...sectionProps
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} aligned="center" image={hero.image && { ...hero.image, shadow: false }} />

      {features && (
        <Section id="features" className="pt-32 sm:pt-0" noPadding>
          <Container className="flex flex-wrap justify-around">
            {features.map((feature: IFeature, index) => (
              <SimpleCard key={index} className="text-center" iconFeature w="80">
                <Icon icon={['fad', feature.icon]} className="text-center" size="3x" style={feature.iconStyle} />
                <SimpleCardTop>
                  <SimpleCardTitle title={feature.name} />
                </SimpleCardTop>
                <SimpleCardBody className="my-2" summary={feature.summary} />
              </SimpleCard>
            ))}
          </Container>
        </Section>
      )}

      {customers && (
        <Section id="customers" {...sectionProps}>
          <Chips
            className="justify-center mb-10"
            segments={[{ color: 'indigo-light', length: 2 }, { color: 'indigo-dark', length: 3 }, { color: 'indigo' }]}
          />
          <div className="text-lg font-semibold text-center uppercase text-grey-dark">
            Stoplight powers some of the world's leading API first companies
          </div>
          <Container className="flex flex-wrap justify-between">
            {customers.map((customer, index) => (
              <SimpleCard key={index} className="text-left w-96 h-80" hoverable href={customer.href}>
                <SimpleCardTop>
                  <Image
                    src={customer.image}
                    title={`${customer.company} Logo`}
                    alt={customer.company}
                    size="sm"
                    className="w-2/5 h-10"
                  />
                </SimpleCardTop>
                <SimpleCardBody summary={customer.summary} className="mt-5" />
                <SimpleCardBottom className="flex items-center pt-6 mt-6 border-t">
                  <SimpleCardTag tag={customer.tag} text="Read" color={customer.color} className="text-center" />
                </SimpleCardBottom>
              </SimpleCard>
            ))}
          </Container>
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
