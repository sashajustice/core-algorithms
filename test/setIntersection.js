import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('return the intersection of two sets.', function(){
    expect(setIntersection([1,2,3,4], [3,2,52,5])).to.eql([3])
  })

})
