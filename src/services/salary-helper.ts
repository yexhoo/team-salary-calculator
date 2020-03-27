import { ITeam, ILevel, ITotalTeamGoals } from "../utils/interfaces";
import Extractor from "../utils/extractor"

export default class SalaryHelper {

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

    static getPercentage = (scored: number, required: number) =>
        (((scored * 100) / required) * 0.5) / 100
}