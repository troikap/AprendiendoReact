import {Component, Fragment} from 'react';

class MiComponente extends Component{

    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        }
        return (
            <Fragment>
                <div className="mi-componente">
                    <h1>{'Nombres: ' + receta.nombre}</h1>
                    <h2>{'Calorias: ' + receta.calorias} </h2>
                    <ol>
                        {
                            receta.ingredientes.map((ingrediente, i) => {
                                console.log('INGREDIENTE ', ingrediente)
                                return (
                                    <li key={i}>
                                        {ingrediente}
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <hr />
                </div>
            </Fragment>
        )
    }
}

export default MiComponente;