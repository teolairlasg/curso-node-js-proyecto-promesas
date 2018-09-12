const fs = require('fs')

const getData = (fileName, type) => new Promise(
  (resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
        err ? reject(err) : resolve(parseInt(data))
    })
  }
)

var promise1 = getData('numero1', 'utf-8')
var promise2 = getData('numero2', 'utf-8')
Promise.all([promise1, promise2]).
then((arrayValues) => {
  let sum = arrayValues.reduce((sum, x) => sum +x)
  /* Aquí lo solucionamos con un foreach en lugar del reduce.
  let sum2 = 0;
  arrayValues.forEach(element => { sum2 +=element });
  console.log(sum2)
  */
  console.log(sum)
  
})