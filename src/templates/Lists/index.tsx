import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Button } from '../../components/Button';
import { Hero, IHero } from '../../components/Hero';
import { IHeroAuthor } from '../../components/Hero/HeroAuthor';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { Link } from '../../components/Link';
import { IPagination, Pagination } from '../../components/Pagination';
import { Section } from '../../components/Section';
import { ITab } from '../../components/Tabs';

export interface IListItem {
  title: string;
  subtitle: string;
  listSubtitle: string;
  image: string;
  titleImage?: string;
  listImage?: string;
  href: string;
  author: IHeroAuthor;
  publishedDate: string;
  backgroundSize?: 'cover' | 'contain';
  color?: string;
}

export interface IList {
  color: string;
  title: string;
  subtitle: string;
  pageName?: string;
  tabs: ITab[];
  items: IListItem[];
  hero: Partial<IHero>;
  actionBar?: IActionBar;
  pagination?: IPagination;
}

export const ListItem: React.FunctionComponent<IListItem> = ({
  title,
  subtitle,
  listSubtitle,
  image,
  listImage,
  href,
  author,
  publishedDate,
  backgroundSize = 'cover',
  color = 'transparent',
}) => {
  return (
    <Link
      to={href}
      className="block shadow hover:shadow-lg bg-white rounded-lg text-grey-darkest mb-12 overflow-hidden h-80"
    >
      <article className="flex box h-full w-full items-center">
        <div className="flex-1 flex flex-col h-full p-10 md:p-6">
          <div className="flex-1 mb-2 flex flex-col relative overflow-hidden pr-16">
            <div className="text-3xl font-bold mb-4">{title}</div>

            {(listSubtitle || subtitle) && <p className="leading-loose text-lg">{listSubtitle || subtitle}</p>}
          </div>

          <div className="flex items-center">
            <Button
              title={author ? 'Read' : 'Learn More'}
              shadow="none"
              rightIcon={['fad', 'arrow-right']}
              color="green"
            />
            <div className="flex-1" />
            {author && (
              <div className="flex items-center md:hidden text-grey-darker">
                <div className="text-sm text-right">
                  {author.name && <div>{author.name}</div>}
                  {publishedDate && <div>{publishedDate}</div>}
                </div>

                {author.image && (
                  <Image
                    className="ml-4 rounded-full h-12 w-12 bg-cover shadow"
                    src={author.image}
                    alt={author.name}
                    size="sm"
                    useDiv
                  />
                )}
              </div>
            )}
          </div>
        </div>

        <Image
          src={listImage || image}
          className={cn(`h-full w-2/5 sm:w-1/5 bg-center bg-no-repeat bg-${backgroundSize}`, {
            [`bg-${color}`]: !(listImage || image),
          })}
          useDiv
        />
      </article>
    </Link>
  );
};

export const List: React.FunctionComponent<IList> = ({
  color,
  title,
  subtitle,
  pageName,
  tabs,
  items,
  hero,
  actionBar,
  pagination,
}) => {
  return (
    <Layout>
      <Hero {...hero} bgColor={color} title={title} subtitle={subtitle} pageName={pageName} tabs={tabs} />

      <Section className="z-5 pt-24 md:pt-0" noPadding>
        {items && items.length > 0 ? (
          <React.Fragment>
            <div className="container">
              {items.map((item, index) => (
                <ListItem key={index} {...item} />
              ))}
            </div>

            {pagination && <Pagination {...pagination} color={color} />}
          </React.Fragment>
        ) : (
          <div className="container">
            <div className="text-center p-12 sm:p-4 text-white opacity-75" />
          </div>
        )}
      </Section>

      {actionBar && (
        <div className="md:pb-24 pb-40 mt-32">
          <ActionBar {...actionBar} />
        </div>
      )}
    </Layout>
  );
};

export default withRouteData(List);
