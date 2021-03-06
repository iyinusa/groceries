/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule, Type, ╔ÁReflectorReader } from '@angular/core';
/**
 * Resolves types to {@link NgModule}.
 */
export declare class NgModuleResolver {
    private _reflector;
    constructor(_reflector?: ╔ÁReflectorReader);
    isNgModule(type: any): boolean;
    resolve(type: Type<any>, throwIfNotFound?: boolean): NgModule;
}
