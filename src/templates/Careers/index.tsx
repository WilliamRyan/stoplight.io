import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Container } from '../../components/Container';
import { Hero, IHero } from '../../components/Hero';
import { HubSpotForm, IHubSpotForm } from '../../components/HubSpotForm';
import { Layout } from '../../components/Layout';
import { IRelatedPage, RelatedPages } from '../../components/RelatedPages';
import { Section } from '../../components/Section';
import { convertMarkdownToHTML } from '../../utils/markdown/index.js';

export interface ICareer {
  title: string;
  subtitle: string;
  color: string;
  hubspot: IHubSpotForm;
  actionBar: IActionBar;
  hero: IHero;
  body: string;
  titleImage?: string;
  relatedPages?: IRelatedPage[];
}

export const Career: React.FunctionComponent<ICareer> = ({
  titleImage,
  title,
  subtitle,
  color,
  hubspot,
  relatedPages,
  actionBar,
  hero,
  body,
}) => {
  const heroProps: IHero = {
    ...hero,
    title,
    subtitle,
    bgColor: color,
    titleImage,
  };

  const html = convertMarkdownToHTML(body, { includeToc: false });

  return (
    <Layout>
      <Hero {...heroProps} />

      <Section noPadding>
        <Container className="flex relative z-20 py-24 md:flex-wrap-reverse">
          <div className="w-2/3 pr-4 md:w-full md:pr-0 flex-1">
            <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
          </div>

          {hubspot && (
            <div className={'z-10 relative md:w-full'}>
              <HubSpotForm
                className={'p-8 w-128 sm:w-auto sticky'}
                portalId={hubspot.portalId}
                formId={hubspot.formId}
                style={{ top: 120 }}
              />
            </div>
          )}
        </Container>
      </Section>

      <Section>
        {actionBar && <ActionBar className="my-12" {...actionBar} />}

        {relatedPages && relatedPages.length ? <RelatedPages pages={relatedPages} /> : null}
      </Section>
    </Layout>
  );
};

export default withRouteData(Career);
