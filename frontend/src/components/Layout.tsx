import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
        <div className="in-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans">
            <Header />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}