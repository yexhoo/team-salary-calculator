import 'mocha'
import { expect } from 'chai'

import File from '../../src/file'
import Validator from '../../src/validators/data-validator'
import { ITeams } from '../../src/interfaces';

describe('Teams Validator', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('nombre equipo es requerido', () => {
        testFile = resources.concat('team-name-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "nombre equipo es requerido")
    });

    it('jugadores por equipo es requerido', () => {
        testFile = resources.concat('team-players-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "jugadores por equipo es requerido")
    });

    it('meta por equipo es requerida', () => {
        testFile = resources.concat('team-meta-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "meta por equipo es requerida")
    });

    it('nombre jugador es requerido', () => {
        testFile = resources.concat('player-name-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "nombre jugador es requerido")
    });

    it('nivel de jugador es requerido', () => {
        testFile = resources.concat('player-level-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "nivel de jugador es requerido")
    });

    it('goles por jugador es mayor o igual a cero', () => {
        testFile = resources.concat('player-goals-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "goles por jugador es mayor o igual a cero")
    });

    it('sueldo por jugador es mayor a cero', () => {
        testFile = resources.concat('player-salary-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "sueldo por jugador es mayor a cero")
    });

    it('bono por jugador es mayor a cero', () => {
        testFile = resources.concat('player-bonus-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "bono por jugador es mayor a cero")
    });
});