import 'mocha'
import { expect } from 'chai'

import File from '../../src/utils/file'
import Validator from '../../src/validators/data-validator'
import { ITeams } from '../../src/utils/interfaces';
import Message from "../../src/utils/errorMessage"

describe('Teams Validator', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('nombre equipo es requerido', () => {
        testFile = resources.concat('team-name-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.NOMBRE_EQUIPO_REQUERIDO)
    });

    it('jugadores por equipo es requerido', () => {
        testFile = resources.concat('team-players-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.JUGADORES_POR_EQUIPO_REQUERIDO)
    });

    it('meta por equipo es requerida', () => {
        testFile = resources.concat('team-meta-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.META_POR_EQUIPO_REQUERIDO)
    });

    it('nombre jugador es requerido', () => {
        testFile = resources.concat('player-name-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.NOMBRE_JUGADOR_REQUERIDO)
    });

    it('nivel de jugador es requerido', () => {
        testFile = resources.concat('player-level-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.NIVEL_JUGADOR_REQUERIDO)
    });

    it('goles por jugador es mayor o igual a cero', () => {
        testFile = resources.concat('player-goals-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.GOLES_POR_JUGADOR_MAYOR_A_CERO)
    });

    it('sueldo por jugador es mayor a cero', () => {
        testFile = resources.concat('player-salary-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.SUELDO_POR_JUGADOR_MAYOR_A_CERO)
    });

    it('bono por jugador es mayor a cero', () => {
        testFile = resources.concat('player-bonus-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.BONO_POR_JUGADOR_MAYOR_A_CERO)
    });
});