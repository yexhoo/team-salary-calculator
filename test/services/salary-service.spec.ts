import 'mocha'
import { expect } from 'chai'

import File from '../../src/utils/file'
import Salary from '../../src/services/salary-service'
import { ITeams } from '../../src/utils/interfaces';

describe('Salary', () => {

    let testFile: string, resources: string = __dirname.concat("/resources/");

    it('Un equipo un jugador cero goles', () => {
        testFile = resources.concat('one-team-one-player-without-goals.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player0 = updated.equipos[0].jugadores[0]
        expect(player0.sueldo_completo).is.equal(50000)
    });

    it('Un equipo un jugador un gol', () => {
        testFile = resources.concat('one-team-one-player-one-goals.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player0 = updated.equipos[0].jugadores[0]
        
        expect(player0.sueldo_completo).is.equal(50500)
    });

    it('Un equipo un jugador mitad de goles', () => {
        testFile = resources.concat('one-team-one-player-half-goals.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player0 = updated.equipos[0].jugadores[0]
        expect(player0.sueldo_completo).is.equal(55000)
    });

    it('Un equipo un jugador meta de goles igual meta esperada', () => {
        testFile = resources.concat('one-team-one-player-goals-equals-expected.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player0 = updated.equipos[0].jugadores[0]
        expect(player0.sueldo_completo).is.equal(60000)
    });

    it('Un equipo un jugador meta de goles mayor meta esperada', () => {
        testFile = resources.concat('one-team-one-player-goals-greater-than-expected.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player0 = updated.equipos[0].jugadores[0]
        expect(player0.sueldo_completo).is.equal(60000)
    });

    it('Un equipo multiples jugadores', () => {
        testFile = resources.concat('one-team-multiple-players.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player0 = updated.equipos[0].jugadores[0]
        const player1 = updated.equipos[0].jugadores[1]
        const player2 = updated.equipos[0].jugadores[2]
        const player3 = updated.equipos[0].jugadores[3]
        
        expect(player0.sueldo_completo).is.equal(29800)
        expect(player1.sueldo_completo).is.equal(28300)
        expect(player2.sueldo_completo).is.equal(29800)
        expect(player3.sueldo_completo).is.equal(59550)
    });

    it('Multiples equipos, un jugador por equipo, misma meta de goles', () => {
        testFile = resources.concat('multiple-teams-one-player-same-meta.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player_OneTeam = updated.equipos[0].jugadores[0]
        const player_SecondTeam = updated.equipos[1].jugadores[0]
        
        expect(player_OneTeam.sueldo_completo).is.equal(60000)
        expect(player_SecondTeam.sueldo_completo).is.equal(30000)
    });

    it('Multiples equipos, un jugador por equipo, diferente meta de goles', () => {
        testFile = resources.concat('multiple-teams-one-player-different-meta.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)

        const player_OneTeam = updated.equipos[0].jugadores[0]
        const player_SecondTeam = updated.equipos[1].jugadores[0]
        
        expect(player_OneTeam.sueldo_completo).is.equal(60000)
        expect(player_SecondTeam.sueldo_completo).is.equal(5333.33)
    });

    it('Multiples equipos, multiples jugadores, diferente meta de goles', () => {
        testFile = resources.concat('multiple-teams-multiple-players-different-meta.json')
        const list: ITeams = File.readJson(testFile)
        const updated = Salary.update(list)


        const player_0_OneTeam = updated.equipos[0].jugadores[0]
        const player_1_OneTeam = updated.equipos[0].jugadores[1]


        const player_0_SecondTeam = updated.equipos[1].jugadores[0]
        const player_1_SecondTeam = updated.equipos[1].jugadores[1]
        const player_2_SecondTeam = updated.equipos[1].jugadores[2]


        expect(player_0_OneTeam.sueldo_completo).is.equal(59600)
        expect(player_1_OneTeam.sueldo_completo).is.equal(47600)

        expect(player_0_SecondTeam.sueldo_completo).is.equal(3000)
        expect(player_1_SecondTeam.sueldo_completo).is.equal(4000)
        expect(player_2_SecondTeam.sueldo_completo).is.equal(6000)
    });
});