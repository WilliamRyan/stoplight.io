import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';

import { IFeature } from 'src/components/Features';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTag } from 'src/components/SimpleCard/SimpleCardTag';
import { Title } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';
import { Container } from '../../components/Container';
import { CustomerSection } from '../../components/CustomerSection';
import { Hero, IHero } from '../../components/Hero';
import { Icon } from '../../components/Icon';
import { IImage } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ProductCard } from '../../components/ProductCard';
import { Section } from '../../components/Section';
import { SimpleCard } from '../../components/SimpleCard';
import { ITestimonials, Testimonials } from '../../components/Testimonials';

export interface IHome {
  color: string;
  hero: IHero;
  testimonials: ITestimonials;
  customers?: {
    images: IImage[];
  };
  features: IFeature[];
}

export const Home: React.FunctionComponent<IHome> = ({ color, hero, customers, testimonials, features }) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} bottomElem={<ProductCards className="pt-24 sm:pt-6" />} />
      {features && (
        <Section className="pt-32" noPadding>
          <Container
            chips={{
              className: 'justify-center mb-10',
              segments: [{ color: 'blue-lighter', length: 2 }, { color: 'blue' }],
            }}
          >
            <div className="text-lg font-semibold text-center uppercase text-grey-dark">
              Quality APIs Don't Just Happen
            </div>
            {features && (
              <div className="flex flex-wrap justify-around">
                {features.map((feature, index) => (
                  <SimpleCard id={index} className="text-center" iconFeature w="80" href={feature.href}>
                    <Icon icon={['fad', feature.icon]} className="text-center" size="3x" style={feature.iconStyle} />
                    <SimpleCardTop>
                      <Title title={feature.name} />
                    </SimpleCardTop>
                    <SimpleCardBody summary={feature.summary} />
                    <SimpleCardBottom className="text-center">
                      <SimpleCardTag text="Learn More" className="mt-3 text-center" />
                    </SimpleCardBottom>
                  </SimpleCard>
                ))}
              </div>
            )}
          </Container>
        </Section>
      )}
      {customers && <CustomerSection images={customers.images} />}

      <Testimonials {...testimonials} />
    </Layout>
  );
};

export default withSiteData(withRouteData(Home));

const ProductCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'container relative z-5 flex justify-between text-left sm:flex-col sm:items-center')}>
      <ProductCard
        tag="design"
        name="Stoplight Studio"
        title="Next gen editor for API design & technical docs"
        description="Stoplight Studio turns you into an API Design superhero. Create OpenAPI 10x faster, with no prior knowledge and fewer mistakes."
        color="blue"
        icon={['fad', 'paint-brush-alt']}
        className="w-1/2 mx-3 bg-white bg-grey-lightest sm:w-full sm:mb-6"
        href="/studio"
        image="/images/studio-glimpse.png"
      />

      <ProductCard
        tag="scale"
        name="Stoplight Enterprise"
        title="API design management at scale"
        description="The Stoplight Platform increases consistency, visibility, and quality across your internal and external APIs."
        color="orange"
        icon={['fad', 'chart-network']}
        className="w-1/2 mx-3 bg-white sm:w-full"
        href="/enterprise"
        image="/images/platform-glimpse.png"
      />
    </div>
  );
};
