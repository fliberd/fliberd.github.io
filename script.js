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
        link: 'https://github.com/fliberd/fliberd.github.io'
      }
    ],
    sidebar: [
      {
        title: 'О проекте',
        links: [
          {
            title: 'Введение',
            link: '/introduction'
          },
          {
            title: 'Механики',
            link: '/mehanics'
          }
        ]
      },
      {
        title: 'Развертывание',
        links: [
          {
            title: 'Visual Studio',
            link: '/vs'
          },
          {
            title: 'Docker desktop',
            link: '/docker-desktop'
          }
        ]
      } 
    ]
  })
  