const opositores = [{
  id: 1,
  nombre: 'Pepe',
  especialidad: 'Informática'
}, {
  id: 2,
  name: 'Leyre',
  especialidad: 'Sistemas y aplicaciones informáticas'
}]

const notas = [{
  id: 1,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 1,
  prueba: 'Teórica',
  nota: 6.5
}, {
  id: 2,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 2,
  prueba: 'Teórica',
  nota: 6.5
}
]

const getDataByAttribute = (attributeName, value, arrayParam) => {
  return new Promise( (resolve, reject) => {
      const element = arrayParam.filter((element) => element[attributeName] === value)
      if(element){
        resolve(element)
      }else{
        reject(new Error(`No se ha encontrado el opositor con campo ${fieldName} igual a ${fieldValue}`))
      }
    }
  )
}

const resultado = new Object()
const promiseNombre = getDataByAttribute("id", 1, opositores)
const promiseNotas = getDataByAttribute("id", 1, notas)

Promise.all([promiseNombre, promiseNotas]).
then((arrayValues) => {
  console.log(arrayValues)
})

// crea promesa para obtener los datos del opositor 1

// crea promesa para obtener las notas del opositor 1

// crea promesa para obtener el nombre y las notas del opositor1