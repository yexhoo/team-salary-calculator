import 'mocha'
import { expect } from 'chai'
import Util from "util"

import File from '../../src/utils/file'
import Validator from '../../src/validators/data-validator'
import { ITeams } from '../../src/utils/interfaces';
import Message from "../../src/utils/errorMessage"

describe('Data Constraints Validator', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('Meta por equipo no coincide con las metas definidas', () => {
        testFile = resources.concat('data-meta-no-defined.json')
        const list: ITeams = File.readJson(testFile)

        const meta = list.equipos[1].meta
        const team = list.equipos[1].nombre
        const expectedError = Util.format(Message.META_EQUIPO_NO_COINCIDE, meta, team)

        expect(() => Validator.data(list)).to.throw(Error, expectedError)
    });

    it('Nivel por jugador no coincide con las metas definidas', () => {
        testFile = resources.concat('data-player-level-meta-no-defined.json')
        const list: ITeams = File.readJson(testFile)

        const nivel = list.equipos[0].jugadores[0].nivel
        const player = list.equipos[0].jugadores[0].nombre
        const team = list.equipos[0].nombre

        const expectedError = Util.format(Message.NIVEL_JUGADOR_NO_COINCIDE, nivel, player, team)
        expect(() => Validator.data(list)).to.throw(Error, expectedError)
    });
});