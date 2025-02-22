
import S from './Input.module.css'

type Props = {
    labelname: string
}
export const Input = ({labelname}: Props) => {
    return (
        <div className={S.inputWrapper}>
            <label htmlFor="input">{labelname}</label>
            <input type="number" name="input" id="input"/>
        </div>
    );
};
