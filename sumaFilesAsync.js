const fs = require('fs')
fs.readFile('./numero1', 'utf-8', (err, numero1) => {
  console.log(`Fichero 1 leído`)
  if (err) throw err
  fs.readFile('./numero2', 'utf-8', (err, numero2) => {
    console.log(`Fichero 2 leído`)
    if (err) throw err
    console.log(`El resultado de la suma es  ${parseInt(numero1) + parseInt(numero2)}`)
  })
})
console.log(`Todavía no tengo el resultado de la suma`)