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
        this.save = this.save.bind(this);

        this.state = { ...initialState };
    };

    componentWillMount() {
        // get all the users from backend and set in the list state
        axios(baseUrl)
            .then(resp => {
                this.setState({ list: resp.data })
            });
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
                            onClick={ this.save }
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

     load(user) {
        this.setState({ user });
     };

     remove(user) {
         axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.getUpdatedList(null);
                this.setState({ list });
            });
     };

     renderTable() {
         return(
             <table className="table mt-4">
                 <thead>
                     <tr>

                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>

                     </tr>
                 </thead>

                <tbody>
                    { this.renderRows() }
                </tbody>

             </table>
         );
     };

     renderRows() {
         return this.state.list.map( user => {
            return(
                <tr key={user.id}>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>

                        <button 
                            className='btn btn-warning'
                            onClick={ () => this.load(user) }
                            >
                            <i className='fa fa-pencil'></i>
                        </button>

                        <button 
                            className='btn btn-danger ml-3'
                            onClick={ () => this.remove(user) }
                        >
                            <i className='fa fa-trash'></i>
                        </button>

                    </td>
                </tr>
            )
         });
     }

    render() {
        console.log(this.state.list);
        return (
            <Main { ...headerProps }>
                Cadastro de Usuário
                { this.renderForm() }
                { this.renderTable() }
            </Main>
        );
    };

};