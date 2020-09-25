import React from 'react';
import '@testing-library/jest-dom'
import Balance from '../../components/Balance';
import { shallow } from 'enzyme';


describe('pruebas en e componente <Balance/>', () => {
    test('debuelve el componente contra lo que esta en el sanpshot', () => {
        const wrapper = shallow(<Balance/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('pruebas en las etiquetas ', () => {
        const wrapper = shallow(<Balance/>)
        console.log(wrapper.html())
        expect(wrapper.find('h4').text().trim()).toBe('Your Balance')
        expect(wrapper.find('h1').text().trim()).toBe('$420.00')
    })

    test('pruebas en el useContext', () => {
        // hacer pruebas de useContext
    })
    
    
    
})