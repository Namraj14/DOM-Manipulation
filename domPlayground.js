import { LightningElement, track } from 'lwc';

export default class DomPlayground extends LightningElement {

      @track fruits = [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'cherry' }
    ];

    updateText() {
        // Get input value
        const input = this.template.querySelector('.name-input');
        const value = input.value;

        // Update the textContent of output paragraph
        const output = this.template.querySelector('.output-text');
        output.textContent = `Hello, ${value || 'stranger'}!`;

        // Using dataset: Add a dynamic data attribute
        output.dataset.name = value;
        console.log('Dataset value:', output.dataset.name);
    }

    styleText() {
        const output = this.template.querySelector('.output-text');

        // Add a class
        output.classList.add('highlight');

        // Direct style manipulation
        output.style.color = 'white';
        output.style.backgroundColor = '#0070d2';
        output.style.padding = '0.5rem';
    }

    uppercaseFruits() {
        const items = this.template.querySelectorAll('.fruit-item');
        items.forEach(item => {
            item.textContent = item.textContent.toUpperCase();

            // Get data-id via dataset
            console.log(`Fruit ID: ${item.dataset.id}`);
        });
    }
}