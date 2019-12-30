import * as React from 'react';
import NoSSR from 'react-no-ssr';
import { withRouteData } from 'react-static';

import { ICollage } from '../../components/Collage';
import { FeatureSection, FeatureStrip, IFeatureSection } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { IImageCallout } from '../../components/ImageCallout';
import { Layout } from '../../components/Layout';
import { IRelatedPage, RelatedPages } from '../../components/RelatedPages';
import { Section } from '../../components/Section';

const Sandbox = React.lazy(() => import('../../components/Sandbox'));

export interface ILanding {
  color: string;
  hero: IHero;
  imageCallout: IImageCallout;
  collage: ICollage;
  featureSection: IFeatureSection;
  hubspot: IHubSpotForm & { title?: string; description?: string };
  relatedPages?: IRelatedPage[];
  hasSandbox?: boolean;
}

export const Landing: React.FunctionComponent<ILanding> = ({
  color,
  hero,
  featureSection,
  hubspot,
  relatedPages,
  hasSandbox,
}) => {
  return (
    <Layout>
      <Hero
        bgColor={color}
        {...hero}
        containerClassName={hasSandbox ? 'pb-16' : ''}
        bottomElem={
          hasSandbox && (
            <NoSSR>
              <React.Suspense fallback={<div />}>
                <Sandbox />
              </React.Suspense>
            </NoSSR>
          )
        }
      />
      <Section noPadding>
        <FeatureStrip features={featureSection.features} />
      </Section>

      <FeatureSection color={color} {...featureSection} />

      {hubspot && (
        <Section key="hubspot" id="demo">
          <div className="container flex items-center justify-center">
            <div className="w-full">
              {hubspot.title && <h2 className="text-3xl text-center">{hubspot.title}</h2>}

              {hubspot.description && (
                <div className="flex justify-center flex-wrap items-center pb-12 md:pb-12">
                  <div
                    className="font-default opacity-75 text-xl max-w-lg mt-4 md:mt-6 mx-auto text-center"
                    dangerouslySetInnerHTML={{ __html: hubspot.description }}
                  />
                </div>
              )}

              <HubSpotForm className="p-16 md:p-4" portalId={hubspot.portalId} formId={hubspot.formId} />
            </div>
          </div>
        </Section>
      )}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </Layout>
  );
};

export default withRouteData(Landing);
