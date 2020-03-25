import MyService from '../../../src/services/myService'
import {expect} from 'chai'
import 'mocha'

describe('test one', ()=>{

    let service:MyService;

    beforeEach(()=>{
        service = new MyService()
    })

    it('should return true', ()=>{
        expect(service.doTest()).to.equal(true)
    });

});