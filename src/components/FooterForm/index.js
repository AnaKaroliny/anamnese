import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import colors from '../../styles/colors';

export default class FooterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { numberPage, backPage, nextPage } = this.props;

        return (
            <Container>
                <div class="footer">
                    {
                        backPage ?
                            <Link to={backPage}>
                                <IconContext.Provider value={{ color: colors.secondary, size: 30 }}>
                                    <FaChevronLeft />
                                </IconContext.Provider>
                            </Link>
                        :
                            <div />
                    }
                    <div class="container-numberPage">
                        <label>
                            {numberPage + ' / 6'}
                        </label>
                    </div>
                    {
                        nextPage ? 
                            <Link to={nextPage}>
                                <IconContext.Provider value={{ color: colors.secondary, size: 30 }}>
                                    <FaChevronRight />
                                </IconContext.Provider>
                            </Link>
                        :
                            <div />
                    }
                </div>
            </Container>
        )
    }
}
