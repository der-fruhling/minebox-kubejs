BlockEvents.rightClicked("ticketing:ticket_machine", event => {
    if(event.getItem().id == "ticketing:blank_ticket") {
        if(event.hand == $InteractionHand.OFF_HAND) return;
        const stack = event.player.inventory.extractItem(event.player.selectedSlot, 64, true);
        let remaining = stack.count;
        let e = event.block.getEntityData();
        
        for (let i = 0; i < e.attachments[0].items.length && remaining > 0; i++) {
            const consumption = Math.min(remaining, 64 - e.attachments[0].items[i].Count)
            e.attachments[0].items[i].Count += consumption;
            remaining -= consumption;

            console.log(`iteration #${i}: ${remaining} remaining after consuming ${consumption}`);
        }

        if(remaining > 0 && e.attachments[0].items.length < 9) {
            const slot = e.attachments[0].items.length
            e.attachments[0].items.push({ Slot: slot, id: 'ticketing:blank_ticket', Count: remaining });
            console.log(`appending: ${remaining}`);
            remaining = 0;
        }

        if(remaining == stack.count) {
            console.log(`not modified, returning: ${remaining} remaining (from ${stack.count})`);
            return;
        }

        event.block.setEntityData(e);
        event.player.inventory.extractItem(event.player.selectedSlot, stack.count - remaining, false);
    }
})

BlockEvents.placed('ticketing:ticket_machine', event => {
    const e = event.block.entityData;
    e.data.placer = event.entity.uuid.toString();
    event.block.setEntityData(e);
})

BlockEvents.broken('ticketing:ticket_machine', event => {
    const e = event.block.entityData;
    if(!event.entity.uuid.equals(UUID.fromString(e.data.placer)) && e.data.placer != undefined) {
        console.log(`${event.player.uuid} != ${e.data.placer}`)
        event.cancel()
    }
})
