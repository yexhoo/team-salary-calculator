import { ILevel, ILevelType, ITeams } from "../utils/interfaces"
import Message from "../utils/errorMessage"

export default class MetaValidator {

    static validate = (data: ITeams) => {

        if (!data || !data.equipos || !data.equipos.length) {
            throw Error(Message.LISTA_EQUIPOS_REQUERIDO)
        }

        if (!data || !data.metas || !data.metas.length) {
            throw Error(Message.LISTA_METAS_REQUERIDO)
        }

        MetaValidator.metas(data.metas)
    }

    static metas = (levels: ILevelType[]) => {

        levels.forEach(level => {

            if (!level.nombre) {
                throw Error(Message.NOMBRE_META_REQUERIDO)
            }

            if (!level.meta_de_goles || !level.meta_de_goles.length) {
                throw Error(Message.META_GOLES_REQUERIDO)
            }

            level.meta_de_goles.forEach(meta => MetaValidator.meta(meta))
        })
    }

    static meta = (level: ILevel) => {

        if (!level.nivel) {
            throw Error(Message.NIVEL_META_GOLES_REQUERIDO)
        }

        if (!level.numero_goles) {
            throw Error(Message.NUMERO_GOLES_REQUERIDO)
        }

        if (level.numero_goles <= 0) {
            throw Error(Message.NUMERO_GOLES_MAYOR_CERO)
        }
    }
}