import React from 'react';
import {HomePage} from "./HomePage/HomePage";
import {ErrorBoundary} from "./HomePage/components/ErrorBoundary/ErrorBoundary";
import {ModalProvider} from "./modal.context";
import {MoviesProvider} from "./movies.context";

export const CATEGORIES = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export function App() {

    return(
        <ModalProvider>
            <MoviesProvider>
                <ErrorBoundary>
                    <HomePage/>
                </ErrorBoundary>
            </MoviesProvider>
        </ModalProvider>

)}