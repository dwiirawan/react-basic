import React from 'react';

// Menggunakan class
class BiodataProps extends React.Component {
    render() {
        return(
            <div>
                <p>Nama: {this.props.nama}</p>
                <p>Alamat: {this.props.alamat}</p>
                <p>Hobi: {this.props.hobi}</p>
            </div>
        );
    }
}

// Menggunakan function
// const BiodataProps = props => {
//     return(
//         <div>
//         <p>Nama: {props.nama}</p>
//         <p>Alamat: {props.alamat}</p>
//         <p>Hobi: {props.hobi}</p>
//         </div>
//     );
// }

export default BiodataProps;