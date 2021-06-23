import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PersonList from './components/PersonList'
import SearchList from './components/SearchList'

function App() {
  const search = useSelector(state => state.search)
  const searchLoading = useSelector(state => state.searchLoading)
  const urlWeb = useSelector(state => state.urlWeb)
  const [url, setUrl] = useState('')
  const [sortType, setSortType] = useState('asc')
  const [searchResult, setSearchResult] = useState(search)

  useEffect(() => {
    setUrl(urlWeb)
  }, [urlWeb])

  useEffect(() => {
    setSearchResult(search)
  }, [search])

  useEffect(() => {
    setSortType(sortType)
  }, [searchResult])

  function sortUrlWeb() {
    if (sortType === 'asc') {
      setSortType('desc')
      setSearchResult(search.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      }))
    } else {
      setSortType('asc')
      setSearchResult(search.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      }))
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3" style={{ height: "100vh", position: "fixed", width: "20%"}}>
          <PersonList/>
        </div>
        <div className="col-9 position-absolute top-0" style={{ height: "100vh", width: "70%", left: "28%" }}>
          <h4 className="mt-3">Search Result:</h4>
          {searchLoading? <h4>Loading...</h4> :
            <div className="row p-3" style={{ height: "40%", maxHeight: "40%", overflowY: "auto" }}>
            { !search.length ? <p>Select person from the person list</p> :
              <table class="table">
              <thead onClick={sortUrlWeb} style={{ cursor: "pointer" }}>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Title</th>
                  <th scope="col">Link</th>
                </tr>
              </thead>
              <tbody>
                {searchResult.map((item, i) => {
                  return <SearchList key={i + "xx"} data={item} num={i + 1}/>
                })}
              </tbody>
            </table>}
          </div>}
          <div className="row" style={{ height: "50%" }}>
            <h5 className="mt-3">Content</h5>
            <div className="">
              <iframe src={url} width="100%"
                height="400"
                style={{ borderBlockStyle: "dotted",
                borderColor: "black",
                borderWidth: "1px" }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
