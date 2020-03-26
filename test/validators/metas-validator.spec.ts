import 'mocha'
import { expect } from 'chai'

import File from '../../src/file'
import Validator from '../../src/validators/data-validator'
import { ITeams } from '../../src/interfaces';

describe('Metas Validator', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('nombre de la meta es requerido', () => {
        testFile = resources.concat('meta-name-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "nombre de la meta es requerido")
    });

    it('meta de goles es requerido', () => {
        testFile = resources.concat('meta-goles-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "meta_de_goles es requerido")
    });

    it('nivel de la meta de goles es requerido', () => {
        testFile = resources.concat('nivel-meta-goles-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "nivel de la meta de goles es requerido")
    });

    it('numero de goles es requerido', () => {
        testFile = resources.concat('numero-goles-is-required.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "numero de goles es requerido")
    });

    it('numero de goles debe ser mayor a cero', () => {
        testFile = resources.concat('numero-goles-is-greather-than-zero.json')
        const list: ITeams = File.readJson(testFile)
        expect(() => Validator.data(list)).to.throw(Error, "numero_goles debe ser mayor a cero")
    });
});