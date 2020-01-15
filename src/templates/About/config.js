import metaTags from 'src/components/MetaTags/config';

import actionBar from 'src/components/ActionBar/config';
import hero from 'src/components/Hero/config';

import collage from 'src/components/Collage/config';

export default {
  label: 'About',
  name: 'about',
  file: 'netlify/pages/about.yaml',
  fields: [
    {
      label: 'path',
      name: 'path',
      widget: 'string',
    },
    hero,
    {
      label: 'Team',
      name: 'team',
      widget: 'list',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'string',
        },
      ],
    },
    collage,
    actionBar,
    metaTags,
  ],
};
