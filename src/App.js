import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Scroll from './Scroll'



class App extends Component{
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=544297d08ee9679e6641d18e5056a278&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then(response => response.json())
        .then(data => {
            this.setState({
                movies: data
            })
            console.log(this.state.movies)
            console.log(this.state.movies.results)
        })
    }
    render() {
        if (this.state.movies.length === 0) {
            return (
                <div>
                    <h1 className="f1 tc white">Loading... ⏳</h1>
                    <h2 className="f3 tc white">Taking too long 🐢 check your internet connection 🛰 and refresh</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h1 className="f1 tc white">ScreenTime 🍿</h1>
                   <Scroll>
                    <Cardlist movies={this.state.movies}/>
                   </Scroll>
                </div>
            )
        } 
    }
}

export default App;