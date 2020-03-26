import { ITeams } from "../utils/interfaces"
import Team from "./teams-validator"
import Meta from "./metas-validator"
import Constraints from "./constraints-validator"

export default class DataValidator {

    static data = (data: ITeams) => {
        Meta.validate(data)
        Team.validate(data)
        Constraints.validate(data)
    }
}