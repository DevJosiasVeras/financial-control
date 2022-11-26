import GridItem from "../GridItem"
import * as C from "./styles"

export const Grid = ({ itens, setItens }: any) => {

    const onDelete = (ID: any) => {
        const newArray = itens.filter((transaction: { id: any; }) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };



    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th>Descrição</C.Th>
                    <C.Th>Valor</C.Th>
                    <C.Th>
                        Tipo
                    </C.Th>
                    <C.Th></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item: any, index: any) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
            </C.Tbody>
        </C.Table>
    );
};
