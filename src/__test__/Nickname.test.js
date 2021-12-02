import React from 'react';
import { render } from '@testing-library/react';
import nicknames from '../mocks/nicknames';
import Nickname from '../components/common/Nickname';

const [mockNickname] = nicknames

const { username, nickname, likes } = mockNickname

describe("<Nickname /> tests", () => {
    test("renders properly", () => {
        render(<Nickname {...mockNickname}/>)
    })
    
    test("Diplays right info", () => {
        const { getByTestId } = render(<Nickname {...mockNickname}/>)
        const nicknameCntr = getByTestId(/nickname/i)
        expect(nicknameCntr).toHaveTextContent(nickname)
    })
})