import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react";
import DanielComp from './DanielComp'

test('test DanielComp', async () => {
    // console.log('Does this work');
    const myCountFunc = jest.fn();
    render(<DanielComp countFunc={myCountFunc}></DanielComp>)
    // screen.debug();
    const el = screen.getByText(/daniel/i);

    click(/daniel/i);
    click(/daniel/i);
    // fireEvent.click(el);
    console.log(myCountFunc.mock.calls.length);
});
function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}