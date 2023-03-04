import Header from "./components/Header/Header"
import Item from "./components/Item/Item"

import Calculator from "./components/Calculator/Calculator";
import Clock from "./components/Clock/Clock";
// import Modal from "./components/Modal/Modal";
import Hook from "./components/Hook/Hook";
import PersonList from "./components/PersonList/PersonList";

import ivan from "./img/ivan.jpeg"
import inna from "./img/inna.jpeg"

import "./index.css"
import "./components/Hook/Hook.css"


function App() {
  return (
    <div className="App">
      <Header />

      <div className="Hookss">
        <Hook/>
      </div>

      <div className="container">
          <Calculator/>
        <div className="Clock">
          <Clock/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

        {/* <Modal/> */}

        <Item
            name={'Кайдалова Наталья Сергеевна'}
            image={inna}
        >
          lorem sdfsdf
        </Item>
        <Item
            name={'Головко Татьяна Ивановна'}
            image={ivan}
            >
            lorem sdfsdf
            lorem
        </Item>
      </div>

      <div ClassName="App">
        <PersonList/>
      </div>
      

      Test !!! 
        Cupidatat sint incididunt et nisi sunt labore labore cupidatat incididunt commodo.Magna mollit esse minim labore id veniam sint et sit aute est ad tempor ullamco. Tempor culpa pariatur duis anim et ut ullamco qui. Enim mollit culpa duis minim eu deserunt sint velit laborum culpa aute id. Sit sint sit duis ea cillum consectetur adipisicing. Enim velit ad enim aliquip proident ullamco veniam in anim ipsum non laborum. Voluptate reprehenderit et aute labore. Ad amet proident adipisicing sunt.

        Enim sint velit ipsum ipsum commodo. Aliquip id laboris esse deserunt in. Duis excepteur nulla laborum veniam. Qui non excepteur eu ut. Dolore irure laboris aliquip ipsum.

        Lorem est exercitation nostrud cupidatat esse. Magna magna velit exercitation nulla minim. Aliquip pariatur et ut enim labore incididunt qui ut commodo duis fugiat aliquip id quis. Cillum ex aliquip cupidatat enim esse enim qui qui sunt adipisicing eu deserunt deserunt. Elit qui ullamco proident cupidatat sunt sit commodo. Minim aute mollit mollit est sit ea enim cupidatat.

        Eiusmod cupidatat Lorem fugiat consequat. Minim sint sit amet laborum labore aliqua culpa deserunt nostrud eiusmod ad ullamco nisi. Proident aute nulla deserunt sit adipisicing dolore aliqua eu aute officia culpa eu elit. Qui esse cupidatat eu officia nulla ullamco aute duis proident dolor consectetur. Adipisicing consectetur ex eu eiusmod irure nisi magna aliqua deserunt laborum duis ut ipsum velit.

    </div>  
  );
}

export default App;
