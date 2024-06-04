import { Component } from '@angular/core';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  Department=[
    {
      id:1,
      name:'Health Care',
      img: "../../../assets/healthcare.jpg"
    },
    {
      id:2,
      name:'Banking and Finance',
      img:'../../../assets/banking.jpg'
    },
    {
      id:3,
      name:'Aeronautical',
      img:'../../../assets/aeronautical.jpg'
    },
    {id:4,
      name:'Mobility',
      img:'../../../assets/mobility.jpg'

    },
    {
      id:5,
      name:'GIS',
      img:'../../../assets/GIS2.JPG'
    },
  {id:6,
    name:'insurance',
    img:'../../../assets/insurance.jpg'
  }

  ]

}


