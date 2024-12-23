const API_KEY = '830774784889-avjkop33i2o8hnj2tp8aongih1k3c8tb.apps.googleusercontent.com'; // Replace with your actual API key
const SHEET_ID = '1ebu403DhcfqRJ6oVTZJHWT98-wxElQ5nx9djk-JoMp0'; // Replace with your Google Sheet ID
const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values`;

// Fetch data from a specific sheet range
async function fetchSheetData(range) {
    const url = `${BASE_URL}/${range}?key=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data.values || [];
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        return [];
    }
}

// Fetch login credentials
async function getLoginCredentials() {
    return await fetchSheetData('Login!A2:C');
}

// Fetch stock data
async function getStockData() {
    return await fetchSheetData('Stock!A2:C');
}

// Fetch customer ledger
async function getCustomerLedger() {
    return await fetchSheetData('CustomerLedger!A2:B');
}

// Fetch offers
async function getOffers() {
    return await fetchSheetData('Offers!A2:A');
}
