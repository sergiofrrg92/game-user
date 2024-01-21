import { MongoClient } from 'mongodb';

const uri =
  'mongodb+srv://sergiofrrg:BtOInTBUSnwQC7bQ@game-user.iibleno.mongodb.net/';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export const getDB = () => {
  if (!client.isConnected()) {
    console.log('No active DB connection');
    return undefined;
  }
  return client.db('game-user');
};
