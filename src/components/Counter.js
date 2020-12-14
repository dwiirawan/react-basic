import React, { Component } from 'react';

class Counter extends Component{
    state = {
        angka: 0
    }

    // tambah = () => {
    //     this.setState({
    //         angka: this.state.angka + 1
    //     })
    // }

    // Memakai prevState
    tambah = () => {
        this.setState(prevState => ({
            angka: prevState.angka + 1
        }))
    }

    render() {
        return(
            <div>
                <p>{this.state.angka}</p>
                <button onClick={this.tambah}>Tambah</button>
            </div>
        );
    }
}
export default Counter; 