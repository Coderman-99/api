import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <div className="footer">
            <nav>
                <ul>
                    <li><SocialIcon url='www.github.com' href="https://github.com/Coderman-99" target='_blank' />&nbsp;&nbsp;Github: coderman-99</li>
                    <li><SocialIcon url='www.linkedin.com' href="https://www.linkedin.com/in/prum-munirak-ba23b7236/" target="_blank" />&nbsp;&nbsp;Prum Munirak</li>
                    <li><SocialIcon url='www.discord.com' target="_blank" />&nbsp;&nbsp;Discord</li>
                    <li><SocialIcon url='www.telegram.com' target="_blank" />&nbsp;&nbsp;Telegram: +85578449298</li>
                </ul>
            </nav>
        </div >
    );
}
export default Footer