import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function App() {
  const [text,setText] = useState('')

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
    </div>
  );
}

export default App;
