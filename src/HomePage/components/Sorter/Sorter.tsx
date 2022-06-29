import * as React from 'react';
import './Sorter.css'

const SORT_OPTIONS = ['date', 'time', 'mock'];

const Sorter = () => {
    return (
        <div>
            <label>
                Sort by
                <select>
                    { SORT_OPTIONS.map(option => <option key={option} value={option}> {`Released ${option}`}</option>)}
                </select>
            </label>
        </div>
    );
};

export default Sorter;