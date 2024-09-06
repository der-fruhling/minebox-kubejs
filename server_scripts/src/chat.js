// priority: 1
const info = JsonIO.readJson('info.json')

PlayerEvents.loggedIn(event => {
    event.server.scheduleInTicks(1, () => {
        event.player.sendSystemMessage(Component.literal("welcome to the box§n§o§m§i§n§i§m§a§p").bold().color('green'));
    })
})
