import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { Icon } from 'src/components/Icon';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTag } from 'src/components/SimpleCard/SimpleCardTag';
import { Title } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';
import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container } from '../../components/Container';
import { CustomerSection } from '../../components/CustomerSection';
import { Features, IFeature } from '../../components/Features';
import { GartnerCoolVendor, IGartnerCoolVendor } from '../../components/GartnerCoolVendor';
import { Hero, IHero } from '../../components/Hero';
import { IImage } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Section } from '../../components/Section';
import { SimpleCard } from '../../components/SimpleCard';

export interface IEnterprise {
  customers?: {
    images: IImage[];
  };
  color: string;
  hero: IHero;
  gartnerCoolVendor: IGartnerCoolVendor;
  actionBar?: IActionBar;
  features: IFeature[];
}

export const Enterprise: React.FunctionComponent<IEnterprise> = ({
  color,
  hero,
  customers,
  gartnerCoolVendor,
  actionBar,
  features,
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} aligned="center" image={hero.image && { ...hero.image, shadow: false }} />

      {features && (
        <Section id="features" className="pt-32 sm:pt-0" noPadding>
          <Container className="flex flex-wrap justify-around">
            {features.map((feature: IFeature, index) => (
              <SimpleCard id={index} className="text-center" iconFeature w="80">
                <Icon icon={['fad', feature.icon]} className="text-center" size="3x" style={feature.iconStyle} />
                <SimpleCardTop>
                  <Title title={feature.name} />
                </SimpleCardTop>
                <SimpleCardBody summary={feature.summary} />
              </SimpleCard>
            ))}
          </Container>
        </Section>
      )}

      {customers && <CustomerSection className="pt-32" noPadding images={customers.images} cardBg="white" />}

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
