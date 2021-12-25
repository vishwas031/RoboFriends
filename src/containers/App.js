import React, {useState , useEffect} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../containers/ErrorBoundry'

import './App.css'

function App(){
    const [robots , setRobots] = useState([])
    const [searchfields , setSearchfields] = useState('')

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users =>setRobots(users))
    },[])

    function onSearchChange (event){
        setSearchfields(event.target.value)
    }
        const filteredRobots = robots.filter(robot=>{
            return(robot.name.toLowerCase().includes(searchfields.toLowerCase()))
        })

        if(!robots.length)
            return(<h1 className='tc'>Loading...</h1>)
        else{
        return(
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                <ErrorBoundry>
                    <CardList robots = {filteredRobots}/>
                </ErrorBoundry>
                    
                </Scroll>
                
            </div>
        )
} 
}
export default App;