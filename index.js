const pi = Math.PI

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    // ------ GET ------

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return pi * this.diameter
    }

    get area() {
        return pi * (this.radius * this.radius)
    }

    

    // ------ SET ------

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / (pi * 2)
    }

    set area(area) {
        this.radius = Math.sqrt(area / pi)
    }
    
}