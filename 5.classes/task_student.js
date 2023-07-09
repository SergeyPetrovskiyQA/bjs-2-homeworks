class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};

    }

    addMark(subject, mark) {
        if (mark < 2 || mark > 5) {
            return; // Оценка не валидна, ничего не делаем
        }

        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = []; // Создаем пустой массив для нового предмета
        }

        this.marks[subject].push(mark); // Добавляем оценку в массив по предмету
    }
    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            return 0; // Предмет отсутствует, возвращаем ноль
        }

        const marks = this.marks[subject];
        const sum = marks.reduce((total, mark) => total + mark, 0);
        const average = sum / marks.length;

        return average;
    }
    getAverage() {
        const subjects = Object.keys(this.marks);

        if (subjects.length === 0) {
            return 0; // Отсутствуют предметы, возвращаем ноль
        }

        const sum = subjects.reduce((total, subject) => {
            const subjectAverage = this.getAverageBySubject(subject);
            return total + subjectAverage;
        }, 0);

        const average = sum / subjects.length;

        return average;
    }
}


