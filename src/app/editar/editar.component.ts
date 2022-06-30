//Librerias
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Services creados por uno mismo
import { EmpleadosService } from '../services/empleados.service';
//Otras cositas utiles (clases, interfaces y pipes)
import { Empleado } from 'src/app/interfaces/empleado.interface'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})


export class EditarComponent implements OnInit {
  info:any=[];
  paramid:any;
  hoja:any;

  public Empleado: Empleado={
    id:'',
    nombre:'',
    apellido:'',
    email:'',
    sexo:'',
    hoja:' '
  }

  constructor(private router: Router,private idurl: ActivatedRoute, private Empleados: EmpleadosService) { }
  ngOnInit(): void {
    this.paramid=this.idurl.snapshot.params;
    this.datosdelEmpleado();
  }

  //boton de regresar usando navigate metodo añadido por el constructor nombrada Router
  llevameQuieroRegresar(){
  this.router.navigateByUrl('/ver')
  }

  TerminarEdicion(){
    alert('CORREGIDO')
    this.Empleado.id=this.paramid.id;
    this.Empleados.Actualizar(this.Empleado,this.Empleado.id).subscribe(data => {
      this.info= data;
      console.log(data);
    });
  }


  //recibimos el id desde la url y luego lo guardamos en ina variable global en este caso paramid y llamamos la funcion que recorre la api para traer los datos
  //se trae los datos del empleado y filtra por el id que recibe de la url y llama la funcion buscar la cual se encarga de recibir el id
  datosdelEmpleado(){
    this.Empleados.buscarid(this.idurl.snapshot.paramMap.get('id')).subscribe(data => {
      this.info=data;
      console.log(data);
      //for que recorre la informacion traida del backen donde por medio de un if friltrara la informacion de la api buscando el id que se selecciono y fue guardado en la variable paramid
      for(let i=0;i<this.info.length;i++){
        if(this.info[i].id==this.paramid.id){
          this.Empleado= this.info[i];
        }
      }
    });
  }
}
