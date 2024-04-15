import FooterBottom from "./FooterBottom"

const Footer = () => {

    return (
        <>
        <footer className="footer p-10 bg-base-100 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
{/*   <form @submit.prevent="() => {console.log('validated')}">
    <h6 className="footer-title">Valida mail</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your uuid</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="uuid" v-model="uuidUser" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item " @click="()=>validationMail()">valida</button>
      </div>
    </fieldset>
  </form> */}
</footer>

<FooterBottom/>
</>
    )
}
export default Footer