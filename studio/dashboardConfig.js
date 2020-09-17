export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f635e1cf3028580aed860cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-g3epcfh9',
                  apiId: '1c8bba96-21eb-4f1d-9714-e25dd52e852f'
                },
                {
                  buildHookId: '5f635e1c6de450dc06b82a4d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-g95hg7dm',
                  apiId: '56e3e21b-6cf1-4ae1-8c78-336e11e5d795'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rglepper/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-g95hg7dm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
