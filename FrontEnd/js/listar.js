var listar = 'http://localhost:9080/api/consultaCL/clientes_region';

fetch(listar)
      .then( response => response.json() )
      .then( data => mostrarData(data) )
      .catch( error => console.log(error) )

  const mostrarData = (data) => {
      console.log(data)
      let body = ""
      for (var i = 0; i < data.length; i++) {      
         body+=`<tr><td>${data[i].region}</td><td>${data[i].cantidad} </td>
         </tr>`
      }
      document.getElementById('data').innerHTML = body
      //console.log(body)
  }