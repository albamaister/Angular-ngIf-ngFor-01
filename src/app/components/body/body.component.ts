import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'Un gran poder conlleva una gran resposabilidad.',
        autor: 'Ben Parker'
    };
    personajes: string[] = ['Spiderman' , 'Venom' , 'Dr. Octopues'];
}
