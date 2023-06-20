import * as _atoms from './components/atoms'
import {NgModule} from "@angular/core";
import {NgClass} from "@angular/common";
import { AtomsCheckboxComponent } from './components/atoms/atoms-checkbox/atoms-checkbox.component';
const ATOMS=[
  _atoms.AtomsButtonComponent
]

@NgModule({
  imports: [
    NgClass
  ],
  declarations:[
    ...ATOMS,
    AtomsCheckboxComponent
  ],
  exports:[
    ...ATOMS
  ]
})

export class SharedModule {
  
}
