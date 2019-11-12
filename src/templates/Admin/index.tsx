import { ErrorBoundary } from '@stoplight/react-error-boundary';
import CMS from 'netlify-cms-app';
import React from 'react';

import Settings from 'src/components/Settings';
import { About } from 'src/templates/About';
import { Form } from 'src/templates/Form';
import { Home } from 'src/templates/Home';
import { Landing } from 'src/templates/Landing';
import { List } from 'src/templates/Lists';
import { Pricing } from 'src/templates/Pricing';
import { Subpage } from 'src/templates/Subpage';

import { convertMarkdownToHTML } from '../../utils/markdown/index.js';

import { config } from './config';

// @ts-ignore
import previewStyles from '!css-loader!./styles.css';

CMS.registerPreviewStyle(previewStyles, { raw: true });

const templates = {
  settings: Settings,

  form: Form,
  about: About,
  home: Home,
  pricing: Pricing,

  lists: List,
  author: List,
  landings: Landing,

  subpage: Subpage,
  caseStudy: Subpage,
  blogPost: Subpage,
};

Object.keys(templates).forEach(collectionName => {
  const Template = templates[collectionName];

  if (Template) {
    CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
      const props = entry.getIn(['data']).toJS();

      return (
        <ErrorBoundary>
          <Template {...convertMarkdownToHTML(props, { includeToc: props.includeToc })} />;
        </ErrorBoundary>
      );
    });
  }
});

export default () => {
  React.useEffect(() => {
    console.log(`CMS [${process.env.NODE_ENV}]`, CMS, config);

    CMS.init({ config });
  }, []);

  return null;
};
