// SearchPage.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchPage from './SearchPage';

test('SearchPage takes an input and directs you to the weather at that location', () => {
    render(
        <Router>
            <SearchPage />
        </Router>
    );

    const input = screen.getByPlaceholderText(/Enter city name/i);
    const button = screen.getByRole('button', { name: /Search/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Los Angeles' } });
    expect(input.value).toBe('Los Angeles');

    fireEvent.click(button);

    expect(window.location.pathname).toBe('/forecast/Los%20Angeles');
});
