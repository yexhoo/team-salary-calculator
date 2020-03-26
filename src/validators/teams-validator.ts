import { IPlayer, ITeams } from "../utils/interfaces"
import Message from "../utils/errorMessage"

export default class TeamValidator {

    static validate = (data: ITeams) => {

        data.equipos.forEach(team => {

            if (!team.nombre) {
                throw Error(Message.NOMBRE_EQUIPO_REQUERIDO)
            }

            if (!team.meta) {
                throw Error(Message.META_POR_EQUIPO_REQUERIDO)
            }

            if (!team.jugadores || !team.jugadores.length) {
                throw Error(Message.JUGADORES_POR_EQUIPO_REQUERIDO)
            }

            team.jugadores.forEach(player => TeamValidator.team(player))
        })
    }

    static team = (player: IPlayer) => {

        if (!player.nombre) {
            throw Error(Message.NOMBRE_JUGADOR_REQUERIDO)
        }

        if (!player.nivel) {
            throw Error(Message.NIVEL_JUGADOR_REQUERIDO)
        }

        if (!player.goles || player.goles < 0) {
            throw Error(Message.GOLES_POR_JUGADOR_MAYOR_A_CERO)
        }

        if (!player.sueldo || player.sueldo <= 0) {
            throw Error(Message.SUELDO_POR_JUGADOR_MAYOR_A_CERO)
        }

        if (!player.bono || player.bono <= 0) {
            throw Error(Message.BONO_POR_JUGADOR_MAYOR_A_CERO)
        }
    }
}