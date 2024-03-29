import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
