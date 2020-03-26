import { ITeam, IPlayer } from "../interfaces"

export default class TeamValidator {

    static teams = (teams: ITeam[]) => {

        teams.forEach(team => {

            if (!team.nombre) {
                throw Error("nombre equipo es requerido")
            }

            if (!team.meta) {
                throw Error("meta por equipo es requerida")
            }

            if (!team.jugadores || !team.jugadores.length) {
                throw Error("jugadores por equipo es requerido")
            }

            team.jugadores.forEach(player => TeamValidator.team(player))
        })
    }

    static team = (player: IPlayer) => {

        if (!player.nombre) {
            throw Error("nombre jugador es requerido")
        }

        if (!player.nivel) {
            throw Error("nivel de jugador es requerido")
        }

        if (!player.goles || player.goles < 0) {
            throw Error("goles por jugador es mayor o igual a cero")
        }

        if (!player.sueldo || player.sueldo <= 0) {
            throw Error("sueldo por jugador es mayor a cero")
        }

        if (!player.bono || player.bono <= 0) {
            throw Error("bono por jugador es mayor a cero")
        }
    }
}