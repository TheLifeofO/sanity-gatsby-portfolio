export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f632a9fd68310389ad95ff6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6oeif8ki',
                  apiId: '95ceacc8-d461-4406-9bfd-210b8077c089'
                },
                {
                  buildHookId: '5f632a9fd683103f79d965ea',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ekostbx2',
                  apiId: 'd6ca0600-7e08-4ec7-bec0-cd2e2db8be59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TheLifeofO/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ekostbx2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
