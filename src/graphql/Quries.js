import { gql, useQuery } from '@apollo/client'

export const GET_USER= gql`

query($email: String!){
    tat4_members(where: {member_email: {_eq: $email}}){
       
        member_id
        member_email
        member_first_name
        member_active
        member_next_session_id
        member_linkedIn_url
        
    }
}

`