
import express from 'express';



const app = express();

// app.get('/', (req, res)=>{
//     res.send('Server is ready')
// });

//list of jokes 
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why did the chicken cross the road?",
          joke: "To get to the other side!"
        },
        {
          id: 2,
          title: "Why don't scientists trust atoms?",
          joke: "Because they make up everything!"
        },
        {
          id: 3,
          title: "What do you call fake spaghetti?",
          joke: "An impasta!"
        },
        {
          id: 4,
          title: "How does a penguin build its house?",
          joke: "Igloos it together!"
        },
        {
          id: 5,
          title: "Why did the scarecrow win an award?",
          joke: "Because he was outstanding in his field!"
        },
        {
          id:122,
          title:'hahahahhaah'
        }
      ];
      res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
}) 