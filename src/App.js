import './assets/css/main.css'
import logo from "./assets/images/logo.svg"
import { AiOutlineSearch, AiFillStar } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useGlobalContext } from "./provider/context"
import { useState } from 'react'

function App() {
  const  { data, modalRef, closeModal }  = useGlobalContext()
  const [state, setState] = useState(data)
  return (
    <div className="App">
        <main>
          <nav>
            <article>
              <div className="logo">
              <img src={logo} alt="logo" />
              </div>
              <div className="search-wrapper">
                <div className="container">
                  <div className="byCity" onClick={closeModal}>
                    Helsinki, Finland
                  </div>
                  <div className="byGuest">
                    Add guests
                  </div>
                  <div className="search-icon">
                  <span className="icon"> <AiOutlineSearch/> </span>
                  </div>
                </div>
              </div>
            </article>
            <div className="modal" ref={modalRef}>
              <div className="nav">
                <div>Edit your search</div>
                <span className="icon" onClick={closeModal}><MdClose/></span>
              </div>
              <div className="content">
                <div className="wrapper">
                  <div className="byCity">
                    <span>Location</span>
                    <p>Helsinki, Finland</p>
                  </div>
                  <div className="byGuest">
                    <span>Guests</span>
                    <p>Add guests</p>
                  </div>
                  <div className="search-icon">
                    <span> <AiOutlineSearch/> </span> Search
                  </div>
                </div>
                <div className="items">
                <article className="item-1">
                <ul>
                    {
                      state.map(({city, country}, index) => {
                        return (
                          <li key={index}> 
                            <span> <FaMapMarkerAlt/> </span>
                            {`${city + ', '} ${country}`}
                          </li>
                        )
                      }).filter((d,i) => i < 3)
                    }
                  </ul>
                </article>
                <article className="item-2">
                    <div className="single">
                        <h3>Adults</h3>
                        <div className="title">Ages 13 or above</div>
                        <div className="btn-flex">
                          <span>-</span>
                           <span>0</span>
                          <span>+</span>
                        </div>
                    </div>
                    <div className="single">
                        <h3>Children</h3>
                        <div className="title">Ages 2 - 12</div>
                        <div className="btn-flex">
                          <span>-</span>
                          <span>0</span>
                          <span>+</span>
                        </div>
                    </div>
                </article>
                </div>
              </div>
            </div>
          </nav>
          <section className="stays-wrapper">
            <div className="hero">
              <div className="left"> Stays in Finland </div>
              <div className="right"> 12+ stays </div>
            </div>
           <section className="content">
             {
               state.map(({city, country, beds, rating, type, title, photo, bed, superHost}, i) => {
                 return (
                  <article key={i} className="single">
                   <div className='photo'>
                     <img src={photo} alt="" />
                   </div>
                    <ul>
                      <li>{`${superHost ? 'super host' : 'private room'}`}</li>
                      <li>{type}. <span>{`${beds ? beds + ' beds' : ''}`} </span> </li>
                      <li><span> <AiFillStar/></span>{rating}</li>
                    </ul>
                    <p className="title">{title}</p>
                  </article>
                 )
               })
             }
           </section>
          </section>
          <footer>
          Created by SpiderTech - devChallenges.io
          </footer>
        </main>
    </div>
  );
}

export default App;
