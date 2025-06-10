import { LightningElement, track } from 'lwc';

export default class DomPlayground extends LightningElement {

    @track fruits = [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'cherry' }
    ];

    updateText(){
        const input = this.template.querySelector('.name-input');
        const value = input.value;

        const output = this.template.querySelector('.output-text');
        output.textContent = `Hello ${value}!`;
        
    }
}