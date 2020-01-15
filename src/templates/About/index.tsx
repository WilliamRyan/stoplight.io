import * as React from 'react';
import { withRouteData } from 'react-static';

import { Container, IContainer } from 'src/components/Container';
import { SimpleCard } from 'src/components/SimpleCard';
import { Author } from 'src/components/SimpleCard/Author';
import { SimpleCardBody } from 'src/components/SimpleCard/SimpleCardBody';
import { SimpleCardBottom } from 'src/components/SimpleCard/SimpleCardBottom';
import { SimpleCardTitle } from 'src/components/SimpleCard/SimpleCardTitle';
import { SimpleCardTop } from 'src/components/SimpleCard/SimpleCardTop';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Collage, ICollage } from '../../components/Collage';
import { Feature } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';

import { Chips } from '../../components/Chip';
import { IMember, Member } from '../../components/MemberCard';
import { Section } from '../../components/Section';
import { IValue, Value } from '../../components/Value';

export interface IAbout {
  color: string;
  hero: IHero;
  mission: ISection;
  coreValues: ICoreValues;
  socialGood: ISection;
  careers: ISection;
  team: ITeamSection;
  businesses: IBusinesses;
  press: IPressSection;
  collage: ICollage;
}

interface ISection {
  title: string;
  description: string;
  image: string;
}

interface ICoreValues extends ISection {
  values: IValue[];
}

interface ITeamSection extends ISection {
  members: IMember[];
  actionBar: IActionBar;
}

interface IPressSection extends ISection {
  articles: IPress[];
  cta?: IContainer['cta'];
}

interface IPress {
  image: string;
  date: string;
  description: string;
  publication: string;
  href: string;
}

interface IBusinesses extends ISection {
  quotes: IQuote[];
}

interface IQuote {
  company: string;
  image: string;
  description: string;
  author: string;
  role: string;
}

export const About: React.FunctionComponent<IAbout> = ({
  color,
  hero,
  mission,
  coreValues,
  socialGood,
  careers,
  team,
  press,
  businesses,
  collage,
  ...sectionProps
}) => {
  return (
    <Layout header={{ pinnedColor: 'black' }}>
      <Hero key="hero" bgColor={color} title={hero.title} subtitle={hero.subtitle} ctas={hero.ctas} />

      <Section id="mission" noPaddingB>
        <Container className="pb-32 border-b" title={mission.title}>
          <div
            className="flex max-w-lg mx-auto text-lg leading-loose text-center"
            dangerouslySetInnerHTML={{ __html: mission.description }}
          />
        </Container>
      </Section>

      <Section id="core-values" noPaddingB>
        <Container className="pb-32 border-b" title={coreValues.title}>
          <div
            className="flex max-w-lg mx-auto mb-20 text-lg leading-loose text-center"
            dangerouslySetInnerHTML={{ __html: coreValues.description }}
          />

          <div className="flex flex-wrap justify-around">
            {coreValues.values.map((value, index) => (
              <Value
                key={index}
                icon={value.icon}
                iconStyle={value.iconStyle}
                title={value.title}
                summary={value.summary}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="social-good" noPaddingB>
        <Container className="pb-32 border-b">
          <Feature title={socialGood.title} description={socialGood.description} image={socialGood.image} />

          <Feature title={careers.title} description={careers.description} image={careers.image} isReversed />
        </Container>
      </Section>

      <Section id="team">
        <Container title={team.title}>
          <div
            className="flex max-w-lg mx-auto mb-20 text-lg leading-loose text-center"
            dangerouslySetInnerHTML={{ __html: team.description }}
          />

          <Image src={team.image} className="mb-40 bg-cover rounded-lg shadow" useDiv style={{ height: 500 }} />

          <div className="flex flex-wrap">
            {team.members.map((member, index) => (
              <Member
                key={index}
                isLast={index === team.members.length - 1}
                image={member.image}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>

          {team.actionBar && (
            <div className="md:pb-24">
              <ActionBar text={team.actionBar.text} ctas={team.actionBar.ctas} enabled={team.actionBar.enabled} />
            </div>
          )}
        </Container>
      </Section>

      {press.articles && (
        <Section id="press" {...sectionProps}>
          <Container cta={press.cta} title={press.title}>
            <div className="flex flex-wrap justify-center">
              {press.articles.map((press, index) => (
                <SimpleCard key={index} className="flex px-6 mb-6 w-80" href={press.href}>
                  <div className="h-64 px-6 pb-6 bg-white rounded-lg shadow cursor-pointer text-grey-darker hover:bg-grey-lightest">
                    <SimpleCardTop className="flex items-start h-10 px-2 py-10">
                      <div className="flex items-start items-center justify-center h-32">
                        <Image
                          src={press.image}
                          title={`${press.publication} Logo`}
                          alt={press.publication}
                          size="sm"
                          className="h-10"
                        />
                      </div>

                      <SimpleCardTitle subtitle={press.date} className="mt-3 mb-3 font-bold uppercase" />
                    </SimpleCardTop>
                    <SimpleCardBody description={press.description} className="flex-1 mb-5 mt-14" />
                  </div>
                </SimpleCard>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Chips
        segments={[{ color: 'blue', length: 3 }, { color: 'blue-lighter', length: 2 }]}
        className="justify-center"
      />

      {businesses.quotes && (
        <Section id="businesses" {...sectionProps}>
          <Container className="" title={businesses.title}>
            <div className="flex flex-wrap justify-center -mb-12">
              {businesses.quotes.map((business, index) => (
                <SimpleCard key={index} className="flex flex-col px-6 py-8 mx-5 mb-12 bg-white rounded-lg shadow w-96">
                  <SimpleCardTop className="flex items-start px-2 py-2">
                    <div className="flex items-start justify-center h-12 px-2 py-2 pb-8 m-auto">
                      <Image
                        src={business.image}
                        title={`${business.company} Logo`}
                        alt={business.company}
                        size="sm"
                        className="h-12"
                      />
                    </div>
                  </SimpleCardTop>
                  <SimpleCardBody description={business.description} className="flex-1 mt-4 mb-5" />
                  <SimpleCardBottom className="mb-4">
                    <Author name={business.author} meta={business.role} />
                  </SimpleCardBottom>
                </SimpleCard>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Chips
        segments={[
          { color: 'orange-dark', length: 1 },
          { color: 'orange', length: 2 },
          { color: 'orange-lighter', length: 3 },
        ]}
        className="justify-center"
      />

      <Collage id="investors" className="pb-64" {...collage} />
    </Layout>
  );
};

export default withRouteData(About);
