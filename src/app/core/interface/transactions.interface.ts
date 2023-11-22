import { faker } from '@faker-js/faker';
import { ChipsColor } from 'src/app/shared/components/chip/chip.component';

export const CategoryColors: {
    [key: string]: { color: ChipsColor; icon: string };
} = {
    INCOME_DIVIDENDS: {
        color: 'blue',
        icon: 'payments',
    },
    INCOME_INTEREST_EARNED: {
        color: 'blue',
        icon: 'payments',
    },
    INCOME_RETIREMENT_PENSION: {
        color: 'blue',
        icon: 'payments',
    },
    INCOME_TAX_REFUND: {
        color: 'blue',
        icon: 'payments',
    },
    INCOME_UNEMPLOYMENT: {
        color: 'blue',
        icon: 'payments',
    },
    INCOME_WAGES: {
        color: 'blue',
        icon: 'payments',
    },
    INCOME_OTHER_INCOME: {
        color: 'blue',
        icon: 'payments',
    },
    TRANSFER_IN_CASH_ADVANCES_AND_LOANS: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_IN_DEPOSIT: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_IN_INVESTMENT_AND_RETIREMENT_FUNDS: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_IN_SAVINGS: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_IN_ACCOUNT_TRANSFER: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_IN_OTHER_TRANSFER_IN: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_OUT_INVESTMENT_AND_RETIREMENT_FUNDS: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_OUT_SAVINGS: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_OUT_WITHDRAWAL: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_OUT_ACCOUNT_TRANSFER: {
        color: 'blue',
        icon: 'request_quote',
    },
    TRANSFER_OUT_OTHER_TRANSFER_OUT: {
        color: 'blue',
        icon: 'request_quote',
    },
    LOAN_PAYMENTS_CAR_PAYMENT: {
        color: 'blue',
        icon: 'request_quote',
    },
    LOAN_PAYMENTS_CREDIT_CARD_PAYMENT: {
        color: 'blue',
        icon: 'request_quote',
    },
    LOAN_PAYMENTS_PERSONAL_LOAN_PAYMENT: {
        color: 'blue',
        icon: 'request_quote',
    },
    LOAN_PAYMENTS_MORTGAGE_PAYMENT: {
        color: 'blue',
        icon: 'request_quote',
    },
    LOAN_PAYMENTS_STUDENT_LOAN_PAYMENT: {
        color: 'blue',
        icon: 'request_quote',
    },
    LOAN_PAYMENTS_OTHER_PAYMENT: {
        color: 'blue',
        icon: 'request_quote',
    },
    BANK_FEES_ATM_FEES: {
        color: 'blue',
        icon: 'request_quote',
    },
    BANK_FEES_FOREIGN_TRANSACTION_FEES: {
        color: 'blue',
        icon: 'request_quote',
    },
    BANK_FEES_INSUFFICIENT_FUNDS: {
        color: 'blue',
        icon: 'request_quote',
    },
    BANK_FEES_INTEREST_CHARGE: {
        color: 'blue',
        icon: 'request_quote',
    },
    BANK_FEES_OVERDRAFT_FEES: {
        color: 'blue',
        icon: 'request_quote',
    },
    BANK_FEES_OTHER_BANK_FEES: {
        color: 'blue',
        icon: 'request_quote',
    },
    ENTERTAINMENT_CASINOS_AND_GAMBLING: {
        color: 'purple',
        icon: 'casino',
    },
    ENTERTAINMENT_MUSIC_AND_AUDIO: {
        color: 'purple',
        icon: 'music_note',
    },
    ENTERTAINMENT_SPORTING_EVENTS_AMUSEMENT_PARKS_AND_MUSEUMS: {
        color: 'purple',
        icon: 'local_activity',
    },
    ENTERTAINMENT_TV_AND_MOVIES: {
        color: 'purple',
        icon: 'local_activity',
    },
    ENTERTAINMENT_VIDEO_GAMES: {
        color: 'purple',
        icon: 'sports_esports',
    },
    ENTERTAINMENT_OTHER_ENTERTAINMENT: {
        color: 'purple',
        icon: 'local_activity',
    },
    FOOD_AND_DRINK_BEER_WINE_AND_LIQUOR: {
        color: 'red',
        icon: 'sports_bar',
    },
    FOOD_AND_DRINK_COFFEE: {
        color: 'red',
        icon: 'local_cafe',
    },
    FOOD_AND_DRINK_FAST_FOOD: {
        color: 'red',
        icon: 'fastfood',
    },
    FOOD_AND_DRINK_GROCERIES: {
        color: 'red',
        icon: 'kitchen',
    },
    FOOD_AND_DRINK_RESTAURANT: {
        color: 'red',
        icon: 'restaurant_menu',
    },
    FOOD_AND_DRINK_VENDING_MACHINES: {
        color: 'red',
        icon: 'restaurant',
    },
    FOOD_AND_DRINK_OTHER_FOOD_AND_DRINK: {
        color: 'red',
        icon: 'restaurant',
    },
    GENERAL_MERCHANDISE_BOOKSTORES_AND_NEWSSTANDS: {
        color: 'cyan',
        icon: 'newspaper',
    },
    GENERAL_MERCHANDISE_CLOTHING_AND_ACCESSORIES: {
        color: 'cyan',
        icon: 'checkroom',
    },
    GENERAL_MERCHANDISE_CONVENIENCE_STORES: {
        color: 'cyan',
        icon: 'storefront',
    },
    GENERAL_MERCHANDISE_DEPARTMENT_STORES: {
        color: 'cyan',
        icon: 'storefront',
    },
    GENERAL_MERCHANDISE_DISCOUNT_STORES: {
        color: 'cyan',
        icon: 'storefront',
    },
    GENERAL_MERCHANDISE_ELECTRONICS: {
        color: 'cyan',
        icon: 'computer',
    },
    GENERAL_MERCHANDISE_GIFTS_AND_NOVELTIES: {
        color: 'cyan',
        icon: 'card_giftcard',
    },
    GENERAL_MERCHANDISE_OFFICE_SUPPLIES: {
        color: 'cyan',
        icon: 'draw',
    },
    GENERAL_MERCHANDISE_ONLINE_MARKETPLACES: {
        color: 'cyan',
        icon: 'storefront',
    },
    GENERAL_MERCHANDISE_PET_SUPPLIES: {
        color: 'cyan',
        icon: 'pets',
    },
    GENERAL_MERCHANDISE_SPORTING_GOODS: {
        color: 'cyan',
        icon: 'sports_basketball',
    },
    GENERAL_MERCHANDISE_SUPERSTORES: {
        color: 'cyan',
        icon: 'storefront',
    },
    GENERAL_MERCHANDISE_TOBACCO_AND_VAPE: {
        color: 'cyan',
        icon: 'smoking_rooms',
    },
    GENERAL_MERCHANDISE_OTHER_GENERAL_MERCHANDISE: {
        color: 'cyan',
        icon: 'storefront',
    },
    HOME_IMPROVEMENT_FURNITURE: {
        color: 'blue',
        icon: 'chair',
    },
    HOME_IMPROVEMENT_HARDWARE: {
        color: 'blue',
        icon: 'handyman',
    },
    HOME_IMPROVEMENT_REPAIR_AND_MAINTENANCE: {
        color: 'blue',
        icon: 'handyman',
    },
    HOME_IMPROVEMENT_SECURITY: {
        color: 'blue',
        icon: 'security',
    },
    HOME_IMPROVEMENT_OTHER_HOME_IMPROVEMENT: {
        color: 'blue',
        icon: 'handyman',
    },
    MEDICAL_DENTAL_CARE: {
        color: 'blue',
        icon: 'medical_services',
    },
    MEDICAL_EYE_CARE: {
        color: 'blue',
        icon: 'medical_services',
    },
    MEDICAL_NURSING_CARE: {
        color: 'blue',
        icon: 'medical_services',
    },
    MEDICAL_PHARMACIES_AND_SUPPLEMENTS: {
        color: 'blue',
        icon: 'vaccines',
    },
    MEDICAL_PRIMARY_CARE: {
        color: 'blue',
        icon: 'medical_services',
    },
    MEDICAL_VETERINARY_SERVICES: {
        color: 'blue',
        icon: 'medical_services',
    },
    MEDICAL_OTHER_MEDICAL: {
        color: 'blue',
        icon: 'medical_services',
    },
    PERSONAL_CARE_GYMS_AND_FITNESS_CENTERS: {
        color: 'yellow',
        icon: 'fitness_center',
    },
    PERSONAL_CARE_HAIR_AND_BEAUTY: {
        color: 'yellow',
        icon: 'brush',
    },
    PERSONAL_CARE_LAUNDRY_AND_DRY_CLEANING: {
        color: 'yellow',
        icon: 'checkroom',
    },
    PERSONAL_CARE_OTHER_PERSONAL_CARE: {
        color: 'yellow',
        icon: 'brush',
    },
    GENERAL_SERVICES_ACCOUNTING_AND_FINANCIAL_PLANNING: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    GENERAL_SERVICES_AUTOMOTIVE: {
        color: 'blue',
        icon: 'directions_car',
    },
    GENERAL_SERVICES_CHILDCARE: {
        color: 'blue',
        icon: 'child_friendly',
    },
    GENERAL_SERVICES_CONSULTING_AND_LEGAL: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    GENERAL_SERVICES_EDUCATION: {
        color: 'blue',
        icon: 'school',
    },
    GENERAL_SERVICES_INSURANCE: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    GENERAL_SERVICES_POSTAGE_AND_SHIPPING: {
        color: 'blue',
        icon: 'local_shipping',
    },
    GENERAL_SERVICES_STORAGE: {
        color: 'blue',
        icon: 'warehouse',
    },
    GENERAL_SERVICES_OTHER_GENERAL_SERVICES: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    GOVERNMENT_AND_NON_PROFIT_DONATIONS: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    GOVERNMENT_AND_NON_PROFIT_GOVERNMENT_DEPARTMENTS_AND_AGENCIES: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    GOVERNMENT_AND_NON_PROFIT_TAX_PAYMENT: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    GOVERNMENT_AND_NON_PROFIT_OTHER_GOVERNMENT_AND_NON_PROFIT: {
        color: 'blue',
        icon: 'shopping_bag',
    },
    TRANSPORTATION_BIKES_AND_SCOOTERS: {
        color: 'blue',
        icon: 'directions_bike',
    },
    TRANSPORTATION_GAS: {
        color: 'green',
        icon: 'local_gas_station',
    },
    TRANSPORTATION_PARKING: {
        color: 'green',
        icon: 'local_parking',
    },
    TRANSPORTATION_PUBLIC_TRANSIT: {
        color: 'green',
        icon: 'directions_bus_filled',
    },
    TRANSPORTATION_TAXIS_AND_RIDE_SHARES: {
        color: 'green',
        icon: 'local_taxi',
    },
    TRANSPORTATION_TOLLS: {
        color: 'green',
        icon: 'directions_bus_filled',
    },
    TRANSPORTATION_OTHER_TRANSPORTATION: {
        color: 'green',
        icon: 'flight',
    },
    TRAVEL_FLIGHTS: {
        color: 'orange',
        icon: 'flight',
    },
    TRAVEL_LODGING: {
        color: 'orange',
        icon: 'hotel',
    },
    TRAVEL_RENTAL_CARS: {
        color: 'orange',
        icon: 'car_rental',
    },
    TRAVEL_OTHER_TRAVEL: {
        color: 'orange',
        icon: 'flight',
    },
    RENT_AND_UTILITIES_GAS_AND_ELECTRICITY: {
        color: 'yellow',
        icon: 'bolt',
    },
    RENT_AND_UTILITIES_INTERNET_AND_CABLE: {
        color: 'yellow',
        icon: 'shopping_bag',
    },
    RENT_AND_UTILITIES_RENT: {
        color: 'yellow',
        icon: 'home',
    },
    RENT_AND_UTILITIES_SEWAGE_AND_WASTE_MANAGEMENT: {
        color: 'yellow',
        icon: 'delete',
    },
    RENT_AND_UTILITIES_TELEPHONE: {
        color: 'yellow',
        icon: 'call',
    },
    RENT_AND_UTILITIES_WATER: {
        color: 'yellow',
        icon: 'water_drop',
    },
    RENT_AND_UTILITIES_OTHER_UTILITIES: {
        color: 'yellow',
        icon: 'home',
    },
};

