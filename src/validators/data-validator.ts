import { ITeams, ITeam, ILevelType, ILevel } from "../interfaces"
import TeamValidator from "./teams-validator"
import MetaValidator from "./metas-validator"

export default class DataValidator {

    static data = (data: ITeams) => {
        DataValidator.init(data)
        MetaValidator.metas(data.metas)
        TeamValidator.teams(data.equipos)
        DataValidator.metaNoDefined(data)
        DataValidator.validatePlayerLevel(data)
    }

    static init = (data: ITeams) => {

        if (!data || !data.equipos || !data.equipos.length) {
            throw Error("lista de equipos es requerido")
        }

        if (!data || !data.metas || !data.metas.length) {
            throw Error("lista de metas es requerido")
        }
    }

    static metaNoDefined = (data: ITeams) => {

        const metaNotDefined = data.equipos.filter(team => {
            return !data.metas.some(meta => meta.nombre === team.meta)
        })

        if (metaNotDefined.length) {
            const err = `La meta [${metaNotDefined[0].meta}] del equipo [${metaNotDefined[0].nombre}] no concide con las metas definidas`
            throw Error(err)
        }
    }

    static validatePlayerLevel = (data: ITeams) => {

        const metasMap = DataValidator.getMetas(data.metas)
        for (let i = 0; i < data.equipos.length; i++) {
            DataValidator.validateMetaVsPlayerLevel(data.equipos[i], metasMap)
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
            const err = `El nivel [${level}] del jugador [${player}] del equipo [${team.nombre}] no concide con las metas definidas`

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