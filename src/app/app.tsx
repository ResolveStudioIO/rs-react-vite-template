import { Route, Routes } from 'react-router-dom';

import { Nav } from '@/components';
import CounterPage from '@/pages/counter-page';
import DataPage from '@/pages/data-page';
import FormPage from '@/pages/form-page';
import HomePage from '@/pages/home-page';

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
