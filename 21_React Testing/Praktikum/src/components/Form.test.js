import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
import { Provider } from 'react-redux';
import store from '../features/product/store';
import { BrowserRouter } from 'react-router-dom';


describe("form", () => {
    it ("check pages", () => {
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
        fireEvent.change(productCategory, {target:
        {value:"product_1"}})
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
        const submit=screen.getByTestId("buttonSubmit")
        fireEvent.click(submit)
        await waitFor(() => {
            expect(screen.queryByText(/Product Name is a required/)).toBeInTheDocument()
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
        const productName=screen.getByTestId("productName")
        fireEvent.change(productName, {target:{value:"b".repeat(26)}})
        const submit=screen.getByTestId("buttonSubmit")
        fireEvent.click(submit)
        await waitFor(() => {
            expect(screen.getByText("Product Name must be at most 25 Characters")).toBeInTheDocument()
        })
    })

    it ("Check Product required", async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Form/>
                </BrowserRouter>
            </Provider>
        )
        const submit=screen.getByTestId("buttonSubmit")
        fireEvent.click(submit)
        await waitFor(() => {
            expect(screen.getByText("Product Name is a required")).toBeInTheDocument()
            expect(screen.getByText("Selected Category is a required")).toBeInTheDocument()
            expect(screen.getByText("Image is required")).toBeInTheDocument()
            expect(screen.getByText("Product Freshness is a required")).toBeInTheDocument()
            expect(screen.getByText("Product Description is a required")).toBeInTheDocument()
            expect(screen.getByText("Product price is a required")).toBeInTheDocument()
        })
    })

} )
