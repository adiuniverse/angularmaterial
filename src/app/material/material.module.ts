import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
const materialComponents = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule
]


@NgModule({
    declarations: [

    ],
    imports: [
    //   MatToolbarModule,
    materialComponents
    ],

    exports:[
        // MatToolbarModule
        materialComponents
    ]
    
  })
  export class MaterialModule{

  }
 
  