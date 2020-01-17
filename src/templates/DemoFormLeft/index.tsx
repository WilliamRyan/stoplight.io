import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Collage, ICollage } from '../../components/Collage';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { ITestimonial } from '../../components/Testimonials';
import { ContentBlock } from '../Form/ContentBlock';

export interface IDemoFormLeft {
  hubspot: IHubSpotForm;
  hero: IHero;
  testimonialArray: ITestimonial[];
  collage: ICollage;
}

export const DemoFormLeft: React.FunctionComponent<IDemoFormLeft> = ({ hero, testimonialArray, hubspot, collage }) => {
  return (
    <Layout>
      <div className="border-b-4 border-darken-300">
        {hero && (
          <Hero
            title="Accelerate API Developement by 36%"
            subtitle={hero.subtitle}
            {...hero}
            bottomElem={
              <div className="container relative flex flex-col pb-32 mx-auto -mt-48 border-b-4 pt-80 z-5 border-darken-300">
                <div className="flex flex-row justify-between sm:flex-col-reverse">
                  {testimonialArray && (
                    <ContentBlock className="mr-12 sm:w-100 sm:items-center sm:text-center sm:pr-0">
                      {testimonialArray.map((testimonial, index) => (
                        <NewTestimonial
                          key={index}
                          className="relative items-stretch w-auto max-w-lg mx-auto bg-white rounded-lg shadow-md mb-28 "
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
                      className="w-full h-full max-w-lg px-8 pt-12 pb-5 bg-white rounded-lg "
                      portalId={hubspot.portalId}
                      formId={hubspot.formId}
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

      <Collage id="customers" {...collage} />
    </Layout>
  );
};

export interface INewTestimonial {
  author: string;
  company: string;
  image: string;
  quote: string;
  role: string;
  className?: string;
}

export const NewTestimonial: React.FunctionComponent<INewTestimonial> = ({
  author,
  company,
  image,
  quote,
  role,
  className,
}) => {
  return (
    <div className={cn('flex', className)}>
      <div className="justify-center pb-5 mx-4">
        <Image
          src={image}
          className="container bg-cover rounded-full shadow -mt-14 w-28 h-28 sm:ml-0"
          size="sm"
          useDiv
        />
        <p className="flex-1 mt-5 leading-loose text-center text-grey-darkest">{quote}</p>

        <p className="mt-4 font-extrabold text-center">
          {author}, {role}, {company}
        </p>
      </div>
    </div>
  );
};

export default withRouteData(DemoFormLeft);
