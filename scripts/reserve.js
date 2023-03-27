const times = []

for (let i = 0; i < 5; i++) {
  const today = new Date()
  today.setHours(today.getHours() + i + 1)
  const startString = today.toLocaleString('en-US', { hour: 'numeric', hour12: true })
  today.setHours(today.getHours() + 1)
  const endString = today.toLocaleString('en-US', { hour: 'numeric', hour12: true })

  times.push(startString + ' - ' + endString)
}

const timeselect = document.getElementById('time-select')
const options = times.map((time) => `<option>` + time + `</option>`)
timeselect.insertAdjacentHTML('beforeend', options.join(''))

const kb = document.getElementById('keyboard-area')
const email = document.getElementById('email-input')
email.addEventListener('focus', () => {
  kb.insertAdjacentHTML('beforeend', '<img id="kb" src="../images/keyboard.png"></img>')
})

email.addEventListener('blur', () => {
  while (kb.hasChildNodes()) {
    kb.removeChild(kb.lastChild)
  }
})
