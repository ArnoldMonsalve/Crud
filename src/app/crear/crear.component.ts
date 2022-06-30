import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../services/empleados.service';
//Otras cositas utiles (clases, interfaces y pipes)
import { Empleado } from 'src/app/interfaces/empleado.interface'

//interfaz para crear un objeto vacio que reciba los datos que guardaremos
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  //objeto vacio que recibira los datos que usaremos al llamar la api
  info:any=[];
  cargada=false;
  constructor(private router: Router, private Empleados: EmpleadosService) { }

  //boton de regresar
  llevameQuieroRegresar(){
    this.router.navigateByUrl('/ver')
  }

  //inicializacion interfaz de un objeto vavio
  Empleado: Empleado={
    id:0,
    nombre:'',
    apellido:'',
    email:'',
    sexo:'',
    hoja:' '
  }

  //boton de crear empleado trae la info de la api y la guarda en un objeto vacio en este caso Empleado
  Guardar(){
    alert('Se inserto Correctamente el Empleado');
    console.log(this.Empleado);
    this.Empleados.Guardar(this.Empleado).subscribe(data => {
      this.info=data;
      this.cargada=true;
    });
  }

  ngOnInit(): void {
  /*
    this.Empleados.mostrarEmpleados().subscribe(data => {
      this.info=data;
      this.cargada=true;
      console.log(data);
    });*/
  }


}
