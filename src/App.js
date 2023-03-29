import React from 'react';

class App extends React.Component{
  state = {

    // state properties 

    person: {
      fullName: 'walid abbassi ',
      bio: '*********',
      imgSrc: 'https://i1.sndcdn.com/artworks-gPaaiKwjsUKASTtA-PfuR4g-t500x500.jpg',
      profession: 'Software Engineer',
    },

    show: false,
    intervalId: null,
    time: 0,


  }

  // class methods 

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

    timer = () => {
    this.setState({ time: this.state.time + 1 });
  };

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    //  JSX code 

    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, time } = this.state;

      return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        {show && (
          <div>
            <img height={150} width={150} src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Time since mount: {time} seconds</p>
      </div>
      );
}
}



export default App;
