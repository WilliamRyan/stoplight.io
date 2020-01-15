import * as React from 'react';

import { Container, IContainer } from 'src/components/Container';
import { Image } from 'src/components/Image';
import { ISection, Section } from 'src/components/Section';

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

export const Press = ({ image, date, description, publication, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="px-6 pb-6 bg-white rounded-lg shadow cursor-pointer text-grey-darker hover:bg-grey-lightest"
    >
      <div className="flex items-start items-center justify-center h-32">
        <Image src={image} alt={publication} size="sm" />
      </div>

      <div className="mb-3 font-bold uppercase">{date}</div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </a>
  );
};

export const PressSection: React.FunctionComponent<IPressSection> = ({ id, title, articles, cta, ...sectionProps }) => {
  if (!articles || !articles.length) return null;

  return (
    <Section id={id} {...sectionProps}>
      <Container title={title} cta={cta}>
        <div className="flex flex-wrap justify-center -mb-12">
          {articles.map((item, key) => {
            return (
              <div key={key} className="flex w-1/4 px-6 mb-12 md:w-full">
                <Press {...item} />
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
