/* globals Docute */

new Docute({
    target: '#docute',
    sourcePath: './docs/',
    theme: 'dark',
    nav: [
      {
        title: 'Главная',
        link: '/'
      },
      {
        title: 'Github',
        link: 'https://github.com/fliberd/'
      }
    ],
    sidebar: [
      {
        title: 'ocserv-docker-kit',
        links: [
          {
            title: 'Quick start',
            link: '/ocserv-docker-kit'
          }
        ]
      },
      
    ]
  })
  