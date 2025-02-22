import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Button} from "./button/Button.tsx";
import {Input} from "./input/Input.tsx";

type Props = {
    set: () => void,
}
export const SettingsPanel = ({set}: Props) => {
    return (
        <>
            <Wrapper className='display'>
                <Input labelname='max value:'/>
                <Input labelname='start value:'/>
            </Wrapper>
            <Wrapper className='button'>
                <Button callback={set} name='set'/>
            </Wrapper>

        </>
    );
};
