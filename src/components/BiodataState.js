import React, { Component } from 'react';

class BiodataState extends Component{
    state = {
        nama: 'Dwi',
        alamat: 'Cilacap',
        hobi: 'Membaca'
    }

    render() {
        return(
            <div>
                <p>Nama: {this.state.nama}</p>
                <p>Alamat: {this.state.alamat}</p>
                <p>Hobi: {this.state.hobi}</p>
            </div>
        );
    }
}
export default BiodataState; 