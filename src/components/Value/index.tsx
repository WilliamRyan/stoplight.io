import cn from 'classnames';
import * as React from 'react';

import { Section } from 'src/components/Section';
import { Container } from '../Container';

export interface IValue {
  title: string;
  summary: string;
  titleColor: string;
}

export const Value: React.FunctionComponent<IValue> = ({ title, summary, titleColor }) => {
  return (
    <div id={title}>
      <h2>{title}</h2>
      <div>{summary}</div>
    </div>
  );
};

export interface IValueSection {
  values: IValue[];
}
export const ValueSection = ({ values, ...sectionProps }: IValueSection) => {
  return (
    <Section id="values" {...sectionProps}>
      <Container title="Our Values" className="border-b px-0 pb-20">
        <div className="container flex flex-no-wrap justify-center md:justify-around md:px-0 sm:flex-wrap">
          {values.map((value, key) => (
            <div className="flex flex-col w-100 sm:w-100 sm:items-center sm:text-center pr-16 sm:pr-0">
              <div key={key}>
                <h2 className={cn('mb-1 text-3xl', `text-${value.titleColor}`)}>{value.title}</h2>
                <div className="pb-12 sm:pb-0 max-w-md leading-loose text-lg">{value.summary}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
