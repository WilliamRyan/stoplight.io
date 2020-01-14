import { IconName } from '@fortawesome/fontawesome-common-types';
import { IContainer } from './components/Container';
import { IconProp } from './components/Icon';
import { IImage } from './components/Image';
import { ISection } from './components/Section';

export interface ICustomerSection extends ISection {
  images: IImage[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
  cardBg?: string;
}

export interface ICaseStudyCard {
  href: string;
  company: string;
  image: string;
  tag: string;
  description: string;
  color: string;
  bg?: string;
  icon?: IconProp;
}

export interface IFeatures {
  features: IFeature[];
  className?: string;
}

export interface IFeature {
  name: string;
  icon: IconName;
  iconStyle: {
    '--fa-primary-color': string;
    '--fa-secondary-color': string;
  };
  description: string;
  href?: string;
}

export interface IQuote {
  company: string;
  image: string;
  description: string;
  author: string;
  role: string;
}

export interface IBusinesses {
  id: ISection['id'];
  quotes: IQuote[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export interface IPress {
  image: string;
  date: string;
  description: string;
  publication: string;
  href: string;
}

export interface IPressSection {
  id: ISection['id'];
  articles: IPress[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}
