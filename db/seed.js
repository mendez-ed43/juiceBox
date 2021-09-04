
const {
    client,
    getAllUsers,
} = require('./index')

async function testDB() {
    try {
        //connect client to the database
        client.connect();

        // //queries are promises, so we cn await them
        // const { rows } = await client.query(`SELECT * FROM users;`);

        const users = await getAllUsers();

        //log to test
        console.log(users);
    } catch (error) {
        console.error(error);
    } finally {
        // important to close out the client connection
        client.end();
    }
}

testDB();