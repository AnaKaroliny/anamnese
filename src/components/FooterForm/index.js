import React from 'react';
import { Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Container } from './styles';
import { Link } from 'react-router-dom';

export default class FooterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { numeracao, anteriorPage, proximaPage } = this.props;

        return (
            <Container>
                <div class="footer">
                    <Link to={anteriorPage}>
                        <IconContext.Provider value={{ color: 'black', size: 30 }}>
                            <FaChevronLeft />
                        </IconContext.Provider>
                    </Link>
                    <div class="container-numeracao">
                        <label>
                            {numeracao + ' / 5'}
                        </label>
                    </div>
                    <Link to={proximaPage}>
                        <IconContext.Provider value={{ color: 'black', size: 30 }}>
                            <FaChevronRight />
                        </IconContext.Provider>
                    </Link>
                </div>
            </Container>
        )
    }
}
