import { Pipe, PipeTransform } from '@angular/core';
import { ValidFilters } from '../redux/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: ValidFilters): Todo[] {
    if (filter === 'completed') {
      return value.filter(todo => todo.completed)
    } else if (filter === 'active') {
      return value.filter(todo => !todo.completed)
    } else {
      return value
    }
  }

}
