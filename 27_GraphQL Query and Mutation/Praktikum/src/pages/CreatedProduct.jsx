import { useEffect } from 'react';
import Form from '../components/Form';
import Hero from '../components/Hero';
import Navbar from '../components/navbar/Navbar';

const CreatedProduct = () => {

    // useEffect(() => {
    //     alert('Welcome')
    // }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <Form />
        </>
    )
}

export default CreatedProduct;