import { FormEvent, useState } from "react"

import FooterBottom from "./FooterBottom"
import agent from "../../utils/agent"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const [uuid, setUuid] = useState<string>("")
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    try {
      setTimeout(async () => {
        console.log(uuid)
        const message = await agent.SignIn.mailvalidation(uuid)
        console.log(message)
        navigate("/auth/login")
      }, 1000)


    } catch (error) {
      console.log(error)
    }
  }





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
        <form id="uuid" onSubmit={handleSubmit}>
          <h6 className="footer-title">Valida mail</h6>
          <div className=" w-80">
            <span className="label-text">Enter your uuid</span>
            <div className="join">
              <label id="uuid">
                <input type="text" placeholder="uuid" className="input input-bordered join-item" name="uuid" id="uuid" value={uuid} onChange={(e) => setUuid(e.target.value)} />
                <button className="btn btn-primary join-item" type="submit" name="Submit">valida</button>
              </label>
            </div>
          </div>
        </form>
      </footer>
      <FooterBottom />
    </>
  )
}
export default Footer