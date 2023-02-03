import * as React from 'react';
import Layout from '../components/layout/Layout';

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

export default function IndexPage() {
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
}
