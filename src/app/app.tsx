import { Route, Routes } from 'react-router-dom';

import { CounterPage, DataPage, FormPage, HomePage } from '@/pages';
import { Nav } from '@/shared';

export function App() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-14">
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/data" element={<DataPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/counter" element={<CounterPage />} />
            </Routes>
        </div>
    );
}
