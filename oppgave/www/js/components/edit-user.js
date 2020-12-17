import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
    };
  }

  
  constructor(){
    super();

  }





  render(){
    return html`
<form id="accountinfo" method="post">          
<label>
   <div>User name</div>
   <input type="text" name="uname" value="${this.user.uname}">
 </label>

<label>
 <div>First name</div>
 <input type="text" name="firstName" value="${this.user.firstName}" >
</label>

<label>
  <div>Last name</div>
  <input type="text" name="lastName" value="${this.user.lastName}" >
</label>

<label>
  <div>Old password</div>
  <input type="password" name="oldpwd"  value="${this.user.oldpwd}" >
</label>

<label>
  <div>New password</div>
  <input type="password" name="pwd">
</label>

<button type="button" value="Submit" @click="${this.updateInfo}">Update information</button>  
</form>
    
    `
  }




  updateInfo(e){
    fetch('api/updateUser.php', {
      method : 'POST',
    }).then(res => res.json())
    .then(data=>{
      console.log(data);
    })
  }
    

}
customElements.define('edit-user', EditUser);
