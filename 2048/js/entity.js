class Tile {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor( x, y ){
        this.x = x
        this.y = y
    }

    move( x , y ){
        this.x = x
        this.y = y
    }
}

class NumberTile extends Tile {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} initialNumber 
     */
    constructor( x, y, initialNumber ){
        super( x, y )

        this.initialNumber = initialNumber
    }
}