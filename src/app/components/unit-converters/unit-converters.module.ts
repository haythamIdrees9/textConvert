import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResultActionsBtnComponent } from '../../UI/result-actions-btn/result-actions-btn.component';
import { UnitConvertersComponent } from './unit-converters.component';
import { ExpandablePanalModule } from 'src/app/UI/expandable-panal/expandable-panal.module';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UnitConvertersComponent, MainComponent],
  imports: [
      FormsModule,
      ResultActionsBtnComponent,
      ExpandablePanalModule,
      CommonModule,
       RouterModule.forChild([
        { path: '', component: UnitConvertersComponent,children:[
          {path:'',component:MainComponent},
          {path: 'length', loadChildren: () => import('./length-converter/length-converter.module').then(m => m.LengthConverterModule)}]
        }
      ])
    ]

})
export class UnitConvertersModule { }