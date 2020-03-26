import 'mocha'
import { expect } from 'chai'

import File from '../../src/utils/file'
import Validator from '../../src/validators/data-validator'
import { ITeams } from '../../src/utils/interfaces';
import Message from "../../src/utils/errorMessage"

describe('Data Validator', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('lista de equipos es requerido', () => {
        testFile = resources.concat('team-list-is-required.json')
        const list: ITeams = File.readJson(testFile)

        expect(() => Validator.data(list)).to.throw(Error, Message.LISTA_EQUIPOS_REQUERIDO)
    });

    it('lista de metas es requerido', () => {
        testFile = resources.concat('level-types-is-required.json')
        const list: ITeams = File.readJson(testFile)

        expect(() => Validator.data(list)).to.throw(Error, Message.LISTA_METAS_REQUERIDO)
    });
});