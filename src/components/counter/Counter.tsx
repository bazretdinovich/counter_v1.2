import S from './Counter.module.css'

type Props = {
    count: number
    max: boolean
}
export const Counter = ({count, max}: Props) => {
    return (
        <span className={S.counter} style={max ? {color: 'red'} : {color: ''}}>
            {count}
        </span>
    );
};
