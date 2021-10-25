//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import axios from 'axios';


function CreateIdea() {
    /*
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [description, setDescription] = useState('');


    const onChangeCallback = useCallback(
        (e) => {
            this.setState({ [e.target.name]: e.target.value });
        },
        [e.target.name, e.target.value]
        };

onSubmit = e => {
    e.preventDefault();

    const data = {
        title: this.state.title,
        isbn: this.state.isbn,
        author: this.state.author,
        description: this.state.description,
        published_date: this.state.published_date,
        publisher: this.state.publisher
    };

    axios
        .post('http://localhost:8082/api/books', data)
        .then(res => {
            this.setState({
                title: '',
                isbn: '',
                author: '',
                description: '',
                published_date: '',
                publisher: ''
            })
            this.props.history.push('/');
        })
        .catch(err => {
            console.log("Error in CreateBook!");
        })
};
    */
    return (
        <div className="CreateIdea">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show Idea List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">
                            Create new idea
                        </p>

                        {false && <></> /*<form noValidate onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Title of the Idea'
                                name='title'
                                className='form-control'
                                value={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>
    <br />*/}
                    </div >
                </div >
            </div >
        </div >
    );
}

export default CreateIdea;
