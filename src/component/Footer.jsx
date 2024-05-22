import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../assets/styles/footer.scss';

const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <footer>
        <div className="social-media">
            <div className="social-icon">
                <FacebookOutlinedIcon/>
            </div>
            <div className="social-icon">
                <InstagramIcon/>
            </div>
            <div className="social-icon">
                <TwitterIcon/>
            </div>
            <div className="social-icon">
                <YouTubeIcon/>
            </div>
        </div>
        <p>
        All right Reserved © {year}. Powered by <a href='https://saysheji.org/' target='_blank'>Saysheji</a>.
        </p>
    </footer>
  )
}

export default Footer