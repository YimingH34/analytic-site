
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { messages as enMessages } from './locales/en/messages.js';
import { messages as frMessages } from './locales/fr/messages.js';

i18n.load({
    en: enMessages,
    fr: frMessages,
});

const lang = localStorage.getItem('lang') || 'en';
i18n.activate(lang);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // ✅ define it here

root.render(
    <I18nProvider i18n={i18n}>
        <App />
    </I18nProvider>
);
