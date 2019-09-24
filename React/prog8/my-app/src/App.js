import React from 'react';
import './App.css';
import Language from './Language';

class App extends React.Component{
  render(){

    const languageList = [
      {
      name: 'HTML & CSS',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      },
      {
      name: 'JavaScript',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      },
      {
      name: 'React',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      },
      {
      name: 'Ruby',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ruby.svg'
      },
      {
      name: 'Ruby on Rails',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/rails.svg'
      },
      {
      name: 'Python',
      image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg'
      }
      ];


    return(
      <div>
        <h1>Language</h1>

        <div className="language">
          {languageList.map((languageItem) => {
            return (
            // Languageコンポーネントを呼び出し、その中でpropsを渡してください
              <Language 
                name ={languageItem.name}
                image ={languageItem.image}
              />

            )
            })}

        </div>

      </div>
    );
  }
}

export default App;