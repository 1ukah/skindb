const { Client, Routes } = require("discord.js")
const { REST } = require("@discordjs/rest")
const { config } = require("dotenv")
const lowdb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const ex = require("./exports")

config();

const client = new Client({ intents: ["Guilds", "GuildMessages"] });
const token = process.env.token;
const clientID = process.env.clientID;
const guildID = process.env.guildID;
const rest = new REST({ version: "10" }).setToken(token);
const database = new FileSync("db.json");
const db = lowdb(database);

client.on("ready", () => console.log(`${client.user.tag} has logged in!`));

client.on("interactionCreate", (interaction) => 
{
  if (interaction.isChatInputCommand()) 
  {
    try 
    {
      if (interaction.options.getString("c_weapon") && interaction.options.getString("c_skin"))
      {
        const randID = Math.floor(Math.random() * 999999) + 100000;
        db.get("skins").push({id: randID,weapon: interaction.options.getString("c_weapon"),skin: interaction.options.getString("c_skin"),min_val: "",max_val: "",}).write();
        interaction.reply({content: `+ ${interaction.options.getString("c_weapon")} | ${interaction.options.getString("c_skin")} (ID: ${randID})`});
      }
      else if (interaction.options.getString("id") && interaction.options.getString("parameter") && interaction.options.getString("value"))
      {
        switch (interaction.options.getString("parameter"))
        {
          case "weapon":
            db.get("skins").find({ id: interaction.options.getString("id") }).assign({ weapon: interaction.options.getString("value") }).write();
            break;
          case "skin":
            db.get("skins").find({ id: interaction.options.getString("id") }).assign({ skin: interaction.options.getString("value") }).write();
            break;
          case "min_val":
            db.get("skins").find({ id: interaction.options.getString("id") }).assign({ min_val: interaction.options.getString("id") }).write()
            break;
          case "max_val":
            db.get("skins").find({ id: interaction.options.getString("id") }).assign({ max_val: interaction.options.getString("value") }).write();
            break;
          default:
            break;
        }

        interaction.reply({content: `The parameter "${interaction.options.getString("parameter")}" was set to "${interaction.options.getString("value")}".`});
      }
      else if (interaction.options.getString("weapon") && interaction.options.getString("skin"))
      {
        const infoSkin = db.get("skins").find({ skin: interaction.options.getString("skin") }).value

        if (infoSkin["weapon"] === interaction.options.getString("weapon")) 
        {
          const minVal = parseInt(infoSkin["min_val"]);
          const maxVal = parseInt(infoSkin["max_val"]);
          interaction.reply({content: `(ID: ${infoSkin["id"]}) - Minimum value: ${infoSkin["min_val"]} | Maximum value: ${infoSkin["max_val"]} | Average value: ${(minVal + maxVal) / 2}`});
        }
      }
    } 
    catch (error) 
    {
      console.log(error)
    }
  }
});

async function main() 
{
  try 
  {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationGuildCommands(clientID, guildID), {body: ex.commands});
    client.login(token);
  }
  catch (error) 
  {
    console.log(error);
  }
}

main();