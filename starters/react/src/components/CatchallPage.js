import { BuilderComponent } from '@builder.io/react';
import React from 'react';

const API_KEY = 'b4b3c36f4db5465089e9b4f9fbed8266';

export class CatchallPage extends React.Component {
    state = { notFound: false };
  
    render() {
      return !this.state.notFound ? (
        <BuilderComponent
          apiKey={API_KEY}
          model="page"
          contentLoaded={content => {
            if (!content) {
              this.setState({ notFound: true });
            }
          }}
        >
          <div className="loading">Loading...</div>
        </BuilderComponent>
      ) : (
        <NotFound />
      );
    }
}

const NotFound = () => <h1>No page found for this URL, did you publish it?</h1>;
