import React, { Component } from 'react';

class Biodata extends Component {
    render() {
        return(
            <div>
                <p>Nama: {this.props.nama}</p>
                <p>Alamat: {this.props.alamat}</p>
            </div>
        );
    }
}

const hobi = () => {
    return(
        <ul>
            <li>Membaca</li>
            <li>Bersepeda</li>
        </ul>
    );
}
export default Biodata;