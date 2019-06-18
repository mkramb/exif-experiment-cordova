import React from 'react';
import EXIF from 'exif-js';
import Pretty from 'react-json-pretty';
import PrettyMon from 'react-json-pretty/dist/monikai';
import './App.css';

class App extends React.Component {
  state = {
    exif: []
  }

  onFileChange = ({ target: { files } }) => {
    this.setState({ exif: [] })

    return Array.from(files).forEach(file => {
      const reader = new FileReader();

      reader.onloadend = ({ target: { result }}) => {
        this.setState({
          exif: this.state.exif.concat(
            EXIF.readFromBinaryFile(result)
          )
        });
      };

      reader.readAsArrayBuffer(file);
    });
  };

  render() {
    return (
      <div className="App">
        <input accept="image/jpeg" type="file" onChange={this.onFileChange} />
        { this.state.exif.length > 0 && <Pretty data={this.state.exif} theme={PrettyMon} /> }
      </div>
    );
  }
}

export default App;
