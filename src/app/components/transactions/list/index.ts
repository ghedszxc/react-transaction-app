export interface TList {
    last_evaluated_key?: string
    transactions?: TTransactions[]
}
export interface TTransactions {
    id: string

    instrument_id: string

    portfolio: string
    portfolio_id: number

    comments: string
    fx_rate: number
    price: number
    price_uses_market_data: number
    quantity: number
    sale_method: string
    settlement_date: string
    status: string
    total_amount: number
    trade_date: string
    transaction_costs: number
    transaction_type: string
}
