import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-interpolation',
    templateUrl: 'interpolation.component.html',
    styles : ['p {color: red}']
    // styleUrl: ''
})
export class InterpolationComponent{
    message = "lorem"

    sayHello(){
        return "Marhaban !!"
    }
}