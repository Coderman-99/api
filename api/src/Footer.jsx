import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <div className="footer">
            <nav>
                <ul>
                    <li><a href="https://github.com/Coderman-99"><SocialIcon url='www.github.com' /></a>&nbsp;&nbsp;Github: coderman-99</li>
                    <li><a href="https://www.linkedin.com/in/prum-munirak-ba23b7236/"><SocialIcon url='www.linkedin.com' /></a>&nbsp;&nbsp;Prum Munirak</li>
                    <li><a href=""><SocialIcon url='www.discord.com' /></a>&nbsp;&nbsp;Discord</li>
                    <li><a href=""><SocialIcon url='www.telegram.com' /></a>&nbsp;&nbsp;Telegram: +85578449298</li>
                </ul>
            </nav>
        </div>
    );
}
export default Footer