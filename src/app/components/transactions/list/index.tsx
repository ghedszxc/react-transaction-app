"use client";

// Modules
import { TList, TTransactions } from "./index"

import axios from "axios";
import { useEffect, useState } from "react";

// Components

// const List = ({ last_evaluated_key, transactions }: TList) => {
const List = () => {
  // Hooks
  const [data, setData] = useState<TList>();
  const [loading, setLoading] = useState(true)

  // Functions
  // Effects
  useEffect(() => {
    const getTransactions = async () => {
      try {
        await axios.get(`https://api.challenges.performativ.com/transactions`, {
          headers: {
              'x-api-key': 'FSPkaSbQA55Do0nXhSZkH9eKWVlAMmNP7OKlI2oA',
              'candidate_id': '0199757d-2b8a-7ca5-ade2-d86683c7672e' 
            }
          }).then(res => {
          setData(res?.data)
          setLoading(false)
          console.log(res?.data?.transactions)
        })
      } catch (err) {
        console.error(err);
        setLoading(false)
      }
    };

    getTransactions();
  }, []);

  // Variables
  const listItems = data?.transactions?.map((item: TTransactions, key: number) =>
    <div key={key}>
      <h3>Transaction ID: {item?.id}</h3>
      <div>{item?.status}</div>

      <div>{item?.quantity} / {item?.price}</div>
      <div>{item?.total_amount}</div>

      <div>{item?.transaction_type}</div>
      <div>{item?.sale_method}</div>
    </div>
  );

  return (
    <div>
      {
        loading && (
          <div className="text-center">
            <span>Loading...</span>
          </div>
      )}

      {
        !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {listItems}
          </div>
      )}
    </div>
  )
}
export default List
