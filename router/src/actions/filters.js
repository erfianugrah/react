// SET_TEXT_FIlTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDate = (date) => ({
    type: 'SORT_BY_DATE',
    date
});

// SORT_BY_AMOUNT
export const sortByAmount = (amount) => ({
    type: 'SORT_BY_AMOUNT',
    amount
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});