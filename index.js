const projects = [
  {
    title: 'Dress the Child',
    description:
      'A website for the Dress the Child non-profit in Las Cruces, New Mexico. It provides a new front end for them to accept Credit Card payments as well as an admin dashboard to track payments, add cash/checks to ledger, and store contacts',
    tech: [
      'React',
      'Router',
      'Ruby on Rails',
      'Stripe API',
      'Ruby on Rails',
      'Jest and Enzyme'
    ],
    image: './images/dtc.png',
    github: 'https://github.com/JesseMcBrennan/dress-the-child-fe',
    live: 'https://dress-the-child.herokuapp.com/'
  },
  {
    title: 'The Dreaming',
    description:
      'The Dreaming is a WIP dream journal app that will allow users to connect with each other via there most common dream thems. It also be a way to map the unconscious and determine a common zeitgeist of any given moment.',
    tech: [
      'JavaScript',
      'JQuery',
      'Node',
      'Express',
      'MariaDB',
      'ZingChart API',
      'Google Oauth'
    ],
    image: './images/dreaming.png',
    github: 'https://github.com/codytaft/The-Dreaming-JS',
    live: 'https://the-dreaming.herokuapp.com/'
  },
  {
    title: 'SwapiBox',
    description:
      'SwapiBox is a single page application utilizing the Star Wars API.  A user can browse vehicles, people, and planets in the star wars universe and choose their favorites.',
    tech: ['React', 'Router', 'Enzyme', 'Jest'],
    image: './images/swapi.png',
    github: 'https://github.com/codytaft/swapibox',
    live: 'https://pedantic-jepsen-6b6d14.netlify.com/'
  },
  {
    title: 'Who Were You',
    description:
      'This is a single-page application with a back end built in postgres with scraped data from onthisday.com A user enters their birthday to determine if anyone died on that day, so they could potentialy be their reincarnation. Users can save the reincarnation and add notes to the person.',
    tech: [
      'Vanilla JS',
      'React',
      'Node.js',
      'Knex.js',
      'Express.js',
      'Nightmare.js',
      'Postgres'
    ],
    image: './images/whowereyou.png',
    github: 'https://github.com/TFisch/who-were-you-fe',
    live: 'https://who-were-you-app.herokuapp.com/'
  }
];

function renderSlide({ title, description, tech, image, github, live }) {
  const project = document.querySelector('.project');
  const technologies = tech.join(' / ');
  project.innerHTML = `
    <h3>${title}</h3>
    <p class="tech">${technologies}</p>
    <div class="project-links">
      <a href="${github}" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="${live}" target="_blank" class="live-link">Live</a>
    </div>
    <p>${description}</p>
    <img src="${image}" alt="${title}" />
  `;
  renderDots();
}

function renderDots() {
  const dots = document.querySelector('.dots');
  const dotString = projects
    .map((project, i) => {
      return i === currentSlide
        ? `<i class="fas fa-circle"></i>`
        : `<i class="far fa-circle"></i>`;
    })
    .join('');
  dots.innerHTML = dotString;
}

const left = document.querySelector('.left');
let currentSlide = 0;

left.addEventListener('click', slideBack);
function slideBack() {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide(projects[currentSlide]);
  }
}

const right = document.querySelector('.right');
right.addEventListener('click', slideForward);
function slideForward() {
  if (currentSlide < projects.length - 1) {
    currentSlide++;
    renderSlide(projects[currentSlide]);
  }
}

renderSlide(projects[0]);
