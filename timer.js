
var Timer = React.createClass({

	getInitialState() {
		return {
			'seconds' : 0,
			'minutes' : 0,
			'hours' : 0,
			'isPaused' : false
		};
	},

	tick: function(){
		var isPaused = this.state.isPaused; 
		if (!isPaused){
			this.setState({ seconds : this.state.seconds + 1});
			if (this.state.seconds == 60){
                    this.state.seconds -= 60;
                    this.state.minutes += 1;
                }
            if (this.state.minutes == 60){
                    this.state.minutes -= 60;
                    this.state.hours += 1;
                }
			}
		},

	componentDidMount() {
		this.timerId = setInterval(this.tick, 1000);
	},

	componentWillUnmount() {
		clearInterval(this.timerId);
	},

	handleStart(){
		this.setState({
			isPaused: false
		});
	},

	handleStop(){
		this.setState({
			seconds: 0,
			isPaused: true
		});
	},

	handlePause(){
		this.setState({
			isPaused: true
		});
	},

	render: function() {

		return (
			<div className="timer-block">
				<div>
					<button className="timer-button" onClick={this.handleStart} >START</button>
					<button className="timer-button" onClick={this.handleStop}>STOP</button>
					<button className="timer-button" onClick={this.handlePause}>PAUSE</button>
				</div>
				<br/>
					<h1 className="timer-monitor">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h1>
			</div>

		);
	}
});



ReactDOM.render(
	<Timer />,
	document.getElementById('content')
);
