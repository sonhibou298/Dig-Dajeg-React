
import './App.css';
import styled from "styled-components";

function App() {
  return (
      <Header>
        <div className="row">
            <div className="bienvenue">
                <p>Bienvenue sur la plateform Dig-Dajeg</p>
            </div>
            <div className="info">
                <span className="phone-icon"><i className="fa fa-phone"></i> 33 855 64 28</span>
                <span className="date-icon"><i className="fa fa-calendar-plus-o"></i> 08:00 - 22:00 (Lun-Sam)</span>
                <span className="email-icon"><i className="fa fa-envelope-o"></i> <a href="#">info@healthcenter.com</a></span>
            </div>
        </div>
      </Header>
  );
}
const Header = styled.header`
  margin: 0px;
  padding: 0px;
  .row{
    display: flex;
    
  }
    p{
      color: #757575;
    }
  
  span{
    font-weight: 500;
    display: inline-block;
    padding: 11px 15px;
  }
`
export default App;
