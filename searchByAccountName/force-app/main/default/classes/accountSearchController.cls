public with sharing class accountSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountSearch(String searchAcc){
        String search = '%' + searchAcc + '%';
        return [Select Name, AccountNumber from Account where Name Like :search Limit 10];
    }
}
