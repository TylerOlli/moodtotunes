"use client"

import { Provider } from 'react-redux';
import store from './store/store';
import Auth from './components/Auth';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div className="tracklist">
          <Auth/>
        </div>
        <Footer />
      </main>
    </Provider>
  )
}