import PocketBase from 'pocketbase';
const pb = new PocketBase('')
import jsonData from '../assets/output.json' assert {type:"json"}


async function importToDatabase() {
  try {

    for (const record of jsonData) {
      // Assuming your JSON structure matches the expected format for creating records
      const createdRecord = await pb.collection('devices').create({
        json: record,
        brand: "",
      });
      console.log('Record added to the database:', createdRecord);
    }

    console.log('Import completed.');
  } catch (error) {
    console.error('Error importing to the database:', error);
  }
}

// Call the import function
importToDatabase();
