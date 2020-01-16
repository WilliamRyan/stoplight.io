import hero from 'src/components/Hero/config';
import metaTags from 'src/components/MetaTags/config';

import collage from 'src/components/Collage/config';
import imageCallout from 'src/components/ImageCallout/config';
import testimonials from 'src/components/Testimonials/config';
import gartnerCoolVendor from 'src/components/GartnerCoolVendor/config';

export default {
  label: 'Home',
  name: 'home',
  file: 'netlify/pages/home.yaml',
  fields: [
    hero,
    {
      name: 'caseStudies',
      label: 'Case Studies',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'company',
          label: 'company',
          widget: 'string',
          required: false,
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
          required: false,
        },
        {
          name: 'image',
          label: 'image',
          widget: 'image',
          required: false,
        },
        {
          name: 'description',
          label: 'description',
          widget: 'string',
          required: false,
        },
        {
          name: 'tag',
          label: 'tag',
          widget: 'string',
          required: false,
        },
        {
          name: 'color',
          label: 'Color',
          widget: 'string',
          required: false,
        },
      ],
    },
    testimonials,
    metaTags,
  ],
};
