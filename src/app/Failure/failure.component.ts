import {Component} from '@angular/core'

@Component({
    selector: 'failure',
    template: `<h3>Password characters must be between 8 to 15</h3>`,
    styles: [`h3{
        color: red;
    }`]
})

export class failureApp{
    
}