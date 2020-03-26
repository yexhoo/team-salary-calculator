import { ITeams, ITeam, ILevelType, ILevel } from "../utils/interfaces"
import Util from "util"
import Message from "../utils/errorMessage"

export default class DataConstraintsValidator {

    static validate = (data: ITeams) => {
        DataConstraintsValidator.metaNoDefined(data)
        DataConstraintsValidator.playerLevel(data)
    }

    static metaNoDefined = (data: ITeams) => {

        const metaNotDefined = data.equipos.filter(team => {
            return !data.metas.some(meta => meta.nombre === team.meta)
        })

        if (metaNotDefined.length) {
            const meta = metaNotDefined[0].meta
            const team = metaNotDefined[0].nombre
            const err = Util.format(Message.META_EQUIPO_NO_COINCIDE, meta, team)

            throw Error(err)
        }
    }

    static playerLevel = (data: ITeams) => {

        const metasMap = DataConstraintsValidator.getMetas(data.metas)
        for (let i = 0; i < data.equipos.length; i++) {
            DataConstraintsValidator.validateMetaVsPlayerLevel(data.equipos[i], metasMap)
        }
    }

    static validateMetaVsPlayerLevel = (team: ITeam, metasMap: Map<string, ILevel[]>) => {

        const playersLevelNotDefined = team.jugadores.filter(player => {

            const meta_de_goles: ILevel[] = metasMap.get(team.meta)!
            return !meta_de_goles.some(mg => mg.nivel === player.nivel)
        })

        if (playersLevelNotDefined) {

            const level = playersLevelNotDefined[0].nivel
            const player = playersLevelNotDefined[0].nombre
            const err = Util.format(Message.NIVEL_JUGADOR_NO_COINCIDE, level, player, team.nombre)

            throw Error(err)
        }
    }

    static getMetas = (metas: ILevelType[]): Map<string, ILevel[]> => {

        const metasMap = new Map<string, ILevel[]>()
        metas.forEach(meta => {
            if (!metasMap.has(meta.nombre)) {
                metasMap.set(meta.nombre, meta.meta_de_goles)
            }
        })

        return metasMap
    }
}