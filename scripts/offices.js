const offices = [
  {
    name: 'PROF1',
    role: 'Professor',
    classes: ['TEST1', 'TEST2', 'TEST3'],
    room: '1117',
    hours: ['10AM - 1PM', '', '1PM - 3PM', '', ''],
  },
  {
    name: 'TA2',
    role: 'TA',
    classes: ['TEST1', 'TEST2', 'TEST3'],
    room: '1117',
    hours: ['10AM - 1PM', '', '1PM - 3PM', '', ''],
  },
  {
    name: 'TA3',
    role: 'TA',
    classes: ['TEST1', 'TEST2', 'TEST3'],
    room: '1117',
    hours: ['10AM - 1PM', '', '1PM - 3PM', '', ''],
  },
  {
    name: 'TEST4',
    role: 'Professor',
    classes: ['TEST1', 'TEST2', 'TEST3'],
    room: '1117',
    hours: ['10AM - 1PM', '', '1PM - 3PM', '', ''],
  },
  {
    name: 'TEST5',
    role: 'Professor',
    classes: ['TEST1', 'TEST2', 'TEST3'],
    room: '1117',
    hours: ['10AM - 1PM', '', '1PM - 3PM', '', ''],
  },
  {
    name: 'TEST6',
    role: 'Professor',
    classes: ['TEST1', 'TEST2', 'TEST3'],
    room: '1117',
    hours: ['10AM - 1PM', '', '1PM - 3PM', '', ''],
  },
]

const days = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri']

function createOfficeItem(office) {
  return (
    `
    <li>
    <div class="item-main">
        <div class="item-left">
            <div class="item-name">
               <i class="fa fa-user"></i>
                <p>` +
    office.name +
    `</p>
            </div>
            <div class="item-room">
                <i class="fa fa-map-marker"></i>
                <p>IRB` +
    office.room +
    `</p>
            </div>
        </div>
        <div class="item-right">
            <i class="fa fa-map"></i>
            <p>Directions</p>
        </div>
    </div>
    <details class="item-hours">
        <summary class="hours-label">
        Office Hours
        </summary>
        <div class="hours-info">
        <p class="role-label"><strong>` +
    office.role +
    `</strong></p>
        <p class="classes-label"><strong>Classes: </strong>` +
    office.classes.join(', ') +
    `</p>
    <table class="table-hours">` +
    office.hours
      .map((hour, i) => `<tr><th>` + days[i] + `: </th><td>` + hour + `</td></tr>`)
      .join('') +
    `</table>
        </div>
    </details>
    </li>`
  )
}

// Populate initial list
const officeList = document.querySelector('#office-list')
const items = offices.map((office) => createOfficeItem(office))
officeList.insertAdjacentHTML('beforeend', items.join(''))

// Search bar
const inputHandler = function (e) {
  while (officeList.hasChildNodes()) {
    officeList.removeChild(officeList.lastChild)
  }

  const input = e.target.value.toUpperCase()

  if (input === '') {
    const items = offices.map((office) => createOfficeItem(office))
    officeList.insertAdjacentHTML('beforeend', items.join(''))
  } else {
    const data = offices.filter((office) => office.name.toUpperCase().startsWith(input))
    const filteredItems = data.map((office) => createOfficeItem(office))
    officeList.insertAdjacentHTML('beforeend', filteredItems.join(''))
  }
}

const search = document.querySelector('#search')
search.addEventListener('input', inputHandler)

// Keyboard popup
const kb = document.getElementById('kb-area')
search.addEventListener('focus', () => {
  kb.insertAdjacentHTML('beforeend', '<img id="kb" src="../images/keyboard.png"></img>')
})

search.addEventListener('blur', () => {
  while (kb.hasChildNodes()) {
    kb.removeChild(kb.lastChild)
  }
})
