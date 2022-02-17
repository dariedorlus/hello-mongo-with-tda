import { dbClient } from "./db.js";

const getCustomerCollection =  async () => {
    const client = await dbClient();
    const db = client.db('Commerce')

    return db.collection('customers')
}

const getAllCustomers = async () => {
 
    const client = await dbClient();
    const db = client.db('Commerce')

    const customerCollection = db.collection('customers')

    const customers = await customerCollection
    .find({}, { projection: {name: 1 }})
    .toArray()

    const result = customers.map(customer => {
        return {
            id: customer._id.toString(), 
            name: customer.name,
            email: customer.email
        }
    })

    console.log(...result)
    // client.close()

}

const createCustomer = async (customer) => {
    
    const customerCollection = await getCustomerCollection()

    const result = await customerCollection.insertOne(customer)

    console.log(result)

}

createCustomer({name: "Tda and Tsouk",
 email:"Tnouk@dorlus", customerId: 20})
getAllCustomers()