import React, { Component } from 'react';
import LaddaButton, { XL, EXPAND_RIGHT } from 'react-ladda';
import Pusher from 'pusher-js';
import '../Loading/Loading.css';

class Loading extends Component {
    state = {
        loading: false,
        progress: 0,
    };

    componentDidMount() {
        const pusher = new Pusher('c330ae7c59b9702783e9', {
            cluster: 'eu',
            encrypted: true,
        });

        const channel = pusher.subscribe('upload');
        channel.bind('progress', data => {
            this.setState({
                progress: data.percent,
            });

            if (data.percent === 100) {
                this.setState({
                    loading: false,
                    progress: 0,
                });
            }
        });
    }

    handleClick = event => {
        event.preventDefault();

        this.setState({
            loading: !this.state.loading,
        });

        fetch('http://localhost:8080/upload', {
            method: 'POST',
        }).catch(error => console.log(error));
    };

    render() {
        const { loading, progress } = this.state;
        const message = loading ? (
            <span className="progress-text">{progress}% completed</span>
        ) : null;

        return (
            <div className="App">
                <h1>Imaginary Image Upload Service</h1>
                <LaddaButton
                    loading={this.state.loading}
                    onClick={this.handleClick}
                    progress={this.state.progress / 100}
                    data-color="#c79712"
                    data-size={XL}
                    data-style={EXPAND_RIGHT}
                    data-spinner-size={30}
                    data-spinner-color="#ddd"
                    data-spinner-lines={20}
                >
                    Upload really large image!
                </LaddaButton>

                {message}
            </div>
        );
    }
}

export default Loading;