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
