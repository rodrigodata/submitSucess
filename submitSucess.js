sucessoDB = new Mongo.Collection("db");

if (Meteor.isClient) {

  Template.sucesso.events({
    'submit form': function(event){
        // evita comportamento padrão do navegador
        event.preventDefault();
        // pega o texto que foi digitado no input 'textoCampo' e grava na VAR textoCampoVar
        var textoCampoVar = event.target.textoCampo.value;
        sucessoDB.insert({
          texto: textoCampoVar
        }, function(error, sucess){
          // caso a gravação dentro do MongoDB der problema.
          if(error)  console.log(error);
          // caso a gravação dentro do MongoDB der certo.
          if(sucess) alert("ALLONS-Y!!");
        });

    }

  });

}

if (Meteor.isServer) {

}
