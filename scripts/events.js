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
    <div class="item-main">
    <div class="item-left">
        <p class="item-date"><i class="fa fa-calendar"></i>` +
    event.date +
    `</p>
        <p class="item-loc"><i class="fa fa-map-marker"></i>` +
    event.location +
    `</p>
    </div>
    <div class="item-right">
        <p class="item-name">` +
    event.name +
    `</p>
    </div>
    </div>
    <details class="learn">
      <summary class="learn-label">
        Learn More
      </summary>
      <div class="item-bottom">
        <p>` +
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

const inputHandler = function (e) {
  while (eventslist.hasChildNodes()) {
    eventslist.removeChild(eventslist.lastChild)
  }

  const input = e.target.value.toUpperCase()

  if (input === '') {
    const items = events.map((item) => createEventItem(item))
    eventslist.insertAdjacentHTML('beforeend', items.join(''))
  } else {
    const data = events.filter((item) => item.name.toUpperCase().startsWith(input))
    const filteredItems = data.map((item) => createEventItem(item))
    eventslist.insertAdjacentHTML('beforeend', filteredItems.join(''))
  }
}

const search = document.querySelector('#search')
search.addEventListener('input', inputHandler)

const kb = document.getElementById('kb-area')
search.addEventListener('focus', () => {
  kb.insertAdjacentHTML('beforeend', '<img id="kb" src="../images/keyboard.png"></img>')
})

search.addEventListener('blur', () => {
  while (kb.hasChildNodes()) {
    kb.removeChild(kb.lastChild)
  }
})
