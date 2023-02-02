import * as React from 'react';

// This is my shame file. I couldn't figure out getting arbitrary mdx rendering to work so I made this instead
export interface Project {
  name: string;
  description: string;
  repoLink: string;
  demoLink?: string;
  body: React.ReactNode;
}

export const projectList: Project[] = [
  {
    name: 'Test Project',
    description: 'Straightforward Test Project',
    repoLink: 'https://github.com/actioninja/refpack-rs',
    demoLink: 'https://github.com/actioninja/refpack-rs',
    body: <div>penis</div>,
  },
];
