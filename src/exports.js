module.exports.weapons = [{name: "AK-47", value: "AK-47"}, {name: "AUG", value: "AUG"}, {name: "AWP", value: "AWP"}]
module.exports.parameters = [{name: "weapon", value: "weapon"}, {name: "skin", value: "skin"}, {name: "minimum value", value: "min_val"}, {name: "maximum value", value: "max_val"}]

module.exports.commands = 
[
    {
        name: "create",
        description: "Creates a new skin into the database.",
        options:
        [
            {
                name: "c_weapon",
                description: "Weapon of the desired skin.",
                type: 3,
                required: true,
                choices: this.weapons,
            },
            {
                name: "c_skin",
                description: "Name of the desired skin.",
                type: 3,
                required: true,
            }
        ]
    },
    {
        name: "edit",
        description: "Edit a skin from the database.",
        options:
        [
            {
                name: "id",
                description: "Skin's ID from the database.",
                type: 3,
                required: true,
            },
            {
                name: "parameter",
                description: "Desired parameter that you want to edit.",
                type: 3,
                required: true,
                choices: this.parameters
            },
            {
                name: "value",
                description: "Desired value.",
                type: 3,
                required: true,
            }
        ]
    },
    {
        name: "info",
        description: "View informations about a specific skin from the database.",
        options:
        [
            {
                name: "weapon",
                description: "Weapon of the desired skin.",
                type: 3,
                required: true,
                choices: this.weapons,
            },
            {
                name: "skin",
                description: "Name of the desired skin.",
                type: 3,
                required: true,
            }
        ]
    }
]