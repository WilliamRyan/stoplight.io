import SettingsConfig from 'src/components/Settings/config';

import AboutConfig from 'src/templates/About/config';
import HomeConfig from 'src/templates/Home/config';
import PricingConfig from 'src/templates/Pricing/config';
import EnterpriseConfig from 'src/templates/Enterprise/config';
import CareersConfig from 'src/templates/Careers/config';

import FormConfig from 'src/templates/Form/config';

import LandingConfig from 'src/templates/Landing/config';
import { ListsConfig, AuthorConfig } from 'src/templates/Lists/config';
import { SubpageConfig, BlogPostConfig, CaseStudyConfig } from 'src/templates/Subpage/config';
import { CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME } from 'src/utils/settings';

export const config = {
  load_config_file: false,
  backend: {
    name: 'github',
    repo: 'stoplightio/stoplight.io',
    branch: 'master',
    squash_merges: true,
    commit_messages: {
      create: 'Create {{collection}} “{{slug}}”',
      update: 'Update {{collection}} “{{slug}}”',
      delete: 'Delete {{collection}} “{{slug}}”',
      uploadMedia: 'Upload “{{path}}”',
      deleteMedia: 'Delete “{{path}}”',
    },
  },
  show_preview_links: true,
  publish_mode: 'editorial_workflow',
  media_folder: 'public/images',
  public_folder: '/images',
  display_url: 'https://stoplight.io',
  site_domain: 'cms.netlify.com',
  collections: [
    SettingsConfig,
    {
      label: 'Pages',
      label_singular: 'Page',
      name: 'pages',
      delete: false,
      files: [AboutConfig, HomeConfig, PricingConfig, EnterpriseConfig],
    },
    FormConfig,
    LandingConfig,
    ListsConfig,
    SubpageConfig,
    AuthorConfig,
    CaseStudyConfig,
    BlogPostConfig,
    CareersConfig,
  ],
  media_library: {
    name: 'cloudinary',
    config: {
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
    },
  },
};
