/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Type, ╔ÁReflectorReader } from '@angular/core';
export declare class DirectiveResolver {
    private _reflector;
    constructor(_reflector?: ╔ÁReflectorReader);
    isDirective(type: Type<any>): boolean;
    /**
     * Return {@link Directive} for a given `Type`.
     */
    resolve(type: Type<any>, throwIfNotFound?: boolean): Directive;
    private _mergeWithPropertyMetadata(dm, propertyMetadata, directiveType);
    private _extractPublicName(def);
    private _dedupeBindings(bindings);
    private _merge(directive, inputs, outputs, host, queries, directiveType);
}
export declare function findLast<T>(arr: T[], condition: (value: T) => boolean): T;
