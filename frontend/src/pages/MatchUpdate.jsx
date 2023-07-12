import { useState, useEffect }  from 'react';
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { FaTrash, FaSearchPlus } from 'react-icons/fa';
import useAuth from "../hooks/auth";

const MatchUpdate = () => {
  
    const location = useLocation();
    const routeParams = useParams();
    const {isSignedIn, isAdmin} = useAuth()

    const [statistics, setStatistics] = useState([{ statId: null, statDesc: null}])
    const [currValues, setCurrentValues] = useState({matchId: routeParams.matchId, dateOfMatch: null, locationOfMatch: null,
        teamId1: null, teamName1: null, finalScore1: null, finalScorePending1: null, leaguePoints1: null, leaguePointsPending1: null, disableInput1: true,
        teamId2: null, teamName2: null, finalScore2: null, finalScorePending2: null, leaguePoints2: null, leaguePointsPending2: null, disableInput2: true,
    })
    const [matchesToUpdate1, setMatchesToUpdate1] = useState([ { playerId: null, username: null, fullName: null, playerStats: [{ statId: null, value: null }] } ])
    const [matchesToUpdate2, setMatchesToUpdate2] = useState([ { playerId: null, username: null, fullName: null, playerStats: [{ statId: null, value: null }] } ])
    const [findUsername, setFindUsername] = useState(["",""])
    const [oldValues, setOldValues] = useState(null)
    const [didMatchDetailsChange, setMatchDetailsChanged] = useState(false)

    useEffect(() => {
        setStatistics([
            { statId: 1, statDesc: "Goals"}, 
            { statId: 2, statDesc: "Assists"},
            { statId: 3, statDesc: "Shots"},
        ])
        setCurrentValues({ dateOfMatch: "2023-07-01T14:00", locationOfMatch: "York Soccer Field",
            teamId1: 1, teamName1: "Vikings", finalScore1: 5, finalScorePending1: 6, leaguePoints1: 2, leaguePointsPending1: 2, disableInput1: false,   // false for both if isAdmin
            teamId2: 2, teamName2: "Dodgers", finalScore2: 2, finalScorePending2: 3, leaguePoints2: 0, leaguePointsPending2: 0, disableInput2: false,
        })
        setMatchesToUpdate1([
            { playerId: 1, username: "sMcdowell", fullName: "Scarlet Mcdowell", playerStats: [{ statId: 1, points: 2 }, { statId: 2, points: 1 }, { statId: 3, points: 1 } ] }, 
            { playerId: 2, username: "uWatts", fullName: "Ursa Watts", playerStats: [{ statId: 1, points: 0 }, { statId: 2, points: 0 }, { statId: 3, points: 2 }] },
            { playerId: 3, username: "pRodriguez", fullName: "Phoebe Rodgriguez", playerStats: [{ statId: 1, points: 0 }, { statId: 2, points: 2 }, { statId: 3, points: 0 } ] },
        ])
        setMatchesToUpdate2([
            { playerId: 11, username: "vFloyd", fullName: "Vladimir Floyd", playerStats: [{ statId: 1, points: 2 }, { statId: 2, points: 1 }, { statId: 3, points: 1 } ] }, 
            { playerId: 12, username: "oRandall", fullName: "Oprah Randall", playerStats: [{ statId: 1, points: 0 }, { statId: 2, points: 0 }, { statId: 3, points: 2 }] },
            { playerId: 13, username: "mCarpenter", fullName: "Mona Carpenter", playerStats: [{ statId: 1, points: 0 }, { statId: 2, points: 2 }, { statId: 3, points: 0 } ] },
        ])
        setOldValues({ dateOfMatch: "2023-07-01T14:00", locationOfMatch: "York Soccer Field", finalScore1: 5, leaguePoints1: 2, finalScore2: 2, leaguePoints2: 0})
    }, [location.pathname]);

    const handleMatchDetails = (e) => {
        const arrOfNumerics = ["finalScore1", "finalScore2", "leaguePoints1", "leaguePoints2"]
        const field = e.target.name
        if (arrOfNumerics.find(e => e === field) ) {
            setCurrentValues({ ...currValues, [field] : Number(e.target.value) })
        } else {
            setCurrentValues({ ...currValues, [field] : e.target.value })
        }
    }

    const onChangeStat = (e, playerId, statId, num) => {
        let i = 0; let j = 0;
        const value = e.target.value
        let newList = [];
        if (num ===1 ) {
            newList = [...matchesToUpdate1]
        } else {
            newList = [...matchesToUpdate2]
        }
        i = newList.findIndex (i => i.playerId === playerId);
        j = newList[i].playerStats.findIndex ( j => j.statId === statId)
        newList[i].playerStats[j].points = Number(value)
        if (num ===1 ) {
            setMatchesToUpdate1(newList)
        } else {
            setMatchesToUpdate2(newList)
        }
        setMatchDetailsChanged(true)
    }

    const handleRemoveRow = (index, num) => {
        let newList = [];
        if (num ===1 && !currValues.disableInput1 ) {
            newList = [...matchesToUpdate1]
            newList.splice(index, 1)
            setMatchesToUpdate1(newList)
        } else if (!currValues.disableInput2 ) {
            newList = [...matchesToUpdate2]
            newList.splice(index, 1)
            setMatchesToUpdate2(newList)
        }
        setMatchDetailsChanged(true)
    }

    const handleAddUsername = (e, num) => {
        if ( num ===1 ) {
            setFindUsername([e.target.value,findUsername[1]])
        } else {
            setFindUsername([findUsername[0],e.target.value])
        }
    }

    const handleAddRow = (username, num) => {
        if (username !== "") {
            let newList = [];
            const min = Math.ceil(101);  // TEMP DATA ONLY
            const max = Math.floor(999);
            const rand = Math.floor(Math.random() * (max - min + 1) + min)
            if (num === 1 && !currValues.disableInput1 ) {    // find username first if valid
                newList = [...matchesToUpdate1]
                newList.push({ playerId: rand, username: username, fullName: username, playerStats: [{ statId: 1, points: 0 }, { statId: 2, points: 0 }, { statId: 3, points: 0 } ] })
                setMatchesToUpdate1(newList)
                setFindUsername(["",findUsername[1]])
            } else if (!currValues.disableInput2 ) {
                newList = [...matchesToUpdate2]
                newList.push({ playerId: rand, username: username, fullName: username, playerStats: [{ statId: 1, points: 0 }, { statId: 2, points: 0 }, { statId: 3, points: 0 } ] })
                setMatchesToUpdate2(newList)
                setFindUsername([findUsername[0],""])
            }
            setMatchDetailsChanged(true)
        }
    }

    const navigate = useNavigate(); 
    const navigateUpdate = () => {
        if ( oldValues.dateOfMatch == currValues.dateOfMatch 
            && oldValues.locationOfMatch == currValues.locationOfMatch 
            && oldValues.finalScore1 == currValues.finalScore1 
            && oldValues.leaguePoints1 == currValues.leaguePoints1
            && oldValues.finalScore2 == currValues.finalScore2
            && oldValues.leaguePoints2 == currValues.leaguePoints2
            && didMatchDetailsChange == false
        ) {
            alert("NO CHANGES FOUND!")
        } else {
            if (!isAdmin) {
                if (oldValues.finalScore1 !== currValues.finalScore1
                    || oldValues.leaguePoints1 !== currValues.leaguePoints1
                    || oldValues.finalScore2 !== currValues.finalScore2
                    || oldValues.leaguePoints2 !== currValues.leaguePoints2    
                ) {
                    if (confirm("Changes will require the approval of other team's admin.\nPlease click on OK if you wish to proceed.")) {
                        navigate('/match/' + routeParams.matchId )
                    } else {
                        console.log("Update cancelled")
                    } 
                } else {
                    navigate('/match/' + routeParams.matchId )
                }
            } else {
                // update changes
                navigate(-1)
            }
        }    
    }
    const navigateCancel = () => { navigate(-1) }

  return (
    <div className="d-flex container mt-3 justify-content-center" >
      <Card style={{ width: "60rem", padding: 20 }}>
        <form action="">
            <div className="col mb-3 text-center">
                <div className="row justify-content-center mb-3">
                    <div className="col-4">
                        <h4 className="text-xl-center text-uppercase fw-bolder">{currValues.teamName1}</h4>
                    </div>
                    <div className="col-1">
                        <h6 className="text-lg-center fw-bold">VS</h6>
                    </div>
                    <div className="col-4">
                        <h4 className="text-xl-center text-uppercase fw-bolder">{currValues.teamName2}</h4>
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className="col-2">
                        <input name="finalScore1" type="number" min="0" className="form-control" value={currValues.finalScore1} onChange={handleMatchDetails} />
                    </div>
                    <div className="col-3">
                        <p className="text-lg-center fw-bold">Final Score</p>
                    </div>
                    <div className="col-2">
                        <input name="finalScore2" type="number" min="0" className="form-control" value={currValues.finalScore2} onChange={handleMatchDetails} />
                    </div>
                </div>
                { isAdmin && location.pathname.substring(1,6).toLowerCase() === "admin" && (
                    <div className="row justify-content-center mb-2">
                        <div className="col-2">
                            <input name="finalScorePending1" type="number" min="0" className="form-control" value={currValues.finalScorePending1} onChange={handleMatchDetails} />
                        </div>
                        <div className="col-3">
                            <p className="text-lg-center fw-bold">Final Score (Pending)</p>
                        </div>
                        <div className="col-2">
                            <input name="finalScorePending2" type="number" min="0" className="form-control" value={currValues.finalScorePending2} onChange={handleMatchDetails} />
                        </div>
                    </div>
                ) }
                <div className="row justify-content-center mb-3">
                    <div className="col-2">
                        <input name="leaguePoints1" type="number" min="0" className="form-control" value={currValues.leaguePoints1} onChange={handleMatchDetails} />
                    </div>
                    <div className="col-3">
                        <p className="text-lg-center fw-bold">League Points</p>
                    </div>
                    <div className="col-2">
                        <input name="leaguePoints2" type="number" min="0" className="form-control" value={currValues.leaguePoints2} onChange={handleMatchDetails} />
                    </div>
                </div>
                { isAdmin && location.pathname.substring(1,6).toLowerCase() === "admin" && (
                    <div className="row justify-content-center mb-2">
                        <div className="col-2">
                            <input name="leaguePointsPending1" type="number" min="0" className="form-control" value={currValues.leaguePointsPending1} onChange={handleMatchDetails} />
                        </div>
                        <div className="col-3">
                            <p className="text-lg-center fw-bold">League Points (Pending)</p>
                        </div>
                        <div className="col-2">
                            <input name="leaguePointsPending2" type="number" min="0" className="form-control" value={currValues.leaguePointsPending2} onChange={handleMatchDetails} />
                        </div>
                    </div>
                ) }
                <div className="row justify-content-center mt-5 mb-3">
                    <div className="col-6 mb-3 text-start">
                        <label htmlFor="locationOfMatch" className="form-label text-left">
                            Location of Match
                        </label>
                        <input id="locationOfMatch" name="locationOfMatch" type="text" className="form-control" value={currValues.locationOfMatch} onChange={handleMatchDetails} />
                    </div>
                    <div className="col-3 mb-3 text-start">
                        <label htmlFor="dateOfMatch" className="form-label">
                            Date and Time of Match
                        </label>
                        <input id="dateOfMatch" name="dateOfMatch" type="datetime-local" className="form-control" value={currValues.dateOfMatch} onChange={handleMatchDetails} />
                    </div>
                </div>
            </div>

            <br/><br/><br/>
            <div>
                <p className="fw-bold row justify-content-center">Players&apos; Statistics : {currValues.teamName1}</p>
            </div>
            <div className="row justify-content-center">
                <table className="table table-hover w-auto text-center" >
                    <thead>
                        <tr>
                            <th >Username</th>
                            <th >Full name</th>
                            {statistics.map((stat) =>       
                                <th key={stat.statId}>{stat.statDesc}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {matchesToUpdate1.map((player, index) => (
                            <tr key={player.playerId}>
                                <td style={{ width: "10rem"}}>{player.username}</td>
                                <td style={{ width: "15rem"}}>{player.fullName}</td>
                                {player.playerStats.map((stat) =>
                                    <td key={stat.statId} >
                                        <input name="stat" value={stat.points} type="number" min="0" onChange={(e) => onChangeStat(e, player.playerId, stat.statId, 1)} style={{ width: "3rem"}} disabled={currValues.disableInput1}/>
                                    </td>
                                )}
                                <td><FaTrash className="m-auto" onClick={() => handleRemoveRow(index, 1)} disabled={currValues.disableInput1}/></td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <input name="username" type="text" value={findUsername[0]} onChange={(e) => handleAddUsername(e, 1)} disabled={currValues.disableInput1} placeholder="Type a username" style={{ width: "10rem"}} />
                            </td>
                            <td style={{ width: "15rem"}} />
                            {statistics.map((stat) =>       
                                <td key={stat.statId} style={{ width: "3rem"}} />
                            )}
                            <td><FaSearchPlus className="m-auto" onClick={()=> handleAddRow(findUsername[0], 1)} /></td>  
                        </tr>
                    </tbody>
                </table>
            </div>

            <br/><br/><br/>
            <div>
                <p className="fw-bold row justify-content-center">Players&apos; Statistics : {currValues.teamName2}</p>
            </div>
            <div className="row justify-content-center">
                <table className="table table-hover w-auto text-center" >
                    <thead>
                        <tr>
                            <th >Username</th>
                            <th >Full name</th>
                            {statistics.map((stat) =>       
                                <th key={stat.statId}>{stat.statDesc}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {matchesToUpdate2.map((player, index) => (
                            <tr key={player.playerId}>
                                <td style={{ width: "10rem"}}>{player.username}</td>
                                <td style={{ width: "15rem"}}>{player.fullName}</td>
                                {player.playerStats.map((stat) =>
                                    <td key={stat.statId} >
                                        <input style={{ width: "3rem"}} name="stat" value={stat.points} type="number" min="0" onChange={(e) => onChangeStat(e, player.playerId, stat.statId, 2)} disabled={currValues.disableInput2}/>
                                    </td>
                                )}
                                <td><FaTrash className="m-auto" onClick={() => handleRemoveRow(index, 2)} disabled={currValues.disableInput2}/></td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <input name="username" type="text" value={findUsername[1]} onChange={(e) => handleAddUsername(e, 2)} disabled={currValues.disableInput2} placeholder="Type a username" style={{ width: "10rem"}} />
                            </td>
                            <td style={{ width: "15rem"}} />
                            {statistics.map((stat) =>       
                                <td key={stat.statId} style={{ width: "3rem"}} />
                            )}
                            <td><FaSearchPlus className="m-auto" onClick={()=> handleAddRow(findUsername[1], 2)} /></td>  
                        </tr>
                    </tbody>
                </table>
            </div>


            <br/><br/><br/>
            <div className="row justify-content-center mt-5">
                <button className="btn btn-dark col-2 mx-5" type="button" onClick={navigateUpdate}>
                    Update
                </button>
                <button type="button" className="btn btn-outline-secondary col-2" onClick={navigateCancel}>
                    Cancel
                </button>
            </div>
        </form>
      </Card>
    </div>
  );
};

export default MatchUpdate;
