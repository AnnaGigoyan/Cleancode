class Kerpar2 extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 5;
        this.directions = [


            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x - 2, this.y + 2]
        ]
    }

    getNewDirections() {
        this.directions = [


            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x - 2, this.y + 2]
        ]
    }

    chooseCell(character) {
        this.getNewDirections();
        return super.chooseCell(character);
    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 9) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new Kerpar2(newX, newY)
            kerpar2Arr.push(xt)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var food = random(this.chooseCell(4))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in axvesArr) {
                if (axvesArr[i].x == newX && axvesArr[i].y == newY) {
                    axvesArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }
    eat2() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in kerpar2Arr) {
                if (kerpar2Arr[i].x == this.x && kerpar2Arr[i].y == this.y) {
                    kerpar2Arr.splice(i, 1)
                }
            }
        }
    }
}