const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const scoreEl = document.querySelector(`#scoreEl`)
const startGameBtn = document.querySelector(`#startGameBtn`)
const modalEl = document.querySelector(`#modalEl`)
const bigScoreEl = document.querySelector(`#bigScoreEl`)
const ammoEl = document.querySelector(`#ammoEl`)

class Player {
    constructor(x,y,radius,color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}
class Projectile {
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}
class Enemy {
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
    update(){
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}
const friction = 0.99
class Particle {
    constructor(x,y,radius,color,velocity){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }
    draw() {
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.restore()
    }
    update(){
        this.draw()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}
x = canvas.width / 2
y = canvas.height / 2

/** @type {Player} */
let player = new Player(x, y, 10, 'white')
/** @type {Projectile[]} */
let projectiles = []
/** @type {Enemy[]} */
let enemies = []
/** @type {Particle[]}*/
let particles = []

function init(){
    player = new Player(x, y, 10, 'white')
    projectiles = []
    enemies = []
    particles = []
    score = 0
    scoreEl.innerHTML = score
    bigScoreEl.innerHTML = score
    ammo = 5
    ammoEl.innerHTML = ammo
}

function spawnEnemies(){
    setInterval(() => {
        const radius = Math.random() * (30-4) + 4
        let x
        let y

        if(Math.random() < 0.5){
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`
        const angle = Math.atan2(
            canvas.height/2 - y, 
            canvas.width/2 - x)
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        enemies.push(new Enemy(x,y,radius,color,velocity))
   }, 1200)
}

let animationID
let score = 0
let ammo = 5
function animate() {
    animationID = requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0, 0, 0, 0.1)'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.draw()
    particles.forEach((particle, index) => {
        if(particle.alpha <= 0){
            particles.splice(index,1)
        } else {
            particle.update()
        }
    })
    projectiles.forEach((projectile, index ) => {
        projectile.update()
        //remove from the edges of screen
        if (projectile.x + projectile.radius < 0 ||
            projectile.x - projectile.radius > canvas.width ||
            projectile.y + projectile.radius < 0 ||
            projectile.y - projectile.radius > canvas.height){
            setTimeout(() => {
                projectiles.splice(index, 1)
            },0)
        }
    })
    enemies.forEach((enemy, index) => {
        enemy.update()
        const dist = Math.hypot(player.x-enemy.x, player.y-enemy.y)
        //when enemy hit player
        if (dist -enemy.radius - player.radius < 1){
            endGame()
        }

        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x-enemy.x, projectile.y-enemy.y)
            //when projectiles touch enemy
            if (dist - enemy.radius - projectile.radius < 1){
                //create explosions
                for(let i=0; i< enemy.radius*2 ;i++){
                    particles.push(
                        new Particle(
                            projectile.x, 
                            projectile.y, 
                            Math.random()*2, 
                            enemy.color, 
                            {
                                x: (Math.random()-0.5) * (Math.random() * 6), 
                                y: (Math.random()-0.5) * (Math.random() * 6)
                            }
                        )
                    )
                }

                if(enemy.radius - 10 > 5){
                    // increase score
                    score += 100
                    scoreEl.innerHTML = score

                    gsap.to(enemy, {
                        radius: enemy.radius - 10
                    })
                    setTimeout(() => {
                        projectiles.splice(projectileIndex, 1)
                    },0)
                } else {
                    // increase score
                    score += 250
                    scoreEl.innerHTML = score
                    ammo += 2
                    ammoEl.innerHTML = ammo

                    setTimeout(() => {
                        enemies.splice(index, 1)
                        projectiles.splice(projectileIndex, 1)
                    },0)
                }
            }
        })
    })
}

canvas.addEventListener('click', (event) => {
    if(ammo != 0){
        ammo -= 1
        ammoEl.innerHTML = ammo
        const angle = Math.atan2(event.clientY - canvas.height/2, event.clientX - canvas.width/2)
        const velocity = {
            x: Math.cos(angle) * 5,
            y: Math.sin(angle) * 5
        }
        projectiles.push(
            new Projectile(canvas.width/2,canvas.height/2,5,'white',velocity)
        )
    }
})

function endGame() {
    cancelAnimationFrame(animationID)
    modalEl.style.display = 'flex'
    bigScoreEl.innerHTML = score
}

startGameBtn.addEventListener('click', () => {
    init()
    animate()
    spawnEnemies()
    //test enemy
    //enemies.push(new Enemy(100,100,30,'red',{x:0.1,y:0.1}))
    modalEl.style.display = 'none'
})