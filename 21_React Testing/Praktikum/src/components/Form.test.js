import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { Provider } from 'react-redux';
import store from '../features/product/store';
import { BrowserRouter, Router } from 'react-router-dom';

describe("Form Created Product", () => {
    it ("Check Form", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form/>
                </BrowserRouter>
            </Provider>
        )
        screen.debug()
    })

    it ("Check Product Name", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form/>
                </BrowserRouter>
            </Provider>
        )
        const productName=screen.getByTestId("productName")
        fireEvent.change(productName, {target:
        {value:"product"}})
        expect(screen.getByTestId("productName")).toHaveValue("product") 
    })

    it ("Check Product Category", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form/>
                </BrowserRouter>
            </Provider>
        )
        const productCategory=screen.getByTestId("productCategory")
        const categoryOption = "Formal";
        fireEvent.change(productCategory, {target:
        {value:categoryOption}})
        expect(screen.getByTestId("productCategory")).toBeInTheDocument()
    })

    it ("Check Product doesnt symbol", async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form/>
                </BrowserRouter>
            </Provider>
        )
        const productName=screen.getByTestId("productName")
        fireEvent.change(productName, {target:{value:"@/#{}"}})
        await waitFor(() => {
            expect(screen.getByTestId("productName")).toBeInTheDocument()
        })
    })

    it ("Check Product Name required", async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form/>
                </BrowserRouter>
            </Provider>
        )
        const submitButton = screen.getByTestId("buttonSubmit");
        fireEvent.click(submitButton)
        await waitFor(() => {
            expect(screen.queryByTestId("productName")).toBeInTheDocument()
        })
    })
    

    it ("Check Product Name must be at most 25 Characters", async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form/>
                </BrowserRouter>
            </Provider>
        )
        const productName = screen.getByTestId('productName');
        fireEvent.change(productName, { target: { value: 'b'.repeat(26) } });
        const submitButton = screen.getByTestId('buttonSubmit');
        fireEvent.click(submitButton);

        await waitFor(() => {
        const errorMessage = screen.getByTestId('productName');
        expect(errorMessage).toBeInTheDocument();
        });
    })

} )
