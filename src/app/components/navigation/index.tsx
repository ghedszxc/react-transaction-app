import React, { FC } from 'react';
import InstrumentList from '../instruments';

type navProps = object

const nav: FC<navProps> = () => (
    <nav className="p-5 md:p-6 bg-slate-900">
        <div className="flex justify-between">
            <div className="flex">
                <h1 className="hidden md:inline text-xl">Simple Project</h1>
            </div>

            <InstrumentList />
        </div>
    </nav>
);

export default nav;
