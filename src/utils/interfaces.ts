interface ITeams {
    metas: ILevelType[]
    equipos: ITeam[]
}

interface ILevelType {
    nombre: string
    meta_de_goles: ILevel[]
}

interface ITeam {
    nombre: string
    meta: string
    jugadores: IPlayer[]
}

interface ILevel {
    nivel: string
    numero_goles: number
}

interface IPlayer {
    nombre: string
    nivel: string
    goles: number
    sueldo: number
    bono: number
    sueldo_completo: number
}

interface ITotalTeamGoals {
    scored: number
    required: number
}

export {
    ITeams,
    ITeam,
    ILevel,
    IPlayer,
    ILevelType,
    ITotalTeamGoals
}