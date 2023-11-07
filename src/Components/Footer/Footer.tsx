import { Copyright } from "../others/CopyRight";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className='footer'>
      <span>
        Tickety
      </span>
      <span>
        <Copyright/>
      </span>
    </div>
  )
}