export let Transactions: Transaction[] = new Array(100)
    .fill(null)
    .map(() => {
        return {
            account_id: 'PMeG4DxPo9IgE8jrEJ9zHBQrQ1qzkeFon7Jyr',
            account_owner: null,
            amount: parseInt(faker.finance.amount(1, 100000, 2)),
            authorized_date: null,
            authorized_datetime: null,
            category: ['Travel', 'Airlines and Aviation Services'],
            category_id: '1',
            check_number: null,
            counterparties: [
                {
                    confidence_level: ConfidenceLevel.VERY_HIGH,
                    entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
                    logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
                    name: faker.company.name(),
                    type: 'merchant',
                    website: 'united.com',
                },
            ],
            date: faker.date.between({ from: '2023-11-01T00:00:00.000Z', to: '2023-11-30T00:00:00.000Z' }),
            datetime: null,
            iso_currency_code: ISOCurrencyCode.USD,
            location: {
                address: null,
                city: null,
                country: null,
                lat: null,
                lon: null,
                postal_code: null,
                region: null,
                store_number: null,
            },
            logo_url: 'https://plaid-merchant-logos.plaid.com/united_airlines_1065.png',
            merchant_entity_id: 'NKDjqyAdQQzpyeD8qpLnX0D6yvLe2KYKYYzQ4',
            merchant_name: faker.company.name(),
            name: faker.finance.transactionDescription(),
            payment_channel: PaymentChannel.IN_STORE,
            payment_meta: {
                by_order_of: null,
                payee: null,
                payer: null,
                payment_method: null,
                payment_processor: null,
                ppd_id: null,
                reason: null,
                reference_number: null,
            },
            pending: false,
            pending_transaction_id: null,
            personal_finance_category: {
                confidence_level: ConfidenceLevel.VERY_HIGH,
                detailed: Object.keys(CategoryColors)[Math.floor(Math.random() * Object.keys(CategoryColors).length)],
                primary: 'TRAVEL',
            },
            personal_finance_category_icon_url: 'https://plaid-category-icons.plaid.com/PFC_TRAVEL.png',
            transaction_code: null,
            transaction_id: 'V81KQDjMrVtXa9zNavdGsGZadZbV8RI96lnVL',
            transaction_type: TransactionType.SPECIAL,
            unofficial_currency_code: null,
            website: faker.internet.url(),
        };
    })
    .sort((a, b) => {
        return a.date.getTime() - b.date.getTime();
    });

