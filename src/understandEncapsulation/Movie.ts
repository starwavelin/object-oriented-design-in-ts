class Movie {
    title: string;
    year: number;
    genre: string;

    // constructor
    constructor(t: string = '', y: number = -1, g: string = '') {
        this.title = t;
        this.year = y;
        this.genre = g;
    }

    // getters setters
    getTitle() {
        return this.title;
    }

    setTitle(t) {
        this.title = t;
    }

    getYear() {
        return this.year;
    }

    setYear(y) {
        this.year = y;
    }

    getGenre() {
        return this.genre;
    }

    setGenre(g) {
        this.genre = g;
    }

    printDetails() {
        console.log('Title: ', this.title);
        console.log('Year: ', this.year);
        console.log('Genre: ', this.genre);
    }
}

const movie = new Movie('The Lion King', 1994, 'Adventure');
movie.printDetails();

console.log('---');
movie.setTitle('Forrest Gump');
console.log('New title: ', movie.getTitle());
