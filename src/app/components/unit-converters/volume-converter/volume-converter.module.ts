import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InOutTextInputModule } from 'src/app/UI/in-out-text-inputs/in-out-text-inputs.module';
import { SelectAlwaysOpenComponent } from 'src/app/UI/select-always-open/select-always-open.component';
import { ResultActionsBtnComponent } from 'src/app/UI/result-actions-btn/result-actions-btn.component';
import { CommonModule } from '@angular/common';
import { PoppularLinksComponent } from '../poppular-links/poppular-links.component';
import { VolumeUnitConverterComponent } from './volume-unit-converter/volume-unit-converter.component';
import { VolumeUnitsService } from './volume-units.service';
import { VolumeConverterComponent } from './volume-converter.component';

@NgModule({
  declarations: [VolumeConverterComponent,VolumeUnitConverterComponent],
  imports: [
      FormsModule,
      CommonModule,
      SelectAlwaysOpenComponent,
      InOutTextInputModule,
      ResultActionsBtnComponent,
      PoppularLinksComponent,
      RouterModule.forChild([{ path: '', component: VolumeConverterComponent}, 
      
      {path: ':units-type', component:VolumeUnitConverterComponent }
    ])],
      providers:[VolumeUnitsService]

})
export class VolumeConverterModule { }