export interface Transaction {
    account_id: string;
    account_owner: null;
    amount: number;
    authorized_date: Date | null;
    authorized_datetime: null;
    category: string[];
    category_id: string;
    check_number: null;
    counterparties: Counterparty[];
    date: Date;
    datetime: null;
    iso_currency_code: ISOCurrencyCode;
    location: Location;
    logo_url: null | string;
    merchant_entity_id: null | string;
    merchant_name: null | string;
    name: string;
    payment_channel: PaymentChannel;
    payment_meta: PaymentMeta;
    pending: boolean;
    pending_transaction_id: null;
    personal_finance_category: PersonalFinanceCategory;
    personal_finance_category_icon_url: string;
    transaction_code: null;
    transaction_id: string;
    transaction_type: TransactionType;
    unofficial_currency_code: null;
    website: null | string;
}

export interface Counterparty {
    confidence_level: ConfidenceLevel;
    entity_id: null | string;
    logo_url: null | string;
    name: string;
    type: string;
    website: null | string;
}

const enum ConfidenceLevel {
    VERY_HIGH = 'VERY_HIGH',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
}

const enum ISOCurrencyCode {
    USD = 'USD',
}

export interface Location {
    address: null;
    city: null;
    country: null;
    lat: null;
    lon: null;
    postal_code: null;
    region: null;
    store_number: null | string;
}

