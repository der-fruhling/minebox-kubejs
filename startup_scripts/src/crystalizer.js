StartupEvents.registry('block', event => {
    event.create('crystalizer:schist_block')
        .soundType('stone')
    event.create('crystalizer:garnet_ore')
        .soundType('stone')
        .tag('forge:ores')
        .tag('forge:ores/garnet')
})

StartupEvents.registry('item', event => {
    event.create('crystalizer:garnet_crown')
        .tag('minecraft:armors/helmets')
    event.create('crystalizer:garnet_gem')
        .tag('forge:gems')
        .tag('forge:gems/garnet')
})
