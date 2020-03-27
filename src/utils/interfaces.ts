interface ITeams {
    metas: ILevelType[]
    equipos: ITeam[]
}

interface ILevelType {
    nombre_meta: string
    meta_de_goles: ILevel[]
}

interface ITeam {
    nombre_equipo: string
    meta_equipo: string
    jugadores: IPlayer[]
}

interface ILevel {
    nivel_meta: string
    numero_goles: number
}

interface IPlayer {
    nombre_jugador: string
    nivel_jugador: string
    goles_jugador: number
    sueldo_jugador: number
    bono_jugador: number
    sueldo_completo_jugador: number
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