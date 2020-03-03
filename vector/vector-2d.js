const Vector2d = function (x1 , y1) {

    let x = x1 || 0
    let y = y1|| 0

    const add = function (v) {

        this.x += v.x
        this.y += v.y
        return this
    }

    const length = function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
    const normalized = function () {
        let len = this.length()
        if(len === 0 ) return  
        this.x /= len
        this.y /= len
    }

    const sub = function (v) {
        this.x -= v.x,
        this.y -= v.y
    }

    const mult = function(k) {
        this.x *= k
        this.y *= k
        return this
    }

    const div = function(k) {
        if(k === 0 || k) return

        this.x /= k
        this.y /= k
    }


    return {
            x,
            y,
            add,
            sub,
            mult,
            div,
            length,
            normalized
        }
}
