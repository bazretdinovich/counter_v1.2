import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Counter} from "./counter/Counter.tsx";
import {Button} from "./button/Button.tsx";

type Props = {
    count: number,
    inc: () => void,
    reset: () => void,
    goToSettings: () => void
}

export const CounterPanel = ({count, inc, reset, goToSettings}: Props) => {
    return (
        <>
            <Wrapper className='display'>
                <Counter count={count} max={false}/>
            </Wrapper>
            <Wrapper className='button'>
                <Button callback={inc} name='inc'/>
                <Button callback={reset} name='reset'/>
                <Button callback={goToSettings} name='set'/>
            </Wrapper>
        </>
    );
};
