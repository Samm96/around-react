import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <>
      <div class="page">
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
        <template id="card-template">
          <article class="element">
            <button
              arial-label="delete"
              type="button"
              class="delete-button"
              id="delete-card-button"
            ></button>
            <img class="element__image" src="not_found.jpg" alt="" />
            <div class="element__card">
              <h2 class="element__title"></h2>
              <div class="element__like-container">
                <button
                  arial-label="like"
                  type="button"
                  class="like-button"
                ></button>
                <p class="like-button__counter">0</p>
              </div>
            </div>
          </article>
        </template>
      </div>
    </>
  );
}

export default App;
