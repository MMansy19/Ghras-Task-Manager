import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ToastProvider } from './components/ToastProvider';
import { LoadingSpinner } from './components/LoadingSpinner';
import './index.css';

// Lazy load pages for better code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const AppLayout = lazy(() => import('./layouts/AppLayout').then(module => ({ default: module.AppLayout })));
const TeamDashboard = lazy(() => import('./pages/TeamDashboard').then(module => ({ default: module.TeamDashboard })));
const UsersManagement = lazy(() => import('./pages/UsersManagement').then(module => ({ default: module.UsersManagement })));
const Statistics = lazy(() => import('./pages/Statistics').then(module => ({ default: module.Statistics })));

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
            refetchOnWindowFocus: true,
            retry: 1,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Suspense fallback={<LoadingSpinner message="جاري التحميل..." />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/app" element={<AppLayout />}>
                                <Route index element={<Navigate to="/app/team/design" replace />} />
                                <Route path="team/:teamSlug" element={<TeamDashboard />} />
                                <Route path="users" element={<UsersManagement />} />
                                <Route path="stats" element={<Statistics />} />
                            </Route>
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
                <ToastProvider />
            </QueryClientProvider>
        </ErrorBoundary>
    </React.StrictMode>
);
