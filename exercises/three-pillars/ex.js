class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}

}



// receive Bookshelf

// 4. `loadBooks(..)` should call the provided `fakeAjax(..)`, using `BOOK_API` as the URL and an inline function expression as // the callback.

// 5. The callback will be passed an array of book names. Loop through this array, passing each book name to the //  // `addFavoriteBook(..)` method of the `Bookshelf` instance passed to `loadBooks(..)`. Then call the `printFavoriteBooks()` method.

function loadBooks( cBookshelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API,function loadarray(names) {
		for(let name of names){ // use let
			cBookshelf.addFavoriteBook(name);
		}
		cBookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

var books = new Bookshelf;
loadBooks(books);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

// 2019/9/1
// three pillars of JS: 
// 1:Types / Coercion, 
// 2:Scope / Closures, and 
// 3:`this` / Prototypes.
// Hint: `class` methods don't use the `function` keyword, just their name.
