import * as React from 'react';
import { withRouteData } from 'react-static';

import { Chips } from 'src/components/Chip';
import { Container } from 'src/components/Container';
import { Section } from 'src/components/Section';
import { Collage, ICollage } from '../../components/Collage';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Layout } from '../../components/Layout';
import { ITestimonials, Testimonial, Testimonials } from '../../components/Testimonials';
import { ContentBlock } from '../Form/ContentBlock';

export interface IDemoFormCenter {
  hubspot: IHubSpotForm;
  hero: IHero;
  testimonials: ITestimonials;
  collage: ICollage;
}

export const DemoFormCenter: React.FunctionComponent<IDemoFormCenter> = ({ hero, testimonials, hubspot, collage }) => {
  return (
    <Layout>
      <div className="border-b-4 border-darken-300">
        {hero && (
          <Hero
            title="Accelerate API Developement by 36%"
            subtitle={hero.subtitle}
            {...hero}
            bottomElem={
              <div className="container relative pb-32 mx-auto pt-80 z-5">
                <ContentBlock className="container justify-center w-full h-full sm:w-full sm:content-center">
                  <HubSpotForm
                    className="w-full h-full max-w-lg p-8 pt-12 -mt-64 bg-white rounded-lg"
                    portalId={hubspot.portalId}
                    formId="4ab5afee-8d6b-4f00-84a8-bd144e6ed733"
                    style={{ top: 100 }}
                  />
                </ContentBlock>
              </div>
            }
          />
        )}
      </div>
      <Section noPaddingB>
        <Chips
          className="justify-center mb-20"
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
                  image={testimonial.image}
                  author={testimonial.author}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  role={testimonial.role}
                />
              ))}
            )
          </div>
        </Container>

        <Chips
          className="justify-center"
          segments={[{ color: 'purple-light', length: 2 }, { color: 'purple-dark', length: 4 }, { color: 'purple' }]}
        />
        <Collage id="customers" {...collage} />
      </Section>
    </Layout>
  );
};

export default withRouteData(DemoFormCenter);
