class Game {
    keys = []
    colors = {
        background: 'grey',
        foreground: 'orange',
        text: 'black',
        tile2: `#eee4da`
    }

    constructor(size){
        /** @type {HTMLCanvasElement} */
        const canvas = document.querySelector(".game-main-canvas")

        this.size = size
        this.ctx = canvas.getContext('2d')
        /** @type {NumberTile[][]} */
        this.map = Array.from( { length: size}, () => Array.from( { length: size}))

        this.start()
    }

    setEvents() {
        document.addEventListener( 'keydown' , ({keyCode}) => this.keys[keyCode]=true)
        document.addEventListener( 'keyup' , ({keyCode}) => this.keys[keyCode]=false)
    }

    resize(){
        const {canvas} = this.ctx

        canvas.width = canvas.clientWidth
        canvas.height = canvas.clientHeight
    }

    setEntity(x,y,initialNumber){
        this.map[y][x] = new NumberTile( x, y, initialNumber ) 
    }

    start() {
        this.setEvents()
        this.resize()
        this.setEntity(1,1,2)
    
        this.logicInterval = setInterval( this.logic, 1000 / 60 )
        this.drawInterval = setInterval(
          () => requestAnimationFrame( this.draw ), 1000 / 60
        )
    }

    draw = () => {
        const { ctx, map, size, colors } = this
        const padding = 5
        const tileWidth  = ctx.canvas.width  / size - padding / 2
        const tileHeight = ctx.canvas.height / size - padding / 2
        const fontSize = 33
    
        ctx.fillStyle = colors.background
        ctx.fillRect( 0, 0, ctx.canvas.width, ctx.canvas.height )
        ctx.fillStyle = colors.foreground
    
        map.forEach( (row, rowIndex) => row.forEach( (entity, columnIndex) => {
          ctx.fillRect(
            columnIndex * tileWidth + padding * 2,
            rowIndex * tileHeight + padding * 2,
            tileWidth  - padding * 2,
            tileHeight - padding * 2,
          )
    
          if (!entity) return
    
          const { x, y, initialNumber } = entity
          let color = null
    
          switch (initialNumber) {
            case 2:
            case 4:
              color = colors.tile2
              break
    
            default:
              color = colors.tile2
          }
    
          ctx.fillStyle = color
          ctx.fillRect(
            x * tileWidth + padding * 2,
            y * tileHeight + padding * 2,
            tileWidth  - padding * 2,
            tileHeight - padding * 2,
          )
          ctx.fillStyle = colors.text
          ctx.font = `${fontSize}px monospace`
          ctx.fillText(
            initialNumber,
            x * tileWidth * 1.5 - `${initialNumber}`.length / 2 * fontSize / 2,
            y * tileHeight * 1.5 + fontSize / 2
          )
    
          ctx.fillStyle = colors.foreground
        } ) )
      }

    logic = () => {
        const { keys, entities } = this
        
        if(keys[ 68 ] || keys[ 39 ]){
            entities.forEach(entity => entity.move(entity.x +1, entity.y))
            keys[68] = false
            keys[39] = false
        }
    }
}

const game = new Game(4);  