import '../../utils/stringHelper'
import { paginate } from '../../utils/pagination'

test('assert if converted string to int', () => {
    let sum = 1 + 3
    let expectedValue = 4
    console.log(paginate([], 1, 10))
    expect(sum).toBe(expectedValue)
})
