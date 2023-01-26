import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

interface ContactLink {
  name: string;
  display: string;
  url: string;
}

const contactLinks: ContactLink[] = [
  {
    name: 'email',
    display: 'actioninja@criticalaction.net',
    url: 'mailto:actioninja@criticalaction.net',
  },
  {
    name: 'GitHub',
    display: 'actioninja',
    url: 'https://github.com/actioninja',
  },
  {
    name: 'Mastodon',
    display: '@actioninja@peoplemaking.games',
    url: 'https://peoplemaking.games/@actioninja',
  },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      Hello! I'm still working on this website. There will be something here soon. Probably.
      <section>Here's some places you can find me. I am more likely to respond in order that they're listed.</section>
      <ul>
        {contactLinks.map(({ name, display, url }) => (
          <li key={name + display}>
            {name}:{' '}
            <a href={url} target="_blank" rel="noreferrer noopener">
              {display}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
