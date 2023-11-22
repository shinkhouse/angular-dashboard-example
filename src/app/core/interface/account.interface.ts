import { faker } from "@faker-js/faker";

export interface Account {
    account_id: string;
    balances: Balance;
    mask: string;
    name: string;
    official_name: null | string;
    persistent_account_id?: string;
    subtype: string;
    type: string;
    lastUpdated: Date;
}

export interface Balance {
    available: number | null;
    current: number;
    iso_currency_code: string;
    limit: number | null;
    unofficial_currency_code: null;
}

const oneHourAgo = new Date(new Date().getTime() - 1 * 60 * 60 * 1000);
const threeHoursAgo = new Date(new Date().getTime() - 3 * 60 * 60 * 1000);
const fiveHoursAgo = new Date(new Date().getTime() - 5 * 60 * 60 * 1000);
const sevenHoursAgo = new Date(new Date().getTime() - 7 * 60 * 60 * 1000);
const nineHoursAgo = new Date(new Date().getTime() - 9 * 60 * 60 * 1000);

export const Accounts: Account[] = [
    {
        account_id: '3mldyRBlzxtoAwWXxBdWHy7lkepml4TWdZorz',
        balances: {
            available: 100,
            current: 110,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '0000',
        name: faker.finance.accountName(),
        official_name: 'Plaid Gold Standard 0% Interest Checking',
        persistent_account_id: '8cfb8beb89b774ee43b090625f0d61d0814322b43bff984eaf60386e',
        subtype: 'checking',
        type: 'depository',
        lastUpdated: new Date(threeHoursAgo),
    },
    {
        account_id: 'xzb5AjBb9mf68oAJewVAhpA7ZPog73CQd6l7q',
        balances: {
            available: 200,
            current: 210,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '1111',
        name: faker.finance.accountName(),
        official_name: 'Plaid Silver Standard 0.1% Interest Saving',
        persistent_account_id: '211a4e5d8361a3afb7a3886362198c7306e00a313b5aa944c20d34b6',
        subtype: 'savings',
        type: 'depository',
        lastUpdated: new Date(threeHoursAgo),
    },
    {
        account_id: 'dQ48xLd4j9iyZGqnrjoqUpXlBZd5lMCXLJgMx',
        balances: {
            available: null,
            current: 1000,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '2222',
        name: faker.finance.accountName(),
        official_name: 'Plaid Bronze Standard 0.2% Interest CD',
        persistent_account_id: '2a01484e1b5ef0b54fbcb89658b2764529bbec94a16f7b95481280a7',
        subtype: 'cd',
        type: 'depository',
        lastUpdated: new Date(fiveHoursAgo),
    },
    {
        account_id: 'ajx9zZdx4Gun6QjWLmAjTaVAk4KjA5TXAZdaL',
        balances: {
            available: null,
            current: 410,
            iso_currency_code: 'USD',
            limit: 2000,
            unofficial_currency_code: null,
        },
        mask: '3333',
        name: faker.finance.accountName(),
        official_name: 'Plaid Diamond 12.5% APR Interest Credit Card',
        subtype: 'credit card',
        type: 'credit',
        lastUpdated: new Date(fiveHoursAgo),
    },
    {
        account_id: '4lqG9RvqBdiLDrqZPjpqfyqbXJpdbRTmjJDrA',
        balances: {
            available: 43200,
            current: 43200,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '4444',
        name: faker.finance.accountName(),
        official_name: 'Plaid Platinum Standard 1.85% Interest Money Market',
        subtype: 'money market',
        type: 'depository',
        lastUpdated: new Date(fiveHoursAgo),
    },
    {
        account_id: 'NWkgoEwkmyi4yemxpZWmigaMXdBPMZcVPyejK',
        balances: {
            available: null,
            current: 320.76,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '5555',
        name: faker.finance.accountName(),
        official_name: null,
        subtype: 'ira',
        type: 'investment',
        lastUpdated: new Date(fiveHoursAgo),
    },
    {
        account_id: 'PGno8len9AuPWo8agvl8iraBXJ67BdcKpo3kA',
        balances: {
            available: null,
            current: 23631.9805,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '6666',
        name: faker.finance.accountName(),
        official_name: null,
        subtype: '401k',
        type: 'investment',
        lastUpdated: new Date(sevenHoursAgo),
    },
    {
        account_id: 'joQPjWZQ16HgwGJeqByJU8eMjXaQMEcQr6pMR',
        balances: {
            available: null,
            current: 65262,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '7777',
        name: faker.finance.accountName(),
        official_name: null,
        subtype: 'student',
        type: 'loan',
        lastUpdated: new Date(sevenHoursAgo),
    },
    {
        account_id: '7rzl6KQzdNuxDlWgqmXWTkAwXNqjwriw7dvlb',
        balances: {
            available: null,
            current: 56302.06,
            iso_currency_code: 'USD',
            limit: null,
            unofficial_currency_code: null,
        },
        mask: '8888',
        name: faker.finance.accountName(),
        official_name: null,
        subtype: 'mortgage',
        type: 'loan',
        lastUpdated: new Date(nineHoursAgo),
    },
];
