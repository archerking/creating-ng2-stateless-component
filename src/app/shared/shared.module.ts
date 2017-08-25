import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatelessCompComponent } from './stateless-comp/stateless-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [StatelessCompComponent],
  exports: [StatelessCompComponent],
  providers: [StatelessCompComponent]
})
export class SharedModule { }
