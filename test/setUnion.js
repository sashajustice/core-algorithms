import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('Return the union of two sets.', function(){
    expect(setUnion([1,2,3,4], [3,2,52,5])).to.eql([1, 2, 3, 4, 5, 52])
  })

})
