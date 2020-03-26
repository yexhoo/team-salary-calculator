import 'mocha'
import { expect } from 'chai'

import File from '../../src/utils/file'
import Validator from '../../src/validators/data-validator'
import { ITeams } from '../../src/utils/interfaces';
import Message from "../../src/utils/errorMessage"

describe('Metas Validator', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('nombre de la meta es requerido', () => {
        testFile = resources.concat('meta-name-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.NOMBRE_META_REQUERIDO)
    });

    it('meta de goles es requerido', () => {
        testFile = resources.concat('meta-goles-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.META_GOLES_REQUERIDO)
    });

    it('nivel de la meta de goles es requerido', () => {
        testFile = resources.concat('nivel-meta-goles-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.NIVEL_META_GOLES_REQUERIDO)
    });

    it('numero de goles es requerido', () => {
        testFile = resources.concat('numero-goles-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.NUMERO_GOLES_REQUERIDO)
    });

    it('numero de goles debe ser mayor a cero', () => {
        testFile = resources.concat('numero-goles-is-greather-than-zero.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, Message.NUMERO_GOLES_MAYOR_CERO)
    });
});