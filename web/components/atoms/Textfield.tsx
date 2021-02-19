import { Input } from '@chakra-ui/input';
import { Formik } from 'formik'
import React from 'react'

interface TextfieldProps {
    id: number,
    fieldName: string,
    value: any,
    handleUpdate: Function,
    handleEditable: Function,
    setIsEditable: Function
}

export const Textfield: React.FC<TextfieldProps> = ({id, fieldName, value, handleUpdate, handleEditable, setIsEditable }) => {
    React.useEffect(() => {
        return () => {
            handleEditable(false)
        }
    })

    return (
        <>
            <Formik initialValues={{ [fieldName]: value }} onSubmit={(data) => {
                handleUpdate(id, data)
                setIsEditable((prev: boolean) => !prev)
            }}>
                {
                    ({ values, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Input
                                name={fieldName}
                                value={values[fieldName]}
                                onChange={handleChange(fieldName)}
                                onBlur={handleBlur}
                                placeholder="input" />
                        </form>
                    )
                }
            </Formik>
        </>
    );
}