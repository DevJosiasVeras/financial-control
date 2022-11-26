import { IconType } from 'react-icons'
import * as C from './styles'

type ResumeItemProps = {
    title: String,
    Icon: IconType,
    value: String
}


export const ResumeItem = ({ title, Icon, value }: ResumeItemProps) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>R$ {value}</C.Total>
        </C.Container>
    )
}
