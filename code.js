let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')
// comments

let mutatableMatrix = []
let applePos = {x:100, y:100}

let fillCanvas = (dummyData) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red"
  ctx.fillRect(applePos.x, applePos.y, 25, 25)
  for (let x = 0; x < 500; x += 25) {
    mutatableMatrix[x / 25] = []
    for (let y = 0; y < 500; y += 25) {

      for (let snakeie of dummyData) {
        if (snakeie && snakeie.x === x / 25 && snakeie.y === y / 25) {
          ctx.fillStyle = "green"
          ctx.fillRect(x, y, 25, 25)
        }
      }

      //ctx.stroke()
      mutatableMatrix[x / 25].push(y / 25)
    }
  }
}
//comments

let growSnake = () => {
  mutatePosition(0)
  return 0
}
// comments

let mutatePosition = (direction) => {

  // direction
  // 0 = down
  // 1 = left
  // 2 = right
  // 3 = up

  let [x, y] = [
    mutatableDummyData[mutatableDummyData.length - 1].x,
    mutatableDummyData[mutatableDummyData.length - 1].y
  ]

  mutatableDummyData.shift()

  if (direction === 0) {
    mutatableDummyData.push({
      y: y + 1,
      x: x
    })
  } else if (direction === 1) {
    mutatableDummyData.push({
      y: y,
      x: x - 1
    })
  } else if (direction === 2) {
    mutatableDummyData.push({
      y: y,
      x: x + 1
    })
  } else if (direction === 3) {
    mutatableDummyData.push({
      y: y - 1,
      x: x
    })
  }
}
// comments

let mutatableDummyData = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 0, y: 3 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
]

let direction = 0
setInterval(() => {
  collisionType()
  mutatePosition(direction)
  fillCanvas(mutatableDummyData)
}, 100)

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "d") {
    direction = 2
  } else if (event.key === "a") {
    direction = 1
  } else if (event.key === "s") {
    direction = 0
  } else if (event.key === "w") {
    direction = 3
  }
});

function collisionType() {
  let [x, y] = [
    mutatableDummyData[mutatableDummyData.length - 1].x,
    mutatableDummyData[mutatableDummyData.length - 1].y
  ]

  // Apple collision 🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏


  console.log(
    x,y,
    applePos.x, applePos.y
  )
  
  if (x === applePos.x/25 && y === applePos.y/25) {
    return "🍏"
  }
  // }
  // Snake collision 🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍🐍
  count = 0
  for (let data of mutatableDummyData){
    if (x === data.x && y === data.y){
      if (count == 1){
        console.log("crash bang wollop!")
      } else {
        count +=1;
      }
      //return "snake"
    }
  }///   }// }

  // Boundries 🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱🧱

  if (x === 19) {
    mutatableDummyData.shift()
    mutatableDummyData.push({
      y: y,
      x: 0
    })
  }

  if (y === 19) {
    mutatableDummyData.shift()
    mutatableDummyData.push({
      y: 0,
      x: x
    })
  }

  if (x === -1) {
    mutatableDummyData.shift()
    mutatableDummyData.push({
      y: y,
      x: 19
    })
  }

  if (y === -1) {
    mutatableDummyData.shift()
    mutatableDummyData.push({
      y: 19,
      x: x
    })
  }
}
