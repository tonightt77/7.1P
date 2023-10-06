const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb+srv://s222543353:woaideren888@sit314.xyqt93s.mongodb.net/?retryWrites=true&w=majority';
const cors = require('cors');

// Use the cors middleware
app.use(cors());

app.get('/getAllLights', async (req, res) => {
    const client = new MongoClient(MONGO_URL);
    try {
        await client.connect();
        const database = client.db('iot_smart_lighting');
        const collection = database.collection('smart_lighting');
        
        const lightsData = await collection.find({}).toArray();
        
        res.json(lightsData);
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
        res.status(500).send("Internal Server Error");
    } finally {
        await client.close();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
