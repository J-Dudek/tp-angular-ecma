import fastify from 'fastify';
// see axios doc on how to use it
import axios from 'axios';

const app = fastify({ logger: true });
const URLHOLIDAYS = `https://date.nager.at/api/v2/PublicHolidays/2021/`;
const URLANIMALS= `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=3`
const URLFOX = `https://randomfox.ca/floof/`;

const getCatFacts = async () => {
  try{
    const response = await axios.get(URLANIMALS);
    const json = await response.data.map(cats=>cats.text);
    return json;
  }catch(err){
    console.log(err);
    return null;
  }Ò
};

const getFox = async()=>{
  try{
    const response = await axios.get(URLFOX);
    const json = await response.data.image;
    return json;
  }catch(err){
    console.log(err);
    return null;
  }
}
const getHolidays = async(country)=>{
  try{
    const response = await axios.get(`${URLHOLIDAYS}${country}`);
    const data = await response.data;
    return data;
  }catch(err){
    console.error(err);
    return null;
  }
}

app.post('/', async (req, res) => {
  const [catFacts,foxPicture,holidays]= await Promise.all([getCatFacts(),getFox(),getHolidays(req.body.countryCode??'')])
  return {
    foxPicture,catFacts,holidays,
  };
});


// Run the server!
const start = async () => {
  try {
    await app.listen(5000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
