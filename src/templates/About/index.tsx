import * as React from 'react';
import { withRouteData } from 'react-static';

import { ActionBar, IActionBar } from '../../components/ActionBar';
import { Businesses, IBusinesses } from '../../components/Businesses';
import { Collage, ICollage } from '../../components/Collage';
import { Container } from '../../components/Container';
import { Feature } from '../../components/FeatureSection';
import { Hero, IHero } from '../../components/Hero';
import { Image } from '../../components/Image';
import { Layout } from '../../components/Layout';
import { IMember, Member } from '../../components/MemberCard';
import { IPressSection, PressSection } from '../../components/PressSection';
import { Section } from '../../components/Section';
import { IValue, Value } from '../../components/Value';
import { Chips } from '../../components/Chip';

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

      <PressSection id="press" {...press} />

      <Chips
        segments={[
          { color: 'blue', length: 3 },
          { color: 'blue-lighter', length: 2 },
        ]}
        className="justify-center"
      />

      <Businesses id="businesses" {...businesses} />

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
