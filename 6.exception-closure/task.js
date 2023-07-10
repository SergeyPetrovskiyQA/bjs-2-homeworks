function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (Number.isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    return parsedValue;
}
function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        if (!this.isValidTriangle(sideA, sideB, sideC)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    isValidTriangle(sideA, sideB, sideC) {
        return sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB;
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        const semiPerimeter = this.perimeter / 2;
        const areaSquared =
            semiPerimeter *
            (semiPerimeter - this.sideA) *
            (semiPerimeter - this.sideB) *
            (semiPerimeter - this.sideC);
        const area = Math.sqrt(areaSquared);
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}

