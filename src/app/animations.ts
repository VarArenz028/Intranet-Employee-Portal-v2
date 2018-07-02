import { trigger, state, style, transition, animate, query } from "@angular/animations";

export let fade = trigger('fade', [

    state('hide', style({ opacity : 0, display : 'none'})),
    state('show', style({ opacity : 1, display : 'block'})),

    transition('hide <=> show', [
        animate('0.3s 300ms linear')
    ]),

    

]);
