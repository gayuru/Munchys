import React from 'react'
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

const Heading = styled.h1`
    font-size: 25vw;
    font-weight: 700;
    text-shadow: 4px 4px 0px #FFC0BE;
`

const SubHeading = styled.h1`
    text-shadow: 4px 4px 0px #FFC0BE;
`
const Subtitle = styled.p`
    font-size: 1.5em;
`
const Center = styled.div`
    min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */

    display: flex;
    align-items: center;
`
export const NotFound = () => {
    return (
        <Center>
            <Container>
                <Heading>404</Heading>
                <br />
                <SubHeading>Page Not Found</SubHeading>
                <br />
                <Subtitle>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</Subtitle>
            </Container>
        </Center>

    )
}
