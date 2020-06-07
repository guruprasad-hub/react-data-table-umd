/* Parameters to Array of object conversion. */
function createObj(brand, color, year) {
    return { brand, color, year };
}
const tblColumns = [
    // key - Can be used for Sorting functionality
    {
        Header: 'Year',
        // key: 'year',
    },
    {
        Header: 'Brand',
        // key: 'brand',
    },
    {
        Header: 'Color',
        // key: 'color',
    }
];

/* Main Array to create a array of objects. Add a new entry to push to main array */
const tblRows = [
    createObj('VW', 'White', 2001),
    createObj('Mercedes', 'Black', 2004),
    createObj('Jaquar', 'White', 2010),
    createObj('Audi', 'Red', 2020),
    createObj('Volvo', 'Blue', 2001),
    createObj('Fiat', 'Gray', 2012),
    createObj('Renault', 'Brown', 2011),
    createObj('Dzire', 'White', 2020),
    createObj('VW', 'White', 2001),
    createObj('Mercedes', 'Black', 2004),
    createObj('Jaquar', 'White', 2010),
    createObj('Audi', 'Red', 2020),
    createObj('Volvo', 'Blue', 2001),
    createObj('Fiat', 'Gray', 2012),
    createObj('Renault', 'Brown', 2011),
    createObj('Dzire', 'White', 2020),
    createObj('VW', 'White', 2001),
    createObj('Mercedes', 'Black', 2004),
    createObj('Jaquar', 'White', 2010),
    createObj('Audi', 'Red', 2020),
    createObj('Volvo', 'Blue', 2001),
    createObj('Fiat', 'Gray', 2012),
    createObj('Renault', 'Brown', 2011),
    createObj('Dzire', 'White', 2020),
    createObj('VW', 'White', 2001),
    createObj('Mercedes', 'Black', 2004),
    createObj('Jaquar', 'White', 2010),
    createObj('Audi', 'Red', 2020),
    createObj('Volvo', 'Blue', 2001),
    createObj('Fiat', 'Gray', 2012),
    createObj('Renault', 'Brown', 2011),
    createObj('Dzire', 'White', 2020),
    createObj('VW', 'White', 2001),
    createObj('Mercedes', 'Black', 2004),
    createObj('Jaquar', 'White', 2010),
    createObj('Audi', 'Red', 2020),
    createObj('Volvo', 'Blue', 2001),
    createObj('Fiat', 'Gray', 2012),
    createObj('Renault', 'Brown', 2011),
    createObj('Dzire', 'White', 2020),
];

export default {
    tblColumns,
    tblRows
}