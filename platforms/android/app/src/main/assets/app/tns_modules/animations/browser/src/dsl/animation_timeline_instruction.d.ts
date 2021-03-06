/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ╔ÁStyleData } from '@angular/animations';
import { AnimationEngineInstruction } from '../render/animation_engine_instruction';
export interface AnimationTimelineInstruction extends AnimationEngineInstruction {
    keyframes: ╔ÁStyleData[];
    duration: number;
    delay: number;
    totalTime: number;
    easing: string;
}
export declare function createTimelineInstruction(keyframes: ╔ÁStyleData[], duration: number, delay: number, easing: string): AnimationTimelineInstruction;
