import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import * as fromTodo from '../todo.actions'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes']
  filtroActual: fromFiltro.filtrosValidos
  pendientes: number

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    let contarPendientes = ((todos: Todo[]) => {
      this.pendientes = todos.filter(todo => !todo.completado).length
    })

    this.store.subscribe(state => {
      this.filtroActual = state.filtro
      contarPendientes(state.todos)
    })
  }

  limpiarCompletados() {
    const accion = new fromTodo.LimpiarCompletadosTodoAction()
    this.store.dispatch(accion)
  }



  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAccion(nuevoFiltro)
    this.store.dispatch(accion)
  }

}
