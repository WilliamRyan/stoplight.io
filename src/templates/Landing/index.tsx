import * as React from 'react';
import { withRouteData } from 'react-static';

import { Collage, ICollage } from '../../components/Collage';
import { Container } from '../../components/Container';
import { FeatureSection, FeatureStrip, IFeatureSection } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { IImageCallout, ImageCallout } from '../../components/ImageCallout';
import { Layout } from '../../components/Layout';
import { PricingCard } from '../../components/PricingCard';
import { IRelatedPage, RelatedPages } from '../../components/RelatedPages';
import { Section } from '../../components/Section';

export interface ILanding {
  color: string;
  hero: IHero;
  imageCallout: IImageCallout;
  collage: ICollage;
  featureSection: IFeatureSection;
  hubspot: IHubSpotForm & { title?: string; description?: string };
  relatedPages?: IRelatedPage[];
  pricingSection?: any;
}

export const Landing: React.FunctionComponent<ILanding> = ({
  color,
  hero,
  imageCallout,
  collage,
  featureSection,
  hubspot,
  relatedPages,
  pricingSection,
}) => {
  return (
    <Layout>
      <Hero bgColor={color} {...hero} />

      <ImageCallout {...imageCallout} />

      <Section noPadding>
        <FeatureStrip features={featureSection.features} />
      </Section>

      <FeatureSection color={color} {...featureSection} />

      <Collage className="md:px-0 py-6 md:py-6" noPadding {...collage} />

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

      {pricingSection && (
        <Section id="pricing">
          <Container title={pricingSection.title}>
            <div className="flex justify-around flex-wrap mt-12">
              {pricingSection.cards.map((card, index) => (
                <PricingCard key={index} {...card} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
    </Layout>
  );
};

export default withRouteData(Landing);
