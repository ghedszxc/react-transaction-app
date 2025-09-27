
export interface TInstrument {
  id: string
  name: string
  base_price: number
  country: string
  currency_id: number
  handle: string
  industry: string
  is_cash_flow_based: number
  is_derivative: number
  is_interest_bearing: number
  is_priced_by_custodian: number
  isin: string
  region: string
  sector?: string
  symbol: string
}

export interface TInstruments {
  instruments: TInstrument[]

  id: string
  name: string
  base_price: number
  country: string
  currency_id: number
  handle: string
  industry: string
  is_cash_flow_based: number
  is_derivative: number
  is_interest_bearing: number
  is_priced_by_custodian: number
  isin: string
  region: string
  sector?: string
  symbol: string
}
