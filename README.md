Discord bot for creating a database and manually setting prices for CSGO skins. Mainly for use with CSGOEmpire, it allows users to maintain and update their own pricing information.

## **Features**

- **Create and manage a database of CSGO skin prices.**
- **Set and update prices manually.**
- **Simple and easy-to-use commands.**

### **How to Set Up**

1. **Clone this repo:**
    ```sh
    git clone https://github.com/1ukah/skindb.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd skindb
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```
4. **Create a `.env` file in the project directory and add your bot token:**
    ```env
    TOKEN=your_discord_bot_token
    ```

### **Running the Bot**

1. **Start the bot:**
    ```sh
    npm start
    ```

## **Commands**

- **`!setprice [skin name] [price]`** - Set the price of a CSGO skin.
- **`!getprice [skin name]`** - Get the current price of a CSGO skin.
- **`!help`** - Show a list of available commands.

## **Dependencies**
- discordjs [14.7.1]
- @discordjs/rest [1.4.0]
- dotenv [16.0.3]
- lowdb [1.0.0]

Improving my JavaScript knowledge and learning how to use Discord.js v14 properly (not really)!
