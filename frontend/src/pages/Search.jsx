import {Button, Row, Col} from 'react-bootstrap'; 
//import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {FaSearch } from 'react-icons/fa';


const Search = () => {

    const [teamFilter, handleTeamFilter] = useState(false);
    const [playerFilter, handlePlayerFilter] = useState(false);
    const [leagueFilter, handleLeagueFilter] = useState(false);
    const [teamButton, handleTeamButton] = useState("secondary");
    const [playerButton, handlePlayerButton] = useState("secondary");
    const [leagueButton, handleLeagueButton] = useState("secondary");
    const [searchText, changeText] = useState("");
    const [searchLocation, changeLocation] = useState("");
    const [searchActive, setSearchActive] = useState(false);

    const handleFilter = (filter) => {
      if (filter === "Teams") {
        handleTeamFilter(!teamFilter);
        if (teamFilter === true) {
            handleTeamButton("secondary")
        } else {
            handleTeamButton("primary")
        }
      } else if (filter === "Players") {
        handlePlayerFilter(!playerFilter);
        if (playerFilter === true) {
            handlePlayerButton("secondary")
        } else {
            handlePlayerButton("primary")
        }
      } else {
        handleLeagueFilter(!leagueFilter);
        if (leagueFilter === true) {
            handleLeagueButton("secondary")
        } else {
            handleLeagueButton("primary")
        }
      }
    };


    const handleSearchText = (input) => {changeText(input.target.value)}
    const handleSearchLocation = (input) => {changeLocation(input.target.value)}
    const data = [
        {
      id:1,
      name: "Real Madrid",
      numberOfPlayers: 23,
      location: "Toronto",
      sportsType : "Soccer",
      lookingForPlayers: true
      
    },{
      id:2,
      name: "Barcelona",
      numberOfPlayers: 23,
      location: "Toronto",
      sportsType : "Soccer",
      lookingForPlayers: false
      
    },{
      id:3,
      name: "Lakers",
      numberOfPlayers: 11,
      location: "Toronto",
      sportsType : "Basketball",
      lookingForPlayers: false
      
    },{
      id:4,
      name: "Bulls",
      numberOfPlayers: 123,
      location: "Toronto",
      sportsType : "Basketball",
      lookingForPlayers: false
      
    },{
      id:5,
      name: "No Name Team",
      numberOfPlayers: 15,
      location: "Toronto",
      sportsType : "Soccer",
      lookingForPlayers: true
      
    },
      
   {
      id:1,
      name: "Play or Don't, just live.",
      lookingForTeams: true
      
    },{
      id:2,
      name: "Winner gets the girl",
      lookingForTeams: false
      
      
    },{
      id:3,
      name: "Winner gets the boy",
      lookingForTeams: true
      
    },{
      id:4,
      name: "Winner gets nothing",
      lookingForTeams: true
    },
{
    
      id:1,
      name: "Baris Berber"
      
    },{
      id:2,
      name: "Jemma MatchPlay"
      
    },{
      id:3,
      name: "Hyun LEEgue"
      
    },{
      id:4,
      name: "Jinny Leegue"
      
    },{
      id:5,
      name: "Divine TheGodOu(dagadu)"
      
    }
    
];



      

  return (
<>
    <h1 className='center-header'>SEARCH</h1>
    <div className='bg-light container justify-content-center align-items-center text-center'>
    
    <form id="search-form" className="form-inline" role="form" method="get" action="">
    <div className="input-group">
        <input type="text" className="w-50 form-control search-form" value = {searchText} onChange={handleSearchText} 
                    placeholder="Search for teams, players, or leagues" />
        <button type='button' className="btn btn-primary me-2 search-btn" onClick={ () => setSearchActive(true) } style={{"borderTopRightRadius":"50%","borderBottomRightRadius":"50%" }} ><FaSearch className='search-btn'
        />
		</button>
        {/* Location Search Item */}
        <input type="text" className="w-25 form-control search-form" value = {searchLocation} onChange={handleSearchLocation} 
                    placeholder="Search by location" /> 
        <div className="container my-3 bg-light justify-content-center align-items-center">
      <div className="col-md-7 justify-content-center align-items-center text-center mx-auto justify-content-center align-items-center">
             <Button className='me-2' onClick={() => handleFilter('Teams')} variant={teamButton}>Teams</Button>
            <Button className='me-2' onClick={() => handleFilter('Players')} variant={playerButton}>Players</Button>
           <Button className='me-2' onClick={() => handleFilter('Leagues')} variant={leagueButton}>Leagues</Button>
       </div>
        </div>
    </div>
</form>
</div>
<div className='mx-auto w-75'>
{ searchActive === true &&
      
            <div className='search-list'> 
            <h2 className='text-center mt-3'>Results</h2>
            <ul>
          <Row className='mb-5 mt-5'>
            <Col>Name</Col>
            <Col>Location</Col>
            <Col>Status</Col>
            <Col>Looking for Teams</Col>
            <Col>Looking for Players</Col>
          </Row>
          {/* Team Listing */}
          {teamFilter === true &&
          data.Teams.map(team => 
            <li key={data.Teams.id} className='border'>
            <a href={"team/"+ team.id} >
            <Row className='search-list p-2'>
            <Col> {team.name}</Col>
            <Col>{team.location}</Col>
            <Col>Status</Col>
            <Col>{team.lookingForPlayers ? "Yes" : "No"}</Col>
            <Col></Col>
          </Row>
          </a>
          
          </li>
            )}
            
                    {leagueFilter === true &&
         data.Leagues.map(league => 
         <li key={data.Leagues.id} className='border'>
            <a href={"league/"+ league.id} >
            <Row className='search-list p-2'>
            <Col> {league.name}</Col>
            <Col>{league.location}</Col>
            <Col>Status</Col>
            <Col>N/A</Col>
            <Col>{league.lookingForTeams ? "Yes" : "No"} </Col>
          </Row>
          </a>
          
          </li>
         
         )}
                    {playerFilter === true &&
          data.Players.map(player => 
          
            <li key={data.Leagues.id} className='border'>
            <a href={"league/"+ player.id} >
            <Row className='search-list p-2'>
            <Col> {player.name}</Col>
            <Col>{player.location}</Col>
            <Col>Status</Col>
            <Col>N/A</Col>
            <Col>{player.lookingForTeams ? "Yes" : "No"} </Col>
          </Row>
          </a>
          
          </li>
          
          
          )}
          {!teamFilter && !leagueFilter && !playerFilter &&
  <div>
    Please choose at least one filter to search.
  </div>
          }
          </ul>
        </div>
        
}

</div>


</>
  );
}

export default Search;