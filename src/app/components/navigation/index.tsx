import React, { FC } from 'react';
import Image from "next/image";

type navProps = object

const nav: FC<navProps> = () => (
    <nav className="p-5 md:p-6 bg-slate-900">
        <div className="flex">
            
            <Image
                className="mr-0 md:mr-4"
                src="/vercel.svg"
                alt="Vercel"
                width={20}
                height={20}
            />
            <span className="hidden md:inline">Nav Component</span>
        </div>
    </nav>
);

export default nav;
