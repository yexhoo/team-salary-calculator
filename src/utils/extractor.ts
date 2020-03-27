import { ILevelType, ILevel } from "./interfaces"

export default class Extractor {

    static getMetas = (metas: ILevelType[]): Map<string, ILevel[]> => {

        const metasMap = new Map<string, ILevel[]>()
        metas.forEach(meta => {
            if (!metasMap.has(meta.nombre_meta)) {
                metasMap.set(meta.nombre_meta, meta.meta_de_goles)
            }
        })

        return metasMap
    }

    static getLevelGoals = (levelPlayer: string, metaTeam: string, metas: Map<string, ILevel[]>) =>
        metas.get(metaTeam)!.find(level => level.nivel_meta === levelPlayer)?.numero_goles

}