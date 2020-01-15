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
  fields: [hero, testimonials, metaTags],
};
