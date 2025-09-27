"use client";

// Modules
import { TInstruments } from "./type"
import { useEffect, useState } from "react";
import * as utilities from "@/lib/utilities";

// Components
import DataTable, { createTheme } from 'react-data-table-component';

const InstrumentList = () => {
  // Hooks
    const [dialog, setDialog] = useState(false)
    const [instruments, setInstruments] = useState<TInstruments[]>();


  // Functions

  // Effects
    useEffect(() => {
        utilities.getInstrumentList().then(res => {
            setInstruments(res as TInstruments[])
        }).catch(err => {
            console.error(err);
        });
    }, []);

  // Variables
    const columns = [
        {
            name: 'Code',
            selector: (row: { isin: string; }) => row.isin,
        },
        {
            name: 'Name',
            selector: (row: { name: string; }) => row.name,
        },
        {
            name: 'Symbol',
            selector: (row: { symbol: string; }) => row.symbol,
        },
        {
            name: 'Industry',
            selector: (row: { industry: string; }) => row.industry,
        },
        {
            name: 'Region',
            selector: (row: { region: string; }) => row.region,
        },
        {
            name: 'Country',
            selector: (row: { country: string; }) => row.country,
        }
    ];

    createTheme('dark', {
        background: {
            default: 'transparent',
        },
    });

  return (
    <div>
        <button className="float-right bg-gray-500 px-4 py-1 uppercase font-bold text-sm rounded-sm hover:cursor-pointer hover:bg-gray-600"
            onClick={() => { setDialog(true) }}>
            Instrument List
        </button>

        {
            dialog && (
            <div className="grid justify-items-center">
                <div className="rounded-lg bg-slate-700 h-auto absolute
                        w-[97vw]
                        left-[1vw] p-2">
                            
                    <div className="grid justify-items-end">
                        <button className="text-2xl mr-3 hover:cursor-pointer hover:text-gray-400" onClick={() => { setDialog(false) }}>x</button>
                    </div>
                    <div className="px-5 mt-4">
                        <h3 className="text-2xl mb-3 ml-3">Instrument List</h3>
                        <DataTable
                            columns={columns}
                            data={instruments as TInstruments[]}
                            pagination
                            dense
                            theme="dark"
                        />
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
export default InstrumentList
