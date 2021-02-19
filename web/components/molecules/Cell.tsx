import React from 'react'
import { Textfield } from '../atoms/Textfield';
import styles from '../../styles/Table.module.css'

interface CellProps {
    id: number,
    fieldName: string,
    value: any,
    isCurrentCell: boolean,
    handleUpdate: Function
}

export const Cell: React.FC<CellProps> = ({ id, fieldName, value, isCurrentCell, handleUpdate }) => {
    const [isEditable, setIsEditable] = React.useState(false)

    return (
        <div
            onClick={() => isCurrentCell && setIsEditable(true)}
            className={styles.cell}>
            {
                isCurrentCell && isEditable
                    ? <Textfield
                        id={id}
                        fieldName={fieldName}
                        value={value}
                        handleUpdate={handleUpdate}
                        handleEditable={setIsEditable}
                        setIsEditable={setIsEditable} />
                    : <div className={isCurrentCell ? styles.focus : ""}>{value}</div>
            }
        </div>
    );
}