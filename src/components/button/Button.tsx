
import S from './Button.module.css'

type Props = {
    callback: () => void
    name: string
}
export const Button = ({callback, name}: Props) => {
    return (
        <>
            <button className={S.button} onClick={callback}>{name}</button>
        </>
    );
};