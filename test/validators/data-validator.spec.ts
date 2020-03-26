import 'mocha'
import { expect } from 'chai'

import File from '../../src/file'
import Validator from '../../src/validators/data-validator'
import { ITeams } from '../../src/interfaces';

describe('Data Validator', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('lista de equipos es requerido', () => {
        testFile = resources.concat('team-list-is-required.json')
        const list: ITeams = File.readJson(testFile)

        expect(() => Validator.data(list)).to.throw(Error, "lista de equipos es requerido")
    });

    it('lista de metas es requerido', () => {
        testFile = resources.concat('level-types-is-required.json')
        const list: ITeams = File.readJson(testFile)

        expect(() => Validator.data(list)).to.throw(Error, "lista de metas es requerido")
    });

    it('Meta por equipo no coincide con las metas definidas', () => {
        testFile = resources.concat('data-meta-no-defined.json')
        const list: ITeams = File.readJson(testFile)

        const expectedError = `La meta [${list.equipos[1].meta}] del equipo [${list.equipos[1].nombre}] no concide con las metas definidas`
        expect(() => Validator.data(list)).to.throw(Error, expectedError)
    });

    it('Nivel por jugador no coincide con las metas definidas', () => {
        testFile = resources.concat('data-player-level-meta-no-defined.json')
        const list: ITeams = File.readJson(testFile)

        const nivel = list.equipos[0].jugadores[0].nivel
        const player = list.equipos[0].jugadores[0].nombre
        const team = list.equipos[0].nombre

        const expectedError = `El nivel [${nivel}] del jugador [${player}] del equipo [${team}] no concide con las metas definidas`
        expect(() => Validator.data(list)).to.throw(Error, expectedError)
    });
});