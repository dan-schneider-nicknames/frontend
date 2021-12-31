import React from 'react'
import MutationCall from '../common/HigherOrder/MutationCall'
import { ADD_NICKNAME } from '../../services/mutations'
import CreateNickname from '../common/Form/CreateNickname'

export default function CreatePage() {
    return (
        <MutationCall 
            query={ADD_NICKNAME} 
            Component={CreateNickname}
        />
    )
}
