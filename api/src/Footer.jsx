import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <div className="footer">
            <div>
                <SocialIcon url='www.github.com' href="https://github.com/Coderman-99" target='_blank' /><p>&nbsp;&nbsp;Github: coderman-99</p>
            </div>
            <div>

                <SocialIcon url='www.linkedin.com' href="https://www.divnkedin.com/in/prum-munirak-ba23b7236/" target="_blank" /><p>&nbsp;&nbsp;Prum Munirak
                </p>
            </div>
            <div>

                <SocialIcon url='www.discord.com' target="_blank" /><p>&nbsp;&nbsp;Discord</p>

            </div>
            <div>

                <SocialIcon url='www.telegram.com' target="_blank" /><p>&nbsp;&nbsp;Telegram: +85578449298</p>

            </div>
        </div >
    );
}
export default Footer