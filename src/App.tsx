import React from 'react';
import {HomePage} from "./HomePage/HomePage";
import {ErrorBoundary} from "./HomePage/components/ErrorBoundary/ErrorBoundary";


export function App() {
    return(
        <ErrorBoundary>
            <HomePage/>
        </ErrorBoundary>
)}