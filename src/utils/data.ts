const technologies = [
  {
    name: 'PHP',
    imgSrc: 'https://www.php.net//images/logos/new-php-logo.svg',
    altSrc: 'PHP Logo',
    link: 'https://www.php.net/',
    ariaLink: 'PHP Documentation Website',
  },
  {
    name: 'Laravel',
    imgSrc: 'https://laravel.com/img/logomark.min.svg',
    altSrc: 'Laravel Logo',
    link: 'https://laravel.com/',
    ariaLink: 'Laravel Documentation Website',
  },
  {
    name: 'CodeIgniter',
    imgSrc: 'https://www.codeigniter.com/assets/icons/ci-logo.png',
    altSrc: 'Codeigniter Logo',
    link: 'https://www.codeigniter.com/',
    ariaLink: 'CodeIgnier Documentation Website',
  },
  {
    name: 'HTML5',
    imgSrc: 'https://www.svgrepo.com/show/303205/html-5-logo.svg',
    altSrc: 'HTML5 Logo',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    ariaLink: 'HTML5 Documentation Website',
  },
  {
    name: 'CSS3',
    imgSrc: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-official.svg',
    altSrc: 'CSS3 Logo',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    ariaLink: 'CSS3 Documentation Website',
  },
  {
    name: 'SASS',
    imgSrc: 'https://sass-lang.com/assets/img/logos/logo.svg',
    altSrc: 'SASS Logo',
    link: 'https://sass-lang.com/',
    ariaLink: 'SASS Documentation Website',
  },
  {
    name: 'Bootstrap',
    imgSrc:
      'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
    altSrc: 'Bootstrap Logo',
    link: 'https://getbootstrap.com/',
    ariaLink: 'Bootstrap Documentation Website',
  },
  {
    name: 'Tailwind CSS',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    altSrc: 'Tailwind CSS Logo',
    link: 'https://tailwindcss.com/',
    ariaLink: 'TailwindCSS Documentation Website',
  },
  {
    name: 'JavaScript',
    imgSrc: 'https://www.svgrepo.com/show/353925/javascript.svg',
    altSrc: 'JavaScript Logo',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    ariaLink: 'JavaScript Documentation Website',
  },
  // {
  //   name: 'TypeScript',
  //   imgSrc: 'https://www.svgrepo.com/show/349540/typescript.svg',
  //   altSrc: 'TypeScript Logo',
  //   link: 'https://www.typescriptlang.org/',
  //   ariaLink: 'TypeScript Documentation Website',
  // },
  {
    name: 'React',
    imgSrc: 'https://www.svgrepo.com/show/354259/react.svg',
    altSrc: 'React Logo',
    link: 'https://reactjs.org/',
    ariaLink: 'React Documentation Website',
  },
  {
    name: 'Astro',
    imgSrc:
      'https://raw.githubusercontent.com/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png',
    altSrc: 'Astro Logo',
    link: 'https://astro.build/',
    ariaLink: 'Astro Documentation Website',
  },
  {
    name: 'Node.js',
    imgSrc: 'https://www.svgrepo.com/show/452075/node-js.svg',
    altSrc: 'Node.js Logo',
    link: 'https://nodejs.org/en/',
    ariaLink: 'Node.js Documentation Website',
  },
  {
    name: 'Next.js',
    imgSrc: 'https://www.svgrepo.com/show/306466/next-dot-js.svg',
    altSrc: 'Next.js Logo',
    link: 'https://nextjs.org/',
    ariaLink: 'Next.js Documentation Website',
  },
]

const bbdd = [
  {
    name: 'MySQL',
    imgSrc: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg',
    altSrc: 'MySQL Logo',
    link: 'https://www.mysql.com/',
    ariaLink: 'MySQL Documentation Website',
  },
  {
    name: 'MariaDB',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/mariadb.svg',
    altSrc: 'MariaDB Logo',
    link: 'https://mariadb.org/',
    ariaLink: 'MariaDB Documentation Website',
  },
  {
    name: 'Oracle PL/SQL',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/oracle-corporation-logo.svg',
    altSrc: 'MariaDB Logo',
    link: 'https://docs.oracle.com/en/database/',
    ariaLink: 'MariaDB Documentation Website',
  },
  {
    name: 'MongoDB',
    imgSrc: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    altSrc: 'MongoDB Logo',
    link: 'https://www.mongodb.com/docs/',
    ariaLink: 'MongoDB Documentation Website',
  },
]

const otros = [
  {
    name: 'Git',
    imgSrc: 'https://www.svgrepo.com/show/452210/git.svg',
    altSrc: 'Git Logo',
    link: 'https://git-scm.com/doc',
    ariaLink: 'Git Documentation Website',
  },
  {
    name: 'GitHub',
    imgSrc: 'https://www.svgrepo.com/show/512317/github-142.svg',
    altSrc: 'Git Logo',
    link: 'https://github.com/ruben-feito',
    ariaLink: 'GitHub Personal Profile',
  },
  {
    name: 'cPanel',
    imgSrc: 'https://www.svgrepo.com/show/353612/cpanel.svg',
    altSrc: 'cPanel Logo',
    link: 'https://cpanel.net/',
    ariaLink: 'cPanel Documentation Website',
  },
  {
    name: 'AWS',
    imgSrc: 'https://www.svgrepo.com/show/448266/aws.svg',
    altSrc: 'AWS Logo',
    link: 'https://aws.amazon.com/es/',
    ariaLink: 'AWS Documentation Website',
  },
  {
    name: 'Visual Studio Code',
    imgSrc: 'https://www.svgrepo.com/show/374171/vscode.svg',
    altSrc: 'Visual Studio Code Logo',
    link: 'https://code.visualstudio.com/',
    ariaLink: 'Visual Studio Code Documentation Website',
  },
  {
    name: 'PostMan',
    imgSrc: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
    altSrc: 'PostMan Logo',
    link: 'https://www.postman.com/',
    ariaLink: 'PostMan Documentation Website',
  },
  {
    name: 'Figma',
    imgSrc: 'https://www.svgrepo.com/show/448222/figma.svg',
    altSrc: 'Figma Logo',
    link: 'https://www.figma.com/',
    ariaLink: 'Figma Documentation Website',
  },
]

export { technologies, bbdd, otros }
