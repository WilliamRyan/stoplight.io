import metaTags from 'src/components/MetaTags/config';
import actionBar from 'src/components/ActionBar/config';
import hubspot from 'src/components/HubSpotForm/config';

export default {
  label: 'Careers',
  label_singular: 'Career',
  name: 'careers',
  folder: 'netlify/careers',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'md',
  fields: [
    {
      name: 'path',
      label: 'URL Path',
      widget: 'string',
    },
    {
      name: 'href',
      label: 'href',
      widget: 'string',
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'list',
      field: { label: 'tag', name: 'tag', widget: 'string' },
    },
    {
      label: 'Related Tags',
      name: 'relatedTags',
      widget: 'list',
      required: false,
      field: { label: 'tag', name: 'tag', widget: 'string', required: false },
    },
    {
      name: 'title',
      label: 'title',
      widget: 'string',
    },
    {
      name: 'subtitle',
      label: 'subtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Title Image',
      name: 'titleImage',
      widget: 'image',
      required: false,
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'string',
      default: 'black',
      required: false,
    },
    hubspot,
    actionBar,
    metaTags,
  ],
};
