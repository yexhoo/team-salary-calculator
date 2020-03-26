import { ITeams, ITeam, ILevel, ITotalTeamGoals, IPlayer } from "../utils/interfaces";
import DataValidator from "../validators/data-validator"
import Extractor from "../utils/extractor"

export default class Salary {

    static update = (data: ITeams): ITeams => {

        DataValidator.data(data)

        const metas = Extractor.getMetas(data.metas)
        data.equipos = data.equipos.map(team => { return Salary.updateTeam(team, metas); })

        return data
    }

    static updateTeam = (team: ITeam, metas: Map<string, ILevel[]>): ITeam => {

        const total = Salary.getTotalGoals(team, metas)
        const teamPercentage = (((total.scored * 100) / total.required) * 0.5) / 100

        team.jugadores = team.jugadores
            .map(player => { return Salary.updatePlayer(player, team.meta, teamPercentage, metas) })

        return team
    }

    static updatePlayer = (player: IPlayer, meta: string, teamPercentage: number, metas: Map<string, ILevel[]>): IPlayer => {

        const required: number = Extractor.getLevelGoals(player.nivel, meta, metas)!
        const scored: number = player.goles >= required ? required : player.goles
        const playerPercentage = Salary.getPercentage(scored, required)

        player.sueldo_completo = Number((player.sueldo + (player.bono * (playerPercentage + teamPercentage))).toFixed(2))

        return player
    }

    static getPercentage = (scored: number, required: number) => (((scored * 100) / required) * 0.5) / 100

    static getTotalGoals = (team: ITeam, metas: Map<string, ILevel[]>): ITotalTeamGoals => {

        const scored: number = team.jugadores
            .reduce((scored, p) => { return scored + p.goles; }, 0);

        const required: number = team.jugadores
            .reduce((required, p) => {
                return required + Extractor.getLevelGoals(p.nivel, team.meta, metas)!;
            }, 0);

        return <ITotalTeamGoals>{
            scored: scored >= required ? required : scored,
            required: required
        }
    }
}