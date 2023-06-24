import {test} from './func'

console.table( {
    type:'webpack',
    version: 5,
    tsActive: true,
})

const t = test ( 12)
console.log(t)
