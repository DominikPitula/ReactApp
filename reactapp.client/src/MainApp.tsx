import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App'; // ← Twój aktualny App (bez zmian!)
import { Pracownicy } from './pracownik/PracownicyPage';
import { Ksiazki } from './ksiazka/KsiazkiPage';
import { Towary } from './towar/TowaryPage';
import { CennikPage } from './pages/CennikPage';
import { KontaktPage } from './pages/KontaktPage';

export const MainApp = () => {
    return (
        <Router>
            <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                    <li><Link to="/">Strona główna</Link></li>
                    <li><Link to="/pracownicy">Pracownicy</Link></li>
                    <li><Link to="/ksiazki">Książki</Link></li>
                    <li><Link to="/towary">Towary</Link></li>
                    <li><Link to="/cennik">Cennik</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/pracownicy" element={<Pracownicy />} />
                <Route path="/ksiazki" element={<Ksiazki />} />
                <Route path="/towary" element={<Towary />} />
                <Route path="/cennik" element={<CennikPage />} />
                <Route path="/kontakt" element={<KontaktPage />} />
            </Routes>
        </Router>
    );
};
