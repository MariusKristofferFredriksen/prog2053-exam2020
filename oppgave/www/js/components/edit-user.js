import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  
  constructor(){
    super();
  
    fetch('api/fetchUser.php'+ , {
      method: 'GET',
      credentials: "include"
  }).then(res => res.json()
  ).then(data => {
      console.log(data);
      this.users = JSON.parse(JSON.stringify(data));
  });
  }





    

}
customElements.define('edit-user', EditUser);
