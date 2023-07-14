const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sushi")
    .setDescription("Add sushi 🍣"),
  async execute(interaction) {
    return interaction.reply("🍣");
  },
};
