import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function App() {
  const [text,setText] = useState('')
  const [memes,setMemes] = useState([])

  // Make the fetches inside this function so it isn't rerun at EVERY change
  async function search(){
    const key = '5EeHryunuSqGlfmpDTv5MKRoyMygHpGm'
    // this is bad style to have the key in public
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=25&offset=0&lang=en`
    // Use backticks above to incluse the key and text
    const resp = await fetch(url)
    const jaseResp = await resp.json()
    setMemes(jaseResp.data)
    setText('') //empty the search bar after enter
  }

  return (
    <div className="App">
      <div className="searchBar">
        <TextField label="Get that meme" placeholder="Meme finder" variant="outlined" color="primary"
          value = {text}
          onChange = { e => setText(e.target.value)}
          onKeyPress ={ e => {
            if(e.key === 'Enter')
              search()
            }
          }
        />
        <Button variant="contained" color="primary" style={{height:50, marginLeft:8}} disabled={!text} onClick={search}>
            Search!
        </Button>
      </div>
      <div className="memes">
        {memes.map((m,i)=>{
          return <img key={i} src={m.images.fixed_height.url}/>
          // fixed_height chosen from the list. consolelog to see what is available.
        })}
      </div>
    </div>
  );
}

export default App;
