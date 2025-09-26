export interface TTransactions {
    id: string

    instrument_id: string
    portfolio_id: number

    comments: string
    fx_rate: number
    price: number
    quantity: number
    sale_method: string
    settlement_date: string
    status: string
    trade_date: string
    transaction_costs: number
    transaction_type: string
}

export interface TInstrument {
    id: string
    name: string
}

export interface TInstruments {
  id: string | number | readonly string[] | undefined
  name: string
  instruments: TInstrument[];
}
