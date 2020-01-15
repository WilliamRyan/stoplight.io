import * as React from 'react';

import { Container, IContainer } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

export interface IQuote {
  image: string;
  quote: string;
  author: string;
  role: string;
}

export interface IBusinesses {
  id: ISection['id'];
  quotes: IQuote[];
  title?: IContainer['title'];
  cta?: IContainer['cta'];
}

export const Quote = ({ image, quote, author, role }) => {
  return (
    <div className="flex flex-col justify-between px-4 py-8 bg-white rounded-lg shadow">
      <div className="flex items-start justify-center px-2 py-2 pb-8 m-auto">
        <Image className="max-h-50" {...image} size="sm" />
      </div>
      <p className="pb-6 leading-loose">{quote}</p>

      <div className="pb-1 font-bold uppercase text-blue">{author}</div>

      <div>{role}</div>
    </div>
  );
};

export const Businesses: React.FunctionComponent<IBusinesses> = ({ id, title, quotes, cta, ...sectionProps }) => {
  if (!quotes || !quotes.length) return null;

  return (
    <Section id={id} {...sectionProps}>
      <Container title={title} cta={cta}>
        <div className="flex flex-wrap justify-center -mb-12">
          {quotes.map((item, key) => {
            return (
              <div key={key} className="flex w-1/3 px-6 mb-12 md:w-full">
                <Quote {...item} />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
