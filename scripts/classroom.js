const rooms = ['1119', '1127', '1134', '2113', '2116', '2339', '3117', '4114', '4221', '5117']
const reservable = ['1119', '2113', '3115', '5117']

function createRoomItem(room) {
  return (
    `
    <li>
        <div class="item-left">
            <i class="fa fa-map-marker"></i>
            <p>IRB` +
    room +
    `
        </div>
        <div class="item-right">
            <i class="fa fa-map"></i>
            <p>Directions</p>
        </div>
    </li>`
  )
}

const roomslist = document.querySelector('#rooms-list')
const items = rooms.map((room) => createRoomItem(room))
roomslist.insertAdjacentHTML('beforeend', items.join(''))

const inputHandler = function (e) {
  while (roomslist.hasChildNodes()) {
    roomslist.removeChild(roomslist.lastChild)
  }

  const input = e.target.value.toUpperCase()

  if (input === '') {
    const items = rooms.map((room) => createRoomItem(room))
    roomslist.insertAdjacentHTML('beforeend', items.join(''))
  } else {
    const data = rooms.filter((room) => room.startsWith(input) || ('IRB' + room).startsWith(input))
    console.log(data)
    const filteredItems = data.map((room) => createRoomItem(room))
    roomslist.insertAdjacentHTML('beforeend', filteredItems.join(''))
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
