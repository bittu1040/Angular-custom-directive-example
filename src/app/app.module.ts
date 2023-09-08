import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResizableDirective } from './resizable.directive';
import { CustomDesignDirective } from './custom-design.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatTableModule],
  declarations: [ AppComponent, HelloComponent, ResizableDirective, CustomDesignDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
