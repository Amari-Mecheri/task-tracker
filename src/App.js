import logo from './logo.svg';
import './App.css';
import react from 'react';
const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

class Card extends react.Component{
  render(props){
    const profile=this.props
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt=""/>
        <div className="info">
              <div className="name ">{profile.name}</div>
            <div className="company">{profile.company}</div>
        </div>
      </div>
      );
  }
}

function App() {
  var rows = [];

  return (
    <div className="App">
      <div className="CardList">
      {testData.map(profile=><Card {...profile}/>)}
      </div>
            {(() => {
        for (let i = 0; i < 10; i++) {
          rows.push(<h1> thats a for  test {i+10}</h1>);
        };
        return rows;
      })()}
        {[...Array(10)].map((x, i) =>
    <h1> thats a react test {i}</h1>
  )}
  {/* {(function f(){let result=""; for(i=0;i<10;i++) result+="<h1> thats a react test {i}</h1>"; return result;})()} */}
  {rows.map(function (key,i) {
        return <h1> thats a react testi {i}</h1>;
      })}
      
    </div>
  );
}

export default App;
