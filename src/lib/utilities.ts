
import axios from "axios";


export async function getInstrumentList() {
    return new Promise((resolve, reject) => {
        try {
            axios.get(`https://api.challenges.performativ.com/instruments`, {
                headers: {
                    'x-api-key': 'FSPkaSbQA55Do0nXhSZkH9eKWVlAMmNP7OKlI2oA',
                    'candidate_id': '0199757d-2b8a-7ca5-ade2-d86683c7672e' 
                }
            }).then(res => {
                resolve(res?.data?.instruments)
            })
        } catch (err) {
            return reject(err)
        }
    })
}

export async function getTransactionList() {
    return new Promise((resolve, reject) => {
        try {
            axios.get(`https://api.challenges.performativ.com/transactions?limit=12`, {
                headers: {
                    'x-api-key': 'FSPkaSbQA55Do0nXhSZkH9eKWVlAMmNP7OKlI2oA',
                    'candidate_id': '0199757d-2b8a-7ca5-ade2-d86683c7672e' 
                }
            }).then(res => {
                resolve(res?.data)
            })
        } catch (err) {
            return reject(err)
        }
    })
}

export async function addTransaction(form: unknown) {
    return new Promise((resolve, reject) => {
        try {
            axios.post(`https://api.challenges.performativ.com/transaction`, form, {
                headers: {
                    'x-api-key': 'FSPkaSbQA55Do0nXhSZkH9eKWVlAMmNP7OKlI2oA',
                    'candidate_id': '0199757d-2b8a-7ca5-ade2-d86683c7672e' 
                }
            }).then(res => {
                resolve(res?.data)
            })
        } catch (err) {
            return reject(err)
        }
    })
}

export async function deleteTransaction(transaction_id: string) {
    return new Promise((resolve, reject) => {
        try {
            axios.delete(`https://api.challenges.performativ.com/transaction/${transaction_id}`, {
                headers: {
                    'x-api-key': 'FSPkaSbQA55Do0nXhSZkH9eKWVlAMmNP7OKlI2oA',
                    'candidate_id': '0199757d-2b8a-7ca5-ade2-d86683c7672e' 
                }
            }).then(res => {
                resolve(res?.data)
            })
        } catch (err) {
            return reject(err)
        }
    })
}