import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {
  info:any=[];
  eliminarid:any;


  constructor(private router: Router,private Empleados: EmpleadosService) { }

  //llamado de la funcion mostrarempleados la cual apenas abramos la vista se ejevutara y mostrara la info de la api por eso se dejo dentro del on init para cumplir con la funcion read
  ngOnInit(): void {
    this.TraerDatos();
  }


  //funcion que afecta el icono de editar por medio del click y traera el id por medio del routing
  llevameQuieroEditar(id:any){
  console.log(id);
  this.router.navigateByUrl('/editar/'+id)
  }

  //boton para ir a la vista crear
  llevameQuieroCrear(){
    this.router.navigateByUrl('/crear')
  }

  //boton de regreso al login
  QuieroIralHome(){
    this.router.navigateByUrl('/home')
  }

  TraerDatos(){
    this.Empleados.mostrarEmpleados().subscribe(data => {
      this.info=data;
      console.log(data);
    },
    (error)=>{
      alert(error.message);
    });
  }

  Adios(){
      console.log(this.eliminarid);
      this.Empleados.Borrar(parseInt(this.eliminarid)).subscribe(data => {
        this.TraerDatos();
      },
      (error)=>{
        alert(error.message);
      });
    }
}


