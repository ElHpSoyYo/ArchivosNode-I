const {argv, encontarCurso} = require('./primeraEntrega.js')
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  nombre = argv.n
  cedula = argv.c
  id = argv.i
  curso = encontarCurso(parseInt(id))
  if (curso == -1){
      console.log("Ha ingresado un ID que no corresponde a ningun curso")
      var texto = ""
      for (const curso in cursos) 
      {
          nombre = cursos[curso].nombre
          tiempo = cursos[curso].duracion
          valor = cursos[curso].valor
          id = cursos[curso].id
          texto += `El curso se llama ${nombre}, el id es ${id}, tiene una duracion de ${tiempo} horas y un valor de ${valor} pesos\n`
          
      }
      re.send(texto)
  }
  else
  {
      texto = `El estudiante ${nombre}\nCon cedula ${cedula}\nSe ha matriculado en ${curso.nombre}, ${curso.nombre} tiene una duracion de ${curso.duracion} y un valor de ${curso.valor}`
      res.send(texto)
  }
})
 
app.listen(3000)



