import { ILevelType, ILevel } from "./interfaces"

export default class Extractor {

    static getMetas = (metas: ILevelType[]): Map<string, ILevel[]> => {

        const metasMap = new Map<string, ILevel[]>()
        metas.forEach(meta => {
            if (!metasMap.has(meta.nombre)) {
                metasMap.set(meta.nombre, meta.meta_de_goles)
            }
        })

        return metasMap
    }

    static getLevelGoals = (levelPlayer: string, metaTeam: string, metas: Map<string, ILevel[]>) =>
        metas.get(metaTeam)!.find(level => level.nivel === levelPlayer)?.numero_goles

}