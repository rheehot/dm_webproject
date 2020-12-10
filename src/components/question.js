import React from 'react';
// import img from './images/background.png';
import { Home, Title, Questions, ButtonGroup, Button } from './styled/questionStyle';

const Question = () => {
    return (
        <Home>
            {/* <img src={img} width='100' height='100' /> */}
            <Title>Yes or No</Title>
            <Questions>select yes or no</Questions>
            <ButtonGroup>
                <Button>Yes</Button>
                <Button>No</Button>
            </ButtonGroup>
        </Home>
    );
}

export default Question;

// public\images\background.png