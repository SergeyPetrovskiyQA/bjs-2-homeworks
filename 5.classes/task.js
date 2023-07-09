class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}
	get state() {
		return this._state
	}

	set state(newState) {
		if (newState < 0) {
			return this._state = 0;
		}
		if (newState > 100) {
			return this._state = 100;
		} else {
			this._state = newState;
		}
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}

}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];

	}
	addBook(book) {
		this.book = book;
		if (book.state > 30) {
			this.books.push(book)
		} else {
			return 0;
		}
	}

	findBookBy(type, value) {
		const foundBook = this.books.find((book) => book[type] === value);
		return foundBook || null;
	}

	giveBookByName(bookName) {
        const foundBookIndex = this.books.findIndex((book) => book.name === bookName);
        if (foundBookIndex !== -1) {
            const deletedBook = this.books.splice(foundBookIndex, 1)[0];
            return deletedBook;
        }
        return null;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.marks = [];
        
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
}
