import axios from 'axios';
import React from 'react'
import { member } from "../utils/types";

interface memberService {
    state: member[]
    handleUpdate: Function
    handleNew: Function
}

export default function members(): memberService {
    const [members, setMembers] = React.useState<member[]>([])

    React.useEffect(() => {
        (async () => {
            const res = await axios.get('/api/member')
            if (res.status == 200) {
                setMembers(res.data.map(data => ({
                    id: data._id,
                    fullname: data.fullname,
                    email: data.email
                })))
            }
        })()
    }, [])

    const handleUpdate = async (id: number, data: any) => {
        const res = await axios.patch(`/api/member/${id}`, {...data})
        if (res.status == 200) {
            setMembers(members => members.map(member => member.id == id ? { ...member, ...data } : member))
        }
    }

    const handleNew = async () => {
        const newMember: member = { fullname: "", email: "" }
        const res = await axios.post('/api/member', newMember)
        if (res.status == 200) {
            setMembers(members => [...members, { ...newMember, id: res.data._id }])
        }
    }

    return {
        state: members,
        handleUpdate,
        handleNew
    }
}