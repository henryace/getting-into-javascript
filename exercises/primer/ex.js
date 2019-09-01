// TODO: define addFavoriteBook(..) function

function addFavoriteBook(bookName){
	if (!favoriteBooks.includes("Great")){
		favoriteBooks.push(bookName);
	}
}

// TODO: define printFavoriteBooks() function

function printFavoriteBooks(){
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for(let bookname of favoriteBooks){
		console.log(bookname);
	}		
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks();

// 2019/8/29
// Memo:
// 1.function 前贅詞
// 2. clonsole.log 在``內使用變數 並加 $
// 3.for loop 使用 let A of B 而非 A in B
// 