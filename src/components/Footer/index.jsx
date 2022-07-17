import './style.scss'

function Footer() {
  return(
    <div>
      <footer className='footer'>
        <div className='footer__call-to-action-conatiner'>
          <form>
            <button className='footer__call-to-action'>
              <strong>Sing-up</strong>
            </button>
          </form>
        </div>
        <div className='footer__buttons--bg-screen'>
          <div><p>© 2022, Equipo Maravilla</p></div>
          <div>
          <a href='#0' className='privacity-button--bg-screen'>
            Privacity
          </a>
          </div>
          <div>
          <a href='#0' className='log-in-button--bg-screen'>
            <strong>Log-in</strong>
          </a>
          </div>
          <div>
            <a href='#0' className='sing-up-button--bg-screen'>
              <strong>Sing-up</strong>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
