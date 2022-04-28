import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe("Counter Tests", () => {
    let incrementBtn, decrementBtn, count;

    beforeEach(() => {
        render(<Counter />)
        incrementBtn = screen.getByTestId("increment-btn");
        decrementBtn = screen.getByTestId("decrement-btn");
        count = screen.getByTestId("count");
    });

    test("increment btn", ()=> {
        userEvent.click(incrementBtn);
        expect(count).toHaveTextContent("1");
    });

    test("decrement btn", () => {
        userEvent.click(decrementBtn);
        expect(count).toHaveTextContent("-1");
    });

});