import React, { useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import AppContext from '../../components/AppContext';

import { Container, Footer } from './styles';
import colors from '../../styles/colors';

export default function NavBottomButton({ numberPage, backPage, nextPage }) {
    const myContext = useContext(AppContext);

    return (
        <Container>
            <Footer>
                <div className="footer">
                    {
                        backPage ?
                            <Link to={backPage}>
                                <IconContext.Provider value={{ color: colors.white, size: 30 }}>
                                    <FaChevronLeft />
                                </IconContext.Provider>
                            </Link>
                            :
                            <IconContext.Provider value={{ size: 30 }}>
                                <FaChevronLeft className="disabled"/>
                            </IconContext.Provider>
                    }
                    <div className="container-numberPage">
                        <label>
                            {numberPage + ' / 6'}
                        </label>
                    </div>
                    {
                        nextPage ?
                            <Link to={nextPage} onClick={(event) => {
                                if (!myContext.handleNextPage(nextPage)) {
                                  event.preventDefault();
                                }
                              }}>
                                <IconContext.Provider value={{ color: colors.white, size: 30 }}>
                                    <FaChevronRight />
                                </IconContext.Provider>
                            </Link>
                            :
                            <IconContext.Provider value={{ size: 30 }}>
                                <FaChevronLeft className="disabled"/>
                            </IconContext.Provider>
                    }
                </div>
            </Footer>
        </Container>
    )
}