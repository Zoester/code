// TODO: write your code here

const playerOneRaceTrack = document.querySelector('#player1_race')
const playerTwoRaceTrack = document.querySelector('#player2_race')

const handleWin=(playerTrack) => {
  const player = playerTrack.id
  let message;
  if (player ==='player1_race') {
    message = 'Player 1'
  }else{
    message = 'Player 2'
  }

  alert('${message}  won the game!')
}

const moveCarForward = (playerTrack) => {
  //define activeChild and nextChild
  let activeChild
  let nextChild
  //get all of the <td/> children from the parent elemtn
  const allChildren = playerTrack.querySelectorAll('td')
  //loop though and find active and next
  allChildren.forEach((child,index) => {

    const className = child.classList.value
    if (className === 'active') {

      activeChild=child
      nextChild - allChildren[index + 1]
    }
  })

if(!nextChild) {
  return handleWin()
}

  activeChild.classList.remove('active')
  nextChild.classList.add('active')
}

  console.log('allChildren', allChildren)
  const activeChild = node.querySelector('.active')
  activeChild.classList.toggle('active')
  nextChild.classlist.add('active')


const handleKeyDown = (event) => {
  if(event.code === 'KeyQ') {
    //the user pressed q
  console.log('The user pressed Q')
  moveCarForward(playerOneRaceTrack)
  }

  if(event.code === 'KeyP') {
   //the user pressed p
  console.log('The user pressed P')
  moveCarForward(playerTwoRaceTrack)
  }
}


document.addEventListener('keydown', handleKeyDown)
