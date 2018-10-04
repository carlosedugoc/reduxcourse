import { Todo } from "./todo/model/todo.model";
import { ActionReducerMap } from "@ngrx/store";
import * as fromTodo from "./todo/todo.reducer";
import * as fromFilter from "./filter/filter.reducer";
import * as fromFiltroAction from "./filter/filter.actions";
export interface AppState{
    todos: Todo[],
    filtro: fromFiltroAction.filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFilter.filtroReducer
}