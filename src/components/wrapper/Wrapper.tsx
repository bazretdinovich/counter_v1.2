
import S from './Wrapper.module.css'

type Props = {
    className : string
}
export const Wrapper = ({children, className}:Props) => {
    return (
        <div className={S.wrapper + ' ' + S[className]}>
            {children}
        </div>
    );
};
