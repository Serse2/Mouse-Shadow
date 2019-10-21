const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 300

function shadow(e){
  //recupero altezza e larghezza di hero
  // const height = hero.offsetHeight
  // const width = hero.offsetWidth
  const {offsetHeight: height, offsetWidth: width} = hero
  // let x = e.offsetX
  // let y = e.offsetY
  //posizione del cursore
  let {offsetX: x, offsetY: y} = e
  
  if (this !== e.target){
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  let xWalk = Math.round((x / width * walk) - (walk / 2)) 
  let yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0px red,
    ${xWalk * -1}px ${yWalk * -1}px 0px blue,
    ${yWalk}px ${xWalk}px 0px yellow,
    ${yWalk * -1}px ${xWalk * -1}px 0px pink
    `
}

hero.addEventListener('mousemove', shadow);