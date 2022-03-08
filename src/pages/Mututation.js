import React from "react";
import {  gql , useMutation} from '@apollo/client'

const CREATE_PRODUCTS = gql`
mutation CreateProduct ($name:String!,$quantityPerUnit:Int!) {
    createProduct ( record : {
        name:$name,
        quantityPerUnit:$quantityPerUnit
    }) {
        record {
            name
        }
    }
}
`

const Mututation = () =>{

    const [createProduct,{data,loading,error}] =useMutation(CREATE_PRODUCTS,{
        variables :{
            name:"Aman",
            quantityPerUnit:1
        }
    })

    return ( <div>
        {console.log(data,loading,error)}
        <button onClick = {()=>createProduct()}>Add Data</button>
        </div>
    )

}

export default Mututation;