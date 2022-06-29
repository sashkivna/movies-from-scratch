import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: string) {
        console.log(error);
        return { hasError: true };
    }

    render() {
        // @ts-ignore
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}