export default {
  widgets: [
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
                  buildHookId: '60467f46fa2a6008cedee056',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vq97dp6f',
                  apiId: '0c942fc4-d1e9-4666-91d7-1742520301fb'
                },
                {
                  buildHookId: '60467f46e33272108317367c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dwi8jh33',
                  apiId: '8849e966-7679-4de5-a4fd-567e76b17bb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Oyru/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dwi8jh33.netlify.app', category: 'apps'}
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
