/// <reference types="angular" />
import * as angular from 'angular';
import { IFeature, ICompose } from '../interfaces/IFeature';
export declare function registerFeature(feature: IFeature): void;
export declare function registerCommon(app: angular.IModule, feature: ICompose): void;
