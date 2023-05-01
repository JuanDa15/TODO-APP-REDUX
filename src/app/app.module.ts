import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './redux/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoFooterComponent,
    TodoComponent,
    TodoListComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({todos: TodoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
