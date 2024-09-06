
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of("ticketing:blank_ticket", 3),
        [
            "minecraft:paper",
            "minecraft:redstone",
            "createdeco:industrial_iron_nugget"
        ]
    );
    
    event.shaped(
        Item.of("ticketing:ticket_machine", 1),
        [
            "IDI",
            "RFB",
            "IDI"
        ],
        {
            I: "create:industrial_iron_block",
            D: "minecraft:diamond",
            R: "minecraft:redstone",
            F: "suppsquared:metal_frame",
            B: "minecraft:black_dye"
        }
    );

    event.shaped(
        Item.of("ticketing:ticket_reader", 1),
        [
            "IEI",
            "RFL",
            "IPI"
        ],
        {
            I: "create:industrial_iron_block",
            E: "minecraft:emerald",
            R: "minecraft:redstone",
            P: "minecraft:paper",
            F: "suppsquared:metal_frame",
            L: "minecraft:light_blue_dye"
        }
    );
});
