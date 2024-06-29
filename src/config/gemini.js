function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
const runChat = async () =>{
	let url = "https://fish-text.ru/get?type=sentence&number=4&format=json"
	let response =await fetch(url).then(response => response.json());
	return response.text;
}
export default runChat;