import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import Header from '../../components/Header';


describe('pruebas en el componente <Header/>', () => {
    test('debe de estar correctamente el componente como en el snapshot', () => {
        const wrapper =  shallow(<Header/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener expenser tracker en la etiqueta h2', () => {
        const wrapper =  shallow(<Header/>)
        expect(wrapper.find('h2').text().trim()).toBe('Expense Tracker')
    })
    
    
})