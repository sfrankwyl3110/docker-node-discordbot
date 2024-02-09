const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('delete-content')
		.setDescription('Delete Text Channel Content'),
	async execute(interaction) {
		if(interaction.member.id != 803041698677915729) {
			console.log("not doing anything")
			interaction.deferReply();
			return
		}
		let messages = await interaction.channel.messages.fetch()
		
		await interaction.channel.bulkDelete(messages)
			.then(
				messages => {
					console.log(`Bulk deleted ${messages.size} messages`)
				}
			)
			.catch(console.error);

		interaction.deleteReply();
		await interaction.reply(`Deleted ${messages.size} messages`);
	},
};
