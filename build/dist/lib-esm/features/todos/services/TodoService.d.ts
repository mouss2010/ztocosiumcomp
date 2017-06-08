/// <reference types="angular" />
import { ITodo } from '../interfaces/ITodo';
export declare class TodoService {
    private $q;
    constructor($q: angular.IQService);
    getInitTodos(): angular.IPromise<Array<ITodo>>;
}
