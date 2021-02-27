import React, { Component } from 'react';
import firebase from './config';

class App extends Component{
   constructor(props){
     super(props);
     this.state={
        email:'',
        senha:'',
        emailInput:'',
        senhaInput:''
     }
   this.cadastrar = this.cadastrar.bind(this);
   this.logar     = this.logar.bind(this); 
   this.deslogar  = this.deslogar.bind(this);
   firebase.auth().onAuthStateChanged((user)=>{
     if(user){
       alert('Usuario logado\n' + user.email);
     }else{
       alert('Usuario deslogado');
     }
   })
  }  
   cadastrar(e){
     firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
     .catch((error)=>{
       if(error.code === 'auth/invalid-email'){
         alert("Email invalido");
       }else{
         alert("Descrição do erro" +error.code);
       }
     })
     this.setState({senha:''});
     this.setState({email:''});
     e.preventDefault();
    } 

    logar(e){
      firebase.auth().signInWithEmailAndPassword(this.state.emailInput,this.state.senhaInput)
      .catch((error)=>{
         if(error.code === 'auth/wrong-password'){
           alert('Senha errada');
         }else{
//para tratar caso não ocorra erro precisa chamar outra função,
//ela esta no caso em constructor deste codigo. Presta atenção na forma
//correta de contacnar string com sintaxe.
          alert('Erro'+error.code) 
        }
      })
      this.setState({emailInput:''});
      this.setState({senhaInput:''});
      e.preventDefault();
    }
    
    deslogar(e){
      firebase.auth().signOut();
      e.preventDefault();
    }
  render(){
    return(
      <div>
        <form onSubmit={this.cadastrar}>
         <input  type="text" value={this.state.email} onChange={(e)=>{
                 this.setState({email:e.target.value})}}/>
         <input  type="text" value={this.state.senha} onChange={(e)=>{
                 this.setState({senha:e.target.value})}}/>
        <button type="submit">Cadastrar</button>
        </form>
      <div>
      <form onSubmit={this.logar}>
         <input  type="text" value={this.state.emailInput} onChange={(e)=>{
                 this.setState({emailInput:e.target.value})}}/>
         <input  type="text" value={this.state.senhaInput} onChange={(e)=>{
                 this.setState({senhaInput:e.target.value})}}/>
        <button type="submit">Logar</button>
        </form>
        <button onClick={this.deslogar}>Deslogar</button>
      </div>  
      </div>
    );
  }
}
export default App;