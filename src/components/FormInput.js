import React, { Component } from 'react';

class FormInput extends Component{
    state = {
        nama: 'Dwi',
        jk: 'laki-laki',
        alamat: 'Kebumen',
        hobi: 'Membaca',
        mobil: 'fortuner' 
    }

    // e adalah event
    ubahData = e => {
        this.setState({
            //nama: e.target.value
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div>
                <div>
                    <p>Nama: {this.state.nama}</p>
                    <input type="text" name="nama" value={this.state.nama} onChange={this.ubahData}></input>
                </div>
                <div>
                    <p>Jenis Kelamin: {this.state.jk}</p>
                    <input 
                        type="radio" name="jk" value="laki-laki" onChange={this.ubahData}
                        checked={this.state.jk == 'laki-laki' ? true : false}
                    />
                    <input 
                        type="radio" name="jk" value="perempuan" onChange={this.ubahData}
                        checked={this.state.jk == 'perempuan' ? true : false}
                    />
                </div>
                <div>
                    <p>Alamat: {this.state.alamat}</p>
                    <input type="text" name="alamat" value={this.state.alamat} onChange={this.ubahData}></input>
                </div>
                <div>
                    <p>Mobil: {this.state.mobil}</p>
                    <select name="mobil" value={this.state.mobil} onChange={this.ubahData}>
                        <option value="fortuner">Fortuner</option>
                        <option value="pajero">Pajero</option>
                        <option value="alphard">Alphard</option>
                        <option value="lexus">Lexus</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default FormInput; 