import { CreatePagesArgs } from 'gatsby';
import path from 'path';

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-post.tsx');
  const blogPostResult = await graphql(`
    query blogPageQuery {
      allMdx(filter: { internal: { contentFilePath: { regex: "/(/content/blog/)/" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.data.allMdx.edges.forEach((edge) => {
      createPage({
        path: `blog/${edge.node.frontmatter.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
        context: {
          id: edge.node.id,
        },
      });
    });
  });

  const projectPageTemplate = path.resolve('src/templates/project.tsx');
  const projectPageResult = await graphql(`
    query projectPageQuery {
      allMdx(filter: { internal: { contentFilePath: { regex: "/(/content/projects/)/" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
            id
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.data.allMdx.edges.forEach((edge) => {
      createPage({
        path: `projects/${edge.node.frontmatter.slug}`,
        component: `${projectPageTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
        context: {
          id: edge.node.id,
        },
      });
    });
  });
};
