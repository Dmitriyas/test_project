import { LightningElement, track } from 'lwc';
import accountSearch from '@salesforce/apex/accountSearchController.accountSearch';

const DELAY = 350;

export default class AccountSearch extends LightningElement {
    @track accounts;
    @track error;

    handleKeyChange(event) {
        
        window.clearTimeout(this.delayTimeout);
        const search = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            accountSearch({ search })
                .then(result => {
                    this.accounts = result;
                    this.error = undefined;
                })
                .catch(error => {
                    this.error = error;
                    this.accounts = undefined;
                });
        }, DELAY);
    }

}