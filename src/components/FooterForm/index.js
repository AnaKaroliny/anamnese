import React from 'react';
import { Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Container } from './styles';

export default class FooterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { numeracao } = this.props;

        return (
            <Container>
                <div class="footer">
                    <a>
                        <IconContext.Provider value={{ color: 'black', size: 30 }}>
                            <FaChevronLeft />
                        </IconContext.Provider>
                    </a>
                    <div class="container-numeracao">
                        <label>
                            {numeracao + ' / 5'}
                        </label>
                    </div>
                    <a>
                        <IconContext.Provider value={{ color: 'black', size: 30 }}>
                            <FaChevronRight />
                        </IconContext.Provider>
                    </a>
                </div>
            </Container>
        )
    }
}
