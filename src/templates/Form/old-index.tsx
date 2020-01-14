import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { Container } from '../../components/Container';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Layout } from '../../components/Layout';
import { IRelatedPage, RelatedPages } from '../../components/RelatedPages';
import { ITestimonials, Testimonials } from '../../components/Testimonials';

export interface IForm {
  title: string;
  subtitle: string;
  color: string;
  hubspot: IHubSpotForm;
  collage: ICollage;
  testimonials: ITestimonials;
  titleImage?: string;
  relatedPages?: IRelatedPage[];
  actionBar: IActionBar;
  leftContent?: {
    title: string;
    description: string;
  };
  centerContent?: {
    title: string;
    description: string;
  };
  hero?: IHero;
}

export const Form: React.FunctionComponent<IForm> = ({
  titleImage,
  title,
  subtitle,
  color,
  leftContent,
  hubspot,
  collage,
  testimonials,
  relatedPages,
  actionBar,
  centerContent,
  hero,
}) => {
  const hasLeftContent = leftContent && leftContent.description ? true : false;
  const hasCenterContent = centerContent && centerContent.description ? true : false;
  return (
    <Layout>
      <Hero
        titleImage={titleImage}
        title={title}
        subtitle={subtitle}
        bgColor={color}
        aligned={hasLeftContent || titleImage ? 'left' : 'center'}
        {...hero}
      />

      <Container className="flex relative z-20 py-24 md:flex-wrap-reverse">
        {hasLeftContent && (
          <div className="w-2/3 pr-4 md:w-full md:pr-0 flex-1">
            {leftContent && leftContent.title && (
              <div className="text-3xl" dangerouslySetInnerHTML={{ __html: leftContent.title }} />
            )}

            {leftContent && leftContent.description && (
              <div
                className={cn('markdown-body', leftContent.title ? 'mt-10' : '')}
                dangerouslySetInnerHTML={{ __html: leftContent.description }}
              />
            )}
          </div>
        )}

        {hasCenterContent && (
          <div className="flex md:pr-0 md:w-full mx-auto">
            {centerContent && centerContent.description && (
              <div className={'markdown-body mt-10'} dangerouslySetInnerHTML={{ __html: centerContent.description }} />
            )}
          </div>
        )}

        {hubspot && hasLeftContent && (
          <div className={'z-10 relative md:w-full'}>
            <HubSpotForm
              className={'p-8 w-128 sm:w-auto sticky'}
              portalId={hubspot.portalId}
              formId={hubspot.formId}
              style={{ top: 100 }}
            />
          </div>
        )}

        {hubspot && !hasLeftContent && !hasCenterContent && (
          <div className={'flex-1 -mt-40'}>
            <HubSpotForm
              className={'p-8 sticky'}
              portalId={hubspot.portalId}
              formId={hubspot.formId}
              style={{ top: 100 }}
            />
          </div>
        )}
      </Container>

      <section />

      <Testimonials {...testimonials} />

      <Collage id="customers" {...collage} />

      {actionBar && <ActionBar className="my-24" {...actionBar} />}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </Layout>
  );
};

export default withRouteData(Form);
