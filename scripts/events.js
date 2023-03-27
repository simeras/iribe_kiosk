const events = [
  {
    name: 'Bitcamp',
    date: 'April 7-9',
    location: 'XFINITY',
    description:
      "Bitcamp is a hackathon that values participant experience and mentorship over competitiveness and points. Come to have fun with your friends, learn something new, eat s'mores, and have a generally awesome time. We have all sorts of crazy activities planned for you...come find out the rest!",
  },
  {
    name: 'UMD Creator Showcase',
    date: 'April 11',
    location: 'IRB0105',
    description: 'Swing by to take a look at projects made by UMD students!',
  },
  {
    name: 'AI Workshop',
    date: 'April 23',
    location: 'IRB2112',
    description:
      'Several graduate students will be hosting a machine learning/AI workshop in IRB2112! No experience is required, everyone is welcome!',
  },
  {
    name: 'TA Appreciation Day',
    date: 'May 2',
    location: 'Lobby',
    description: 'TA Appreciation stuff.',
  },
  {
    name: 'CS Networking Fair',
    date: 'May 12',
    location: 'IRB1114',
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
    <p class="details">Learn More</p>
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
