import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './ui/main';

uibench.init('React-lite', '0.0.18');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');

  uibench.run(
      function(state) {
        ReactDOM.render(<Main data={state}/>, container);
      },
      function(samples) {
        ReactDOM.render(<pre>{JSON.stringify(samples, null, ' ')}</pre>, container);
      }
  );
});
