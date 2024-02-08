import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element | string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ id: 'homepage.features.small.title' }),
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: translate({ id: 'homepage.features.small.description' }),
  },
  {
    title: translate({ id: 'homepage.features.supports.title' }),
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: translate({ id: 'homepage.features.supports.description' }),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/*<div className="text--center">*/}
      {/*  <Svg className={styles.featureSvg} role="img" />*/}
      {/*</div>*/}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featuresRow)} >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
