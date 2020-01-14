import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Collage, ICollage } from '../../components/Collage';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Layout } from '../../components/Layout';
import { ITestimonial, Testimonial } from '../../components/Testimonials';
import { ContentBlock } from './ContentBlock';
import { LeftContentForm } from './LeftContentForm';

export interface IDemoForm {
  hubspot: IHubSpotForm;
  hero: IHero;
  testimonials: ITestimonial[];
  collage: ICollage;
}

export const DemoForm: React.FunctionComponent<IDemoForm> = ({ hero, testimonials, hubspot, collage }) => {
  return (
    <Layout>
      {hero && (
        <Hero
          title={hero.title}
          subtitle={hero.subtitle}
          {...hero}
          bottomElem={
            <div className="container relative pb-64 mx-auto -mt-64 pt-80 z-5">
              <LeftContentForm className="">
                {testimonials && (
                  <ContentBlock className="w-auto pr-24 sm:w-100 sm:items-center sm:text-center sm:pr-0">
                    {testimonials.map((testimonial, index) => (
                      <Testimonial
                        key={index}
                        className="flex pb-20 px-14 sm:px-0 sm:px-10 sm:w-full sm:justify-end"
                        image={testimonial.image}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        company={testimonial.company}
                        role={testimonial.role}
                      />
                    ))}
                  </ContentBlock>
                )}
                <ContentBlock className="flex flex-wrap justify-center w-full h-full max-w-lg sm:w-full sm:content-center">
                  <HubSpotForm
                    className="w-full h-full max-w-lg p-8 pt-12 bg-white rounded-lg "
                    portalId={hubspot.portalId}
                    formId={hubspot.formId}
                    style={{ top: 100 }}
                  >
                    <div className="pb-12 text-4xl font-bold leading-tight text-center text-grey-darkest sm:pt-14 md:text-4xl">
                      Request a Demo
                    </div>
                  </HubSpotForm>
                </ContentBlock>
              </LeftContentForm>
            </div>
          }
        />
      )}

      <Collage id="customers" {...collage} />
    </Layout>
  );
};

export default withRouteData(DemoForm);
