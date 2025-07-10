
import './privacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <>
      <header>
        <title>Política de Privacidad – CrisdevApps</title>
      </header>
      <main className="privacy-dark-container">
        <h1 className="privacy-dark-title">Política de Privacidad – CrisdevApps</h1>
        <section className="privacy-dark-content">
          <p>
            Esta política se aplica a todas las aplicaciones desarrolladas bajo <strong>CrisdevApps</strong>, incluyendo <em>Mercurial</em>, <em>Púrpura Music</em>, <em>Comet</em> y cualquier otro proyecto futuro.
          </p>

          <h2>Datos que se recopilan</h2>
          <p>
            Para autenticación, se puede solicitar nombre, correo electrónico y foto de perfil. No recopilamos datos adicionales.
          </p>

          <h2>Uso de los datos</h2>
          <p>
            Estos datos se usan exclusivamente para permitir el acceso seguro y personalizar la experiencia en las aplicaciones.
            No compartimos su información con terceros ni para fines publicitarios.
          </p>

          <h2>Cookies</h2>
          <p>
            CrisdevApps no utiliza cookies propias ni de terceros para rastrear usuarios ni almacenar información personal. 
            Solo se usan cookies necesarias para el funcionamiento básico de autenticación cuando aplica.
          </p>

          <h2>Eliminación de datos</h2>
          <p>
            Si desea eliminar su cuenta o borrar sus datos personales, puede contactarme en:
            <br />
            <a href="mailto:cristiandavidvargas717@gmail.com">
              cristiandavidvargas717@gmail.com
            </a>.
          </p>

          <h2>Enlaces a otros sitios web</h2>
          <p>
            Las aplicaciones desarrolladas por CrisdevApps, así como este sitio web, pueden contener enlaces a sitios web o servicios de terceros que no son operados por nosotros.
            Si hace clic en un enlace de un tercero, será redirigido al sitio de ese tercero.
            Le recomendamos encarecidamente revisar la política de privacidad de cada sitio que visite.
          </p>
          <p>
            No tenemos control sobre el contenido, las políticas de privacidad o las prácticas de ningún sitio o servicio de terceros, y no asumimos responsabilidad alguna por ellos.
          </p>

          <footer className="privacy-dark-footer">
            {new Date().getFullYear()} CrisdevApps.
          </footer>
        </section>
      </main>
    </>
  );
}