import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
};

const initialState = {
    user: { name:'', email:'' },
    list: []
};

const baseUrl = 'http://localhost:3001/users';

export default class UserCrud extends Component {
    constructor(props) {
        super(props);

        this.clear = this.clear.bind(this);
        this.updatedField = this.updatedField.bind(this);

        this.state = { ...initialState };
    };

    // just clear the fields with setted values
    clear() {
        this.setState({ user: initialState.user });
    };

    save() {
        // verify if will be a put or post and request the data
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

        axios[method] (url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);

                this.setState({ 
                    // cleaning the user state and field after post/put it
                    user: initialState.user,
                    list
                 });
            });
    }
    
    // will update the list with the new user at the beginning of the array
    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id);
        list.unshift(user);
        return list;
    };

    // get the fields values and set in the state
     updatedField(event) {
         const user = { ...this.state.user };
         user[event.target.name] = event.target.value;
         this.setState({ user });

     };

     renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">

                            <label>Nome</label>
                            <input type="text" 
                                className="form-control" 
                                name="name"
                                value={ this.state.user.name }
                                onChange={ this.updatedField }
                                placeholder='Digite o nome...'
                                required
                            />

                            <label>Email</label>
                            <input type="text" 
                                className="form-control"
                                name="email"
                                value={ this.state.user.email }
                                onChange={ this.updatedField }
                                placeholder='Digite o e-mail...'
                                required
                            />

                        </div>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">

                        <button className="btn btn-primary"
                            onClick={ e => this.save(e) }
                        >
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={ this.clear }
                        >
                            Cancelar
                        </button>

                    </div>
                </div>

            </div>
        )
     };

    render() {
        return (
            <Main { ...headerProps }>
                Cadastro de Usuário
                { this.renderForm() }
            </Main>
        );
    };

};