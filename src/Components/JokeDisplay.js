import React, {Component} from 'react';
import {setState} from "react";
import GetJoke from './GetJoke';
import GetAnimals from './GetAnimals';
import GetCareers from './GetCareers';
import GetCelebs from './GetCelebs';
import GetDevs from './GetDevs';
import GetExplicit from './GetExplicit';
import GetFashion from './GetFashion';
import GetFood from './GetFood';
import GetMoney from './GetMoney';
import GetMovie from './GetMovie';
import GetMusic from './GetMusic';
import GetPolitics from './GetPolitics';
import GetReligion from './GetReligion';
import GetScience from './GetScience';
import GetSport from './GetSport';
import GetTravel from './GetTravel';
import GetHistory from './GetHistory';

class JokeDisplay extends Component{

    render(){
        return(
            <div className="categories">
                <GetJoke/>
                <GetAnimals/>
             <GetCareers/>
             <GetCelebs/>
             <GetDevs/>
             <GetExplicit/>
             <GetFashion/>
             <GetFood/>
             <GetHistory/>
             <GetMoney/>
             <GetMovie/>
             <GetMusic/>
             <GetPolitics/>
             <GetReligion/>
             <GetScience/>
             <GetSport/>
             <GetTravel/>
            </div>
        )
    }

}
export default JokeDisplay