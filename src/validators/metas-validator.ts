import { ILevel, ILevelType } from "../interfaces"

export default class MetaValidator {

    static metas = (levels: ILevelType[]) => {

        levels.forEach(level => {

            if (!level.nombre) {
                throw Error("nombre de la meta es requerido")
            }

            if (!level.meta_de_goles || !level.meta_de_goles.length) {
                throw Error("meta_de_goles es requerido")
            }

            level.meta_de_goles.forEach(meta => MetaValidator.meta(meta))
        })
    }

    static meta = (level: ILevel) => {

        if (!level.nivel) {
            throw Error("nivel de la meta de goles es requerido")
        }

        if (!level.numero_goles) {
            throw Error("numero de goles es requerido")
        }

        if (level.numero_goles <= 0) {
            throw Error("numero_goles debe ser mayor a cero")
        }
    }
}