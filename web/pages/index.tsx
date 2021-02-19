import React from 'react'
import { Table, Thead, Tr, Th, Td, Tbody, Button} from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { member } from '../utils/types'
import { Row } from '../components/molecules/Row'
import useMember from '../services/member'

export default function Home() {
  const [currentCell, setCurrentCell] = React.useState("")
  const members = useMember()

  const handleClick = (index: string, _: any) => setCurrentCell(index)

  return (
    <div className={styles.myContainer}>
      <Head>
        <title>members</title>
      </Head>
      <div className="flex justify-end">
        <Button onClick={() => members.handleNew()}>Add Member</Button>
      </div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Fullname</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {members.state.map((member: member) => (
            <Tr key={member.id}>
              <Td>{member.id}</Td>
              <Row
                id={member.id}
                member={
                  {
                    fullname: member.fullname,
                    email: member.email
                  }
                }
                currentCell={currentCell}
                handleClick={handleClick}
                handleUpdate={members.handleUpdate} />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  )
}
