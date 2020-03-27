import { ITeams, ITeam, ILevel, ITotalTeamGoals, IPlayer } from "../utils/interfaces";
import DataValidator from "../validators/data-validator"
import Extractor from "../utils/extractor"
import SalaryHelper from "./salary-helper"

export default class Salary {

    static update = (data: ITeams): ITeams => {

        DataValidator.data(data)
        const metas = Extractor.getMetas(data.metas)
        data.equipos = data.equipos.map(team => Salary.updateTeam(team, metas))

        return data
    }

    static updateTeam = (team: ITeam, metas: Map<string, ILevel[]>): ITeam => {

        const totals: ITotalTeamGoals = SalaryHelper.getTotalGoals(team, metas)
        const teamPercentage = SalaryHelper.getPercentage(totals.scored, totals.required)
        team.jugadores = team.jugadores
            .map(player => Salary.updatePlayer(player, team.meta_equipo, teamPercentage, metas))

        return team
    }

    static updatePlayer = (p: IPlayer, meta: string,
        teamPercentage: number, metas: Map<string, ILevel[]>): IPlayer => {

        const required: number = Extractor.getLevelGoals(p.nivel_jugador, meta, metas)!
        const scored: number = p.goles_jugador >= required ? required : p.goles_jugador
        const playerPercentage = SalaryHelper.getPercentage(scored, required)
        p.sueldo_completo_jugador = Number((p.sueldo_jugador + (p.bono_jugador * (playerPercentage + teamPercentage))).toFixed(2))

        return p
    }
}