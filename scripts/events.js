const events = [
  {
    name: 'Bitcamp',
    date: 'April 7-9',
    location: 'XFINITY',
    description:
      "Bitcamp is a hackathon that values participant experience and mentorship over competitiveness and points. Come to have fun with your friends, learn something new, eat s'mores, and have a generally awesome time. We have all sorts of crazy activities planned for you...come find out the rest!",
  },
  {
    name: 'TEST2',
    date: 'May 6th',
    location: 'IRB0105',
    description: 'TESTING TESTING',
  },
  {
    name: 'TEST3',
    date: 'April 14th',
    location: 'IRB0105',
    description: 'TESTING TESTING',
  },
  {
    name: 'TEST4',
    date: 'April 14th',
    location: 'IRB0105',
    description: 'TESTING TESTING',
  },
  {
    name: 'TEST5',
    date: 'April 14th',
    location: 'IRB0105',
    description: 'TESTING TESTING',
  },
  {
    name: 'TEST6',
    date: 'April 14th',
    location: 'IRB0105',
    description: 'TESTING TESTING',
  },
  {
    name: 'TEST7',
    date: 'April 14th',
    location: 'IRB0105',
    description: 'TESTING TESTING',
  },
]

function createEventItem(event) {
  return (
    `<li>
    <details>
    <summary class="item-main">
    <div class="item-left">
        <p class="item-date"><i class="fa fa-calendar"></i>` +
    event.date +
    `</p>
        <p class="item-loc"><i class="fa fa-map-marker"></i>` +
    event.location +
    `</p>
    </div>
    <div class="vr"></div>
    <div class="item-right">
        <p class="item-name">` +
    event.name +
    `</p>
    </div>
    </summary>
    <div class="item-bottom">
        <p class="item-desc">` +
    event.description +
    `</p>
    </div>
    </details>
  </li>`
  )
}

const eventslist = document.querySelector('.events-list')
const items = events.map((item) => createEventItem(item))
eventslist.insertAdjacentHTML('beforeend', items.join(''))
