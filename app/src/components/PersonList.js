import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSearch } from '../store/action'

function PersonList () {
  const dispatch = useDispatch()
  const actors = useSelector(state => state.actors)
  const scientist = useSelector(state => state.scientist)
  const politician = useSelector(state => state.politician)

  function searchPerson(person) {
    const queryPerson = person.split(' ').join('+')
    dispatch(fetchSearch(queryPerson))
  }

  return (
    <>
    <h3 className="m-3">Person List</h3>
      <div className="list-group" style={{ overflowY: "scroll", maxHeight: "90vh"}}>
        {/* Actors */}
        <button
          type="button"
          className="list-group-item list-group-item-action"
          data-bs-toggle="collapse" data-bs-target=".actor"
          aria-expanded="true" aria-controls="actors actor-inter actor-indo"
        >
          Actor
        </button>
        <div id="actors" className="actor">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            data-bs-toggle="collapse" data-bs-target="#actor-inter"
            aria-expanded="true" aria-controls="actor-inter"
            style={{ color: "#EEB76B" }}
          >International</button>
          <div id="actor-inter" className="actor">
            {actors.international.map((actor, i) => {
              return <button type="button"
                key={i + "x"}
                className="list-group-item list-group-item-action"
                style={{ color: "#E2703A" }}
                onClick={() => searchPerson(actor)}
              >{actor}</button>
            })}
          </div>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            data-bs-toggle="collapse" data-bs-target="#actor-indo"
            aria-expanded="true" aria-controls="actor-indo"
            style={{ color: "#EEB76B" }}
          >Indonesia</button>
          <div id="actor-indo" className="actor">
            {actors.indonesia.map((actor, i) => {
              return <button type="button"
              key={i + "z"}
              className="list-group-item list-group-item-action"
              style={{ color: "#E2703A" }}
              onClick={() => searchPerson(actor)}
              >{actor}</button>
            })}
          </div>
        </div>
        {/* Scientist */}
        <button type="button"
          className="list-group-item list-group-item-action"
          data-bs-toggle="collapse" data-bs-target=".science"
          aria-expanded="true" aria-controls="scientist scientist-inter scientist-indo"
        >Scientist</button>
        <div id="scientist" className="science">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            data-bs-toggle="collapse" data-bs-target="#scientist-inter"
            aria-expanded="true" aria-controls="scientist-inter"
            style={{ color: "#EEB76B" }}
          >International</button>
          <div id="scientist-inter" className="science">
            {scientist.international.map((scientist, i) => {
              return <button type="button"
                key={i + "y"}
                className="list-group-item list-group-item-action"
                style={{ color: "#E2703A" }}
                onClick={() => searchPerson(scientist)}
              >{scientist}</button>
            })}
          </div>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            data-bs-toggle="collapse" data-bs-target="#scientist-indo"
            aria-expanded="true" aria-controls="scientist-indo"
            style={{ color: "#EEB76B" }}
          >Indonesia</button>
          <div id="scientist-indo" className="science">
            {scientist.indonesia.map((scientist, i) => {
              return <button type="button"
                key={i + "t"}
                className="list-group-item list-group-item-action"
                style={{ color: "#E2703A" }}
                onClick={() => searchPerson(scientist)}
              >{scientist}</button>
            })}
          </div>
        </div>
        {/* Politician */}
        <button type="button"
          className="list-group-item list-group-item-action"
          data-bs-toggle="collapse" data-bs-target=".politic"
          aria-expanded="true" aria-controls="politician politician-indo politician-inter"
        >Politician</button>
        <div id="politician" className="politic">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            data-bs-toggle="collapse" data-bs-target="#politician-inter"
            aria-expanded="true" aria-controls="politician-inter"
            style={{ color: "#EEB76B" }}
          >International</button>
          <div id="politician-inter" className="politic">
            {politician.international.map((politician, i) => {
              return <button type="button"
                key={i + "y"}
                className="list-group-item list-group-item-action"
                style={{ color: "#E2703A" }}
                onClick={() => searchPerson(politician)}
              >{politician}</button>
            })}
          </div>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            data-bs-toggle="collapse" data-bs-target="#politician-indo"
            aria-expanded="true" aria-controls="politician-indo"
            style={{ color: "#EEB76B" }}
          >Indonesia</button>
          <div id="politician-indo" className="politic">
            {politician.indonesia.map((politician, i) => {
              return <button type="button"
                key={i + "t"}
                className="list-group-item list-group-item-action"
                style={{ color: "#E2703A" }}
                onClick={() => searchPerson(politician)}
              >{politician}</button>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonList