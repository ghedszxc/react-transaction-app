"use client";

// Modules
import { TInstruments } from "../add/type"
import { useEffect, useState } from "react";
import * as utilities from "@/lib/utilities";

// Components

const Update = (id: string) => {
  // Hooks
    const [dialog, setDialog] = useState(false)

    const [instruments, setInstruments] = useState<TInstruments[]>();

    const [form, setForm] = useState({
        instrument_id: '',

        portfolio_id: 51687,

        comments: '',
        fx_rate: 1,
        price: 0,
        quantity: 0,
        sale_method: 'LIFO',
        settlement_date: '2025-02-10',
        status: '',
        transaction_costs: 0,
        trade_date: '2025-02-10',
        transaction_type: '',
    });


  // Functions
  function onAddTransaction() {
    // const query = formData.get("query");
    // alert(`You searched for`);
    console.log('form', form)
    
    utilities.addTransaction(form).then(res => {
        console.log("ADDD::", res)
        // setInstruments(res as TInstruments[])
        setDialog(false)
    }).catch(err => {
        console.error(err);
    });
  }

  const handleFormChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    
    setForm(prevData => ({
        ...prevData,
        [name]: value
    }));

    if (['quantity', 'price'].includes(name)) form.transaction_costs = name == 'quantity' ? parseInt(value) * form.price : parseInt(value) * form.quantity
  };

  // Effects
    useEffect(() => {
        utilities.getInstrumentList().then(res => {
            setInstruments(res as TInstruments[])
        }).catch(err => {
            console.error(err);
        });
    }, []);

  // Variables

  return (
    <div className="grid justify-items-center">
        <div className="rounded-lg bg-slate-700 h-auto absolute
                w-[98vw] lg:w-[75vw] xl:w-[55vw] top-[10vh] p-2">
            <div className="grid justify-items-end">
                <button className="text-2xl mr-3 hover:cursor-pointer hover:text-gray-400" onClick={() => { setDialog(false) }}>x</button>
            </div>
            <div className="px-5 mt-4">
                <form action={onAddTransaction}>
                    <div>
                        <label className="grid mb-4">
                            <span className="text-xs font-bold mb-1">Instruments {form.instrument_id}</span>
                            <select name="instrument_id" id="instrument_id" className="p-1 border-b border-slate-400 rounded-none"
                                value={form.instrument_id}
                                onChange={handleFormChanges}>
                                    {
                                        instruments?.length && (
                                        instruments.map((opt, key) => (
                                            <option value={opt?.id} key={key} className="bg-slate-950">
                                                { opt?.name }
                                            </option>
                                        ))
                                    )}
                            </select>
                        </label>
                        
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="grid mb-4">
                                <span className="text-xs font-bold mb-1">Transaction Type</span>
                                <select name="transaction_type" id="transaction_type" className="p-1 border-b border-slate-400 rounded-none"
                                    value={form.transaction_type}
                                    onChange={handleFormChanges}>
                                    <option value="BUY" className="bg-slate-950">Buy</option>
                                    <option value="SELL" className="bg-slate-950">Sell</option>
                                </select>
                            </label>
                            
                            <label className="grid mb-4">
                                <span className="text-xs font-bold mb-1">Status</span>
                                <select name="status" id="status" className="p-1 border-b border-slate-400 rounded-none"
                                    value={form.status}
                                    onChange={handleFormChanges}>
                                    <option value="PENDING" className="bg-slate-950">Pending</option>
                                    <option value="SETTLED" className="bg-slate-950">Settled</option>
                                </select>
                            </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <label className="grid mb-4">
                                <span className="text-xs font-bold mb-1">Quantity</span>
                                <input className="p-1 border-b border-slate-400 rounded-none"
                                    type="number" name="quantity"
                                    value={form.quantity}
                                    onChange={handleFormChanges} />
                            </label>
                        
                            <label className="grid mb-4">
                                <span className="text-xs font-bold mb-1">Price/Qty</span>
                                <input className="p-1 border-b border-slate-400 rounded-none"
                                    type="number" name="price"
                                    value={form.price}
                                    onChange={handleFormChanges} />
                            </label>
                            
                            <label className="grid mb-4 text-gray-500">
                                <span className="text-xs font-bold mb-1">Total Amount</span>
                                <input className="p-1 border-b border-slate-400 rounded-none"
                                    type="number" name="transaction_costs" disabled
                                    value={form.transaction_costs} />
                            </label>
                        </div>
                        
                        <label className="grid mb-2">
                            <span className="text-xs font-bold mb-1">Comments</span>
                            <textarea name="comments" className="p-1 border-b border-slate-400 rounded-none"
                                value={form.comments}
                                onChange={handleFormChanges} />
                        </label>
                    </div>

                    <button type="submit"
                        className="bg-sky-500 px-4 py-1 my-4 uppercase font-bold text-sm rounded-sm hover:cursor-pointer hover:bg-sky-600 float-right">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Update
