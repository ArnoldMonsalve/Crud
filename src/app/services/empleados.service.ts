import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {

  constructor(private http: HttpClient) {
    console.log('Servicio de empleados listo');


  }

  //servicio que traera la api del backend y afecta al componente ver
  mostrarEmpleados(){
    return this.http.get('https://localhost:7246/Miprimer')
  }

    //servicio que traera la api del backend y afecta al componente editar donde filtrara por el id tomandolo de la barra de busqueda donde se paso por el routing
  buscarid(id:any) {
    return this.http.get('https://localhost:7246/Miprimer',id)
  }

      //servicio que traera la api del backend y afecta al componente crear
  Guardar(Empleado:any){
      return this.http.post('https://localhost:7246/Miprimer',Empleado)
  }
  Actualizar(Empleado:any,id:any){
    return this.http.put(`https://localhost:7246/Miprimer?id=${id}`,Empleado)
  }

  Borrar(id:any){
    return this.http.delete(`https://localhost:7246/Miprimer?id=${id}`)
  }

}
