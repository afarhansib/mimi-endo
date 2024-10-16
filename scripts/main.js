console.log('Mimi Endo loaded.')
import { world, system } from '@minecraft/server'

const banTheEnd = () => {
	let players = world.getPlayers()
	players.forEach(async player => {
		if (player.dimension.id === "minecraft:the_end") {

			console.info('violation = ' + player.name + ' is in The End, kicking.')
			await world.getDimension("overworld").runCommandAsync('kick "' + player.name + '" §l§cThe End is Locked.');
		}
	})
}

system.runInterval(() => {
	banTheEnd()
}, 20)