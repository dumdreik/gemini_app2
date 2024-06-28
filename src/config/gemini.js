function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
const runChat = async (prompt) =>{
	await timeout(3000);
	return prompt;
}
export default runChat;