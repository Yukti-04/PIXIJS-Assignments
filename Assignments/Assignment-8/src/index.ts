import { Application } from 'pixi.js';
import { Game } from './Game';
import './css/main.css';
/***
 * Register pixi particles
 */
 // import {ParticleRenderer} from '@pixi/particle-container';
 // import {extensions} from '@pixi/core';
 
 // extensions.add(ParticleRenderer);
 ///;
window.onload = ()=>{
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    const app:Application = new Game({
        resizeTo: gameDiv,
        backgroundColor: 0x996633,
        sharedLoader: true,
        sharedTicker: true
    });
    gameDiv.appendChild(app.view);
}
