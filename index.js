var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0

    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  componentWillMount: function() {
    console.log('ComponentWillMount, Komponent za chwilę będzie zamontowany.');
  },
  componentDidMount: function() {
    console.log('componentDidMount, Komponent zamontowany.');
  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps, Komponent odbiera nowe i aktualizuje atrybuty i stany (propsy i staty).');
  },
  shouldComponentUpdate: function() {
    console.log('Czy atrybut lub komponent wymaga aktualizacji?');
    return true;
  },
  componentWillUpdate: function() {
    console.log('Komponent będzie aktualizowany jeśli shouldComponentUpdate zwróci true. Nie można tutaj zmieniać stanów.');
  },
  componentDidUpdate: function() {
    console.log('Komponent jest aktualizowany. Można wprowadzać zmiany w DOM.');
  },
  componentWillUnmount: function() {
    console.log('Odmontowanie komponentu, usuwanie ich z DOM.');
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('button', {
        onClick: this.increment
      }, 'Increment'),
      React.createElement('button', {
        onClick: this.decrement
      }, 'Decrement'),
      React.createElement('span', {}, 'Licznik: ' + this.state.counter + ' + console.logs')
    );
  }
});

var element =
  React.createElement('div', {},
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, ),
    React.createElement(Counter, {}, ) 
  );

ReactDOM.render(element, document.getElementById('app'));