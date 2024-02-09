const deleteTextChannelContent = async (message) => {
    if(message.content == "!delete-content") {
		let messages = await message.channel.messages.fetch()
		message.channel.bulkDelete(messages)
			.then(
				messages => {
					console.log(`Bulk deleted ${messages.size} messages`)
				}
			)
			.catch(console.error);
	}
}

module.exports = { deleteTextChannelContent }