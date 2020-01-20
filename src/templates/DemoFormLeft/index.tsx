import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Chips } from 'src/components/Chip';
import { Container } from 'src/components/Container';
import { IFeature } from 'src/components/Features';
import { Icon, IconProp, IIcon } from 'src/components/Icon';
import { Section } from 'src/components/Section';
import { Collage, ICollage } from '../../components/Collage';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ITestimonial, ITestimonials, Testimonial } from '../../components/Testimonials';
import { ContentBlock } from '../Form/ContentBlock';

export interface IDemoFormLeft {
  hubspot: IHubSpotForm;
  hero: IHero;
  testimonialArray: ITestimonial[];
  collage: ICollage;
  testimonials: ITestimonials;
  features: IFeature[];
}

export const DemoFormLeft: React.FunctionComponent<IDemoFormLeft> = ({
  hero,
  features,
  testimonials,
  hubspot,
  collage,
}) => {
  return (
    <Layout>
      <div className="border-b-4 border-darken-300">
        {hero && (
          <Hero
            title=""
            subtitle={hero.subtitle}
            {...hero}
            bottomElem={
              <div className="container relative flex flex-col mx-auto border-b-4 z-5 border-darken-300">
                <div className="flex flex-row justify-between sm:flex-col-reverse">
                  <ContentBlock className="mr-12 sm:w-100 sm:items-center sm:text-center sm:pr-0">
                    <h1 className="text-5xl text-left text-white">Accelerate API Developement by 36%</h1>
                    <h2 className="mt-12 text-grey">
                      On average, adopting Stoplight results in a 36% gain in API development efficiency, and increases
                      API quality by 30%.
                    </h2>
                  </ContentBlock>
                  <ContentBlock className="flex flex-wrap justify-center w-full h-full max-w-lg sm:w-full sm:content-center -mb-96">
                    <HubSpotForm
                      className="w-full h-full max-w-lg px-8 pt-12 pb-5 bg-white rounded-lg "
                      portalId={hubspot.portalId}
                      // formId={hubspot.formId}
                      formId="4ab5afee-8d6b-4f00-84a8-bd144e6ed733"
                      style={{ top: 100 }}
                    >
                      <div className="pb-12 text-4xl font-bold leading-tight text-center text-grey-darkest sm:pt-14 md:text-4xl">
                        Request a Demo
                      </div>
                    </HubSpotForm>
                  </ContentBlock>
                </div>
              </div>
            }
          />
        )}
      </div>
      <div className="container pt-12">
        <h2 className="mb-10">Stoplight's tools impact the entire API Lifecycle</h2>
        {features &&
          features.map((feature, index) => (
            <div className="flex flex-row mb-12">
              <Icon icon={['fad', feature.icon]} size="2x" style={feature.iconStyle} className="mr-12" />
              <h3 className="w-96">{feature.summary}</h3>
            </div>
          ))}
      </div>
      <Section noPaddingB>
        <Chips
          className="justify-center mb-32"
          segments={[
            { color: 'orange-light', length: 2 },
            { color: 'orange-dark', length: 3 },
          ]}
        />
        <Container title="API First Companies Love Us">
          <div className="container flex flex-wrap">
            {testimonials &&
              testimonials.testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  image={testimonial.image}
                  author={testimonial.author}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  role={testimonial.role}
                />
              ))}
          </div>
        </Container>

        <Chips
          className="justify-center"
          segments={[{ color: 'blue-light', length: 2 }, { color: 'blue-dark', length: 4 }, { color: 'blue' }]}
        />

        <Collage id="customers" {...collage} />
      </Section>
    </Layout>
  );
};

export default withRouteData(DemoFormLeft);
