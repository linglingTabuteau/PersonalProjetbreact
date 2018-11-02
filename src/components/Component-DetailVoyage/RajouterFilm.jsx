import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './RajouterFilm.css';



class RajouterFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            poster: "",
            comment:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const url = "http://92.175.11.66:3001/api/quests/movies/";
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(url, config)
        .then(res => res.json())
          //  res répresent id 
            .then(res => {
              if (res.error) {
                alert(res.error);
              } else {
                alert(`Employé ajouté avec l'ID ${res}!`);
              }
            }).catch(e => {
              console.error(e);
              alert('Erreur lors de l\'ajout d\'un film');
          });
    }

    render() {
        return (
            <div className='boxForm'>
                    <h2 className='margin'>Rajouter un film</h2>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input 
                                required
                                onChange={this.handleChange}
                                value={this.state.name} 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="name"
                                />
                        </FormGroup>

                        <FormGroup>
                            <Label for="poster">Poster</Label>
                            <Input
                                required
                                onChange={this.handleChange}
                                value={this.state.poster} 
                                type="text"
                                name="poster"
                                id="poster"
                                placeholder="url"
                               />
                        </FormGroup>

                        <FormGroup>
                            <Label for="comment" className='nomargin'>Comment</Label>
                            <textarea
                            required
                            onChange={this.handleChange} 
                            value={this.state.comment} 
                            type="textarea" name="comment" 
                            id="comment" 
                            placeholder="comment"
                           />
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Type de film</Label>
                            <Input 
                            required
                            onChange={this.handleChange} 
                            type="select" name="type" 
                            id="type" placeholder="Destination" >
                                <option>Sélectionner le type de voyage</option>
                                <option value="ghbli" >ghbli</option>
                                <option value="dysney">dysney</option>
    
                            </Input>
                        </FormGroup>
                        <Container className='centerButton mr-5'>
                            <div className='button mr-5'>
                                <Button color="primary font2" className="mb-3">Rajouter un film</Button>
                            </div>
                            {/* <div className='button mr-5'>
                                <Button color="success font2" className="mb-3">Modifier un film</Button>
                            </div> */}

                            {/* <div className='button'>
                                <Button color="danger font2" className="mb-3">Supprimer un film</Button>
                            </div> */}
                        </Container>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default RajouterFilm;