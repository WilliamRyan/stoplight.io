import cn from 'classnames';
import * as React from 'react';
import { withRouteData, withSiteData } from 'react-static';

import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';

import { IconName } from '@fortawesome/fontawesome-common-types';
import { Chips } from 'src/components/Chip';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTag } from 'src/components/SimpleCard/SimpleCardTag';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';
import { ITestimonials, Testimonials } from 'src/components/Testimonials';
import { Container, IContainer } from '../../components/Container';
import { Hero, IHero } from '../../components/Hero';
import { Icon } from '../../components/Icon';
import { IImage, Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ProductCard } from '../../components/ProductCard';
import { ISection, Section } from '../../components/Section';
import { SimpleCard } from '../../components/SimpleCard';

export interface IHome {
  color: string;
  hero: IHero;
  testimonials: ITestimonials;
  caseStudies?: ICaseStudyCard[];
  features: IFeature[];
  customers: ICustomerSection;
}

interface ICustomerSection extends ISection {
  images: IImage[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
  cardBg?: string;
}

interface ICaseStudyCard {
  href: string;
  company: string;
  image: string;
  tag: string;
  description: string;
  color: string;
}

interface IFeature {
  name: string;
  icon: IconName;
  iconStyle: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
  description: string;
  href?: string;
}

export const Home: React.FunctionComponent<IHome> = ({
  color,
  hero,
  caseStudies,
  testimonials,
  features,
  customers,
  ...sectionProps
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} bottomElem={<ProductCards className="pt-24 sm:pt-6" />} />
      {features && (
        <Section id="features" className="pt-32" noPadding>
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
                  <SimpleCard
                    key={index}
                    className="items-center px-5 text-center w-80 mt-14 sm:pt-14"
                    href={feature.href}
                  >
                    <Icon icon={['fad', feature.icon]} className="text-center" size="3x" style={feature.iconStyle} />
                    <SimpleCardTop className="mt-5 text-xl font-bold text-center text-grey-darkest">
                      <SimpleCardTitle title={feature.name} />
                    </SimpleCardTop>
                    <SimpleCardBody
                      description={feature.description}
                      className="my-2 font-medium leading-loose text-grey-dark"
                    />
                    <SimpleCardBottom className="text-center">
                      <SimpleCardTag text="Learn More" className="items-center font-semibold" />
                    </SimpleCardBottom>
                  </SimpleCard>
                ))}
              </div>
            )}
          </Container>
        </Section>
      )}
      {caseStudies && (
        <Section id="case-studies" {...sectionProps}>
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
                      className="h-10"
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
              <div key={key} className="pt-8 text-center sm:w-1/2 sm:p-6">
                <Image className="h-8" src={image.src} title={`${image.alt} Logo`} alt={image.alt} size="sm" />
              </div>
            ))}
          </div>
        </Section>
      )}

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
