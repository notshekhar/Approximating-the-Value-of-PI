let canvas = document.querySelector('canvas')
let show = document.querySelector('.showpi')
let screen = canvas.getContext('2d')
let r = canvas.width/2
let circle = 0
let total = 0
let PI = 0
let aDiff = Math.PI*Math.PI


screen.beginPath()
screen.strokeStyle = 'black'
screen.rect(0, 0, canvas.width, canvas.height)
screen.stroke()

screen.beginPath()
screen.strokeStyle = 'black'
screen.arc(canvas.width/2, canvas.height/2, r, 0, 2*Math.PI)
screen.stroke()


function draw(){
  let x = Math.random()*r*2
  let y = Math.random()*r*2
  let distance = Math.pow(x  - canvas.width / 2, 2)
  distance += Math.pow(y - canvas.height / 2, 2)
  total++
  if(distance <= r*r){
    circle++
    screen.beginPath()
    screen.fillStyle = 'blue'
    screen.arc(x, y, 1, 0, 2 * Math.PI)
    screen.fill()
  }else{
    screen.beginPath()
    screen.fillStyle = 'red'
    screen.arc(x, y, 1, 0, 2 * Math.PI)
    screen.fill()
  }
  let pi = 4*(circle/total)
  let diff = Math.pow(Math.PI-pi, 2)
  if(diff<aDiff){
    aDiff = diff
    PI = pi
    show.innerHTML = PI
  }
}

setInterval(()=>{
  for(let i=0; i<100; i++){
    draw()
  }
}, 21)

