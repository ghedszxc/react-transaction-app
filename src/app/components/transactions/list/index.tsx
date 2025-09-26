"use client";

// Modules
import { TList, TTransactions } from "./type"
import { useEffect, useState } from "react";
import * as utilities from "@/lib/utilities";

// Components

const List = () => {
  // Hooks
  const [data, setData] = useState<TList>();
  const [loading, setLoading] = useState(true)

  // Functions
  // Effects
  useEffect(() => {
    utilities.getTransactionList().then(res => {
      setData(res as TList)
      setLoading(false)
    }).catch(err => {
      console.error(err);
      setLoading(false)
    });
  }, []);

  // Variables
  const listItems = data?.transactions?.map((item: TTransactions, key: number) =>
    <div key={key} className="border border-slate-500 rounded-none p-4">
      <h3 className="font-bold">
        Portfolio: {item?.portfolio}
        <span className={`text-xs ml-1 ${item?.status == 'SETTLED' ? 'text-green-500' : 'text-orange-500'}`}>
          ({item?.status})
        </span>
      </h3>
      <hr className="py-2" />

      <div><b className="text-gray-500">Qty:</b> {item?.quantity}</div>
      <div><b className="text-gray-500">Price/Qty:</b> ${item?.price}</div>
      <div><b className="text-gray-500">Total Amount: </b> {item?.total_amount}</div>
      <div><b className="text-gray-500">Transaction Type: </b>{item?.transaction_type}</div>
    </div>
  );

  return (
    <div>
      {
        loading && (
          <div className="text-center">
            <h3 className="text-2xl">Loading ...</h3>
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
