function calcWordFrequencies(input) {
	const wordFrequencyMap = new Map();
	const words = input.split(' '); // creating array of input string, with ' ' ( single space ) as delimiter.

	for (let i = 0; i < words.length; i++) {

		const word = words[i]; // accessing word array with indexing

		if (wordFrequencyMap.has(word)) {
            let value = wordFrequencyMap.get(word);
			wordFrequencyMap.set(word, value + 1); // incrementing value by one when encountering same word
		} else {
			wordFrequencyMap.set(word, 1); // setting value to be 1 for unique words
		}
	}

	wordFrequencyMap.forEach((frequency, word) => {
		console.log(word+" "+frequency);
	});
}

const msg = prompt("Enter list of words separated by space:")
calcWordFrequencies(msg);