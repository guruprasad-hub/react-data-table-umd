import React from 'react';
import './App.css';
import SampleData from './sample-data';   /* Sample data extracted from external file */

function App() {
  return (
    <div className="App">
      <div>
        <table>
          <thead>
            <tr>
              {
                SampleData.tblColumns.map((row, rkey) => <th key={rkey}>{row.Header}</th> )
              }
            </tr>
          </thead>
          <tbody>
            {
              SampleData.tblRows.map((row, rkey) => {
              return (
                <tr key={rkey}>
                  <td>{SampleData.tblRows[rkey]['year']}</td><td>{SampleData.tblRows[rkey]['brand']}</td><td>{SampleData.tblRows[rkey]['color']}</td>
                </tr>
              )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
