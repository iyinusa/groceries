/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AnimationPlayer, ╔ÁStyleData } from '@angular/animations';
import { AnimationDriver } from '../animation_driver';
import { WebAnimationsPlayer } from './web_animations_player';
export declare class WebAnimationsDriver implements AnimationDriver {
    animate(element: any, keyframes: ╔ÁStyleData[], duration: number, delay: number, easing: string, previousPlayers?: AnimationPlayer[]): WebAnimationsPlayer;
}
export declare function supportsWebAnimations(): boolean;
