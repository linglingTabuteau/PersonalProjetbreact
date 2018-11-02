import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
// import {withRouter} from 'react-router-dom';

class ModificationFilm extends Component {
  constructor(props){
      super(props);
      this.state={
        name:'',
        poster:'',
        comment:''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
        // attention: name ci-dessous means the name of the target(input)
        [event.target.name]:event.target.value
    })
  }

  handleSubmit(e){
    //   this function is to prevent the site reloading automatiquely 
    e.preventDefault();

    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
    };
    const url= ('http://92.175.11.66:3001/api/quests/movies/351');

    fetch(url, config)
    // ne comprends pas tres bien toute la partie ci-dessous ?text()? au lieu de .Json()
    .then (res => res.text())
    .then (res => {
        if (res.error) {
            alert(res.error)
        } else {
            alert('Voyage correctement modifié');
            this.props.history.push("/admin")
        }
    }).catch(e => {
        console.error(e);
        alert('Erreur lors de la modification du voyage')
    })
}
// function below to load the info about the film while the site charge as the initail state is vide 
componentDidMount(){
    window.scrollTo(0,0);
    fetch('http://92.175.11.66:3001/api/quests/movies/351')
    .then(res =>res.json())
    .then(info => 
        this.setState({
            name:info.name,
            poster:info.poster,
            comment:info.comment
        }));
}

    render(){
        return(
    <div>
            <div className="text-center">
                <h2>Modifier le voyage</h2>
            </div>

        <Container>
        <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            {/* attention: variable name below is the same as the one in function handleChange [event.target.name] */}
                            {/* name and value below should correspond to the state variables and the variables in API */}
                            <Input onChange={this.handleChange}
                            // // required  => il exige un champ obligatoir à remplir 
                            //     required
                                type="text"
                                name="name"
                                id="name"
                                value={this.state.name} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="poster">Poser</Label>
                            <Input onChange={this.handleChange}
                                type="text"
                                name="poster"
                                id="poster"
                                value={this.state.poster} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="comment">Comment</Label>
                            <Input onChange={this.handleChange}
                                type="text"
                                name="comment"
                                id="comment"
                                value={this.state.comment} />
                        </FormGroup>

                        {/* <FormGroup>
                            <Label for="type">Type de Film</Label>
                            <Input onChange={this.handleChange} type="select" name="type" id="type" placeholder="Destination" >
                                <option>Sélectionner le type de voyage</option>
                                <option value="Ghbli" >Ghibli</option>
                                <option value="Dysney">Dysney</option>
                            </Input>
                        </FormGroup> */}
                        <div className='text-center'>
                            <Button color="primary font2" className="mb-3">Modifier</Button>
                        </div>
                    </Form>
        </Container>
</div>
        );
    }
}

export default ModificationFilm;