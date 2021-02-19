import React from 'react'
import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import { Cell } from './Cell'
import { member } from '../../utils/types';

interface RowProps {
    id: number
    member: member
    currentCell: string
    handleClick: Function
    handleUpdate: Function
}

export const Row: React.FC<RowProps> = ({ id, member, currentCell, handleClick, handleUpdate }) => {
    const td = React.useMemo(() => {
        let components = []
        for (let m in member) {
            components.push(
                <Td
                    key={`${m}-${id}`}
                    onClick={handleClick.bind(this, `${m}-${id}`)}>
                    <Cell
                        id={id}
                        fieldName={m}
                        value={member[m]}
                        isCurrentCell={`${m}-${id}` === currentCell}
                        handleUpdate={handleUpdate} />
                </Td>
            )
        }
        return components
    }, [member])

    return (
        <>
            {td}
        </>
    );
}