const enum PaymentChannel {
    IN_STORE = 'in store',
    ONLINE = 'online',
    OTHER = 'other',
}

export interface PaymentMeta {
    by_order_of: null;
    payee: null;
    payer: null;
    payment_method: null | string;
    payment_processor: null;
    ppd_id: null;
    reason: null;
    reference_number: null;
}

export interface PersonalFinanceCategory {
    confidence_level: ConfidenceLevel;
    detailed: string;
    primary: string;
}

const enum TransactionType {
    SPECIAL = 'special',
    PLACE = 'place',
}

export function getCategoryColor(category: any): ChipsColor {
    return CategoryColors[category].color || 'blue';
}

export function getCategoryIcon(category: any): string {
    return CategoryColors[category].icon || 'blue';
}

export function humanize(str: string) {
    var i,
        frags = str.split('_');
    for (i = 0; i < frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1).toLowerCase();
    }
    return frags.join(' ');
}

export const CategoriesArr = Object.keys(CategoryColors).map((key) => {
    const budgetTotal = faker.number.int({ min: 950, max: 2500 });
    const budgetSpent = faker.number.int({ max: 2700 });
    const budgetRemaining = budgetTotal - budgetSpent;
    const budgetPercent = budgetSpent / budgetTotal;
    const categoryColor = CategoryColors[key].color;
    const categoryIcon = CategoryColors[key].icon;
    console.log(categoryColor);
    return {
        category: key,
        color: categoryColor,
        icon: categoryIcon,
        budgetTotal: budgetTotal,
        budgetSpent: budgetSpent,
        budgetRemaining: budgetRemaining,
        budgetPercent: budgetPercent,
    };
});
