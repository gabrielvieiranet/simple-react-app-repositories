import React, { Component } from 'react';
<<<<<<< HEAD
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../Components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepo: '',
      repositories: [],
      loading: false,
    };
  }

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
=======
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  // Carregar do localstorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

<<<<<<< HEAD
  // Salvar os dados do localStorage
=======
  // Gravar no localstorage
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
<<<<<<< HEAD

    try {
      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
      });
    } catch {
      console.log('pau!');
      this.setState({
        newRepo: '',
        loading: false,
      });
    }
=======
    const response = await api.get(`repos/${newRepo}`);
    const data = {
      name: response.data.full_name,
    };
    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

    return (
      <Container>
        <h1>
<<<<<<< HEAD
          <FaGithub />
=======
          <FaGithubAlt />
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
<<<<<<< HEAD

=======
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
          <SubmitButton loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#fff" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
