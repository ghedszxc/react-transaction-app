"use client";

// Modules
import { TList, TTransactions } from "./type"
import { useEffect, useState } from "react";
import * as utilities from "@/lib/utilities";

// Components
import Update from "@/app/components/transactions/update"

const List = () => {
  // Hooks
  const [data, setData] = useState<TList>();
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [updateModal, setUpdateModal] = useState(false);

  

  // Functions
  function onPopulateTransactionList() {
    utilities.getTransactionList().then(res => {
      setData(res as TList)
      setLoading(false)
    }).catch(err => {
      console.error(err);
      setLoading(false)
    });
  }

  async function onDeleteTransaction(id: string) {
    setLoadingBtn(true)

    utilities.deleteTransaction(id).then(res => {
      onPopulateTransactionList()
      alert(res)
      setLoadingBtn(false)

    }).catch(err => {
      console.error(err);
      setLoading(false)
    });
  }

  function onSelectTransaction(id: string) {
    setUpdateModal(!updateModal)
    setTransactionId(id)
  }

  // Effects
  useEffect(() => {
    onPopulateTransactionList()
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

      <div>
        <button
            className="bg-yellow-500 px-4 py-1 mb-4 mr-2 uppercase font-bold text-sm rounded-sm hover:cursor-pointer hover:bg-yellow-600"
            onClick={() => { onSelectTransaction(item?.id) }}>
            Update
        </button>

        <button className={`px-4 py-1 mt-4 mb-1 uppercase font-bold text-sm rounded-sm
          ${!loadingBtn ? 'bg-red-500 hover:bg-red-600 hover:cursor-pointer' : 'bg-gray-700 text-gray-500'}`}
          onClick={() => { onDeleteTransaction(item?.id) }}
          disabled={loadingBtn}>
          Delete
        </button>

      </div>
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

      {updateModal && (<Update id={transactionId} />)}
      
    </div>
  )
}
export default List
