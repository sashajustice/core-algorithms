import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })

  it('return the difference of two sets', function(){
    expect(setSymmetricDifference([1,2,3,4], [2, 4, 6, 8])).to.eql([1, 3])
  })

})

