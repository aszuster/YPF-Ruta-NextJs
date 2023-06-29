import styles from 'components/FormAdherirme/index.module.css'
import Link from 'next/link'
import { useState } from 'react'

const FormAdherirme = () => {
  const [on, setOn] = useState(false)

  return (
    <>
      <section className={`section ${styles.section__contact}`} id="contact">
        <div className={styles.contact__content_wrapper}>
          <div className={styles.contact__texts}>
            <h2 className={`${styles.contact__title} text text--h1`}>
              Quiero adherirme
            </h2>
            <p className={`${styles.contact__text} text text--body-01`}>
              Para adherirte a YPF Ruta o conocer sobre nuestros planes por
              favor, completá el siguiente formulario y nos contactaremos a la
              brevedad para darte una solución.
            </p>
          </div>
          <div className={styles.contact__form_new}>
            {/* form */}
            <form
              // v-if="show"
              id="contact-form"
              action="#"
              className={styles.contact__form}
            >
              <div className={styles.form_msg}>
                <img
                  title="éxito"
                  alt="éxito"
                  className={styles.form_msg__icon}
                  // src="images/home/contact/success-icon.svg"
                />
                <h3 className={styles.form_msg__title}>Mensaje enviado</h3>
                <p className={styles.form_msg__text}>
                  En breve, nos estaremos comunicando con vos.
                </p>
              </div>
              <div className={styles.form_msg}>
                <img
                  title=""
                  alt=""
                  className={styles.form_msg__icon}
                  src="images/home/contact/success-icon.svg"
                />
                <h3 className={styles.form_msg__title}>Se produjo un error.</h3>
                <p className={styles.form_msg__text}>
                  Tu mensaje no ha podido ser enviado. Volvé a intentar por
                  favor.
                </p>
                <button className={styles.form_msg__button}>
                  Volver a enviar
                </button>
              </div>
              <div className={styles.form__field}>
                <input
                  className={styles.field__input}
                  name="company-name"
                  id="company-name"
                  placeholder="Nombre de la empresa"
                  v-model="form.companyName"
                  maxLength="100"
                />
                <label htmlFor="company-name" className={styles.field__label}>
                  Nombre de la empresa
                </label>
              </div>
              <div className={styles.form__field}>
                <input
                  className={styles.field__input}
                  name="cuit"
                  id="cuit"
                  v-model="form.cuit"
                  v-maska="'##-########-#'"
                  placeholder="CUIT XX-XXXXXXXX-X (*)"
                />
                <p className={styles.field_input__error_msg}>
                  El cuit que ingresaste no es válido, por favor revisá el
                  formato XX-XXXXXXXX-X.
                </p>
                <label htmlFor="cuit" className={styles.field__label}>
                  CUIT
                </label>
              </div>
              <div className={styles.form__field}>
                <input
                  className={styles.field__input}
                  name="contact-name"
                  id="contact-name"
                  v-model="form.contactName"
                  maxLength="100"
                  placeholder="Nombre y apellido del responsable (*)"
                />
                <p className={styles.field_input__error_msg}>
                  Por favor, completá el nombre del responsable. Lo necesitamos
                  para contactarte.
                </p>
                <label htmlFor="contact-name" className={styles.field__label}>
                  Nombre y apellido del responsable
                </label>
              </div>
              <div className={styles.form__field}>
                <input
                  className={styles.field__input}
                  name="contact-role"
                  id="contact-role"
                  v-model="form.contactRole"
                  maxLength="100"
                  placeholder="Puesto del Responsable"
                />
                <label htmlFor="contact-role" className={styles.field__label}>
                  Puesto del Responsable
                </label>
              </div>
              <div className={styles.form__field}>
                <input
                  className={styles.field__input}
                  name="contact-email"
                  id="contact-email"
                  type="email"
                  v-model="form.contactEmail"
                  maxLength="100"
                  placeholder="Email mail@mail.com (*)"
                />
                <p className={styles.field_input__error_msg}>
                  Por favor, ingresá un e-mail. Lo necesitamos para contactarte.
                </p>
                <label htmlFor="contact-email" className={styles.field__label}>
                  Email
                </label>
              </div>
              <div className={styles.form__field}>
                <input
                  className={styles.field__input}
                  name="contact-phone"
                  id="contact-phone"
                  type="tel"
                  v-model="form.contactPhone"
                  maxLength="22"
                  placeholder="Teléfono 54 XX XXXX XXXX (*)"
                />
                <p className={styles.field_input__error_msg}>
                  Por favor, completá el teléfono. Lo necesitamos para
                  contactarte.
                </p>
                <label htmlFor="contact-phone" className={styles.field__label}>
                  Teléfono
                </label>
              </div>
              <div className={styles.form__field}>
                <input
                  className={styles.field__input}
                  name="fleet-quantity"
                  id="fleet-quantity"
                  v-model="form.fleetQuantity"
                  v-maska="'#####'"
                  maxLength="5"
                  placeholder="Cantidad de unidades de flota (*)"
                />
                <p className={styles.field_input__error_msg}>
                  Por favor, completá la cantidad de unidades para poder
                  ofrecerte un plan adecuado a lo que necesitás.
                </p>
                <label htmlFor="fleet-quantity" className={styles.field__label}>
                  Cantidad de unidades de flota
                </label>
              </div>
              <div
                className={`${styles.form__field} ${styles.form__field__select}`}
              >
                <select
                  className={styles.field__input}
                  name="provincia"
                  id="provincia"
                  v-model="form.provincia"
                >
                  <option value="" disabled>
                    Provincia
                  </option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Catamarca">Catamarca</option>
                  <option value="Chaco">Chaco</option>
                  <option value="Chubut">Chubut</option>
                  <option value="Ciudad Autónoma de Buenos Aires">
                    Ciudad Autónoma de Buenos Aires
                  </option>
                  <option value="Córdoba">Córdoba</option>
                  <option value="Corrientes">Corrientes</option>
                  <option value="Entre Ríos">Entre Ríos</option>
                  <option value="Formosa">Formosa</option>
                  <option value="Jujuy">Jujuy</option>
                  <option value="La Pampa">La Pampa</option>
                  <option value="La Rioja">La Rioja</option>
                  <option value="Mendoza">Mendoza</option>
                  <option value="Misiones">Misiones</option>
                  <option value="Neuquén">Neuquén</option>
                  <option value="Río Negro">Río Negro</option>
                  <option value="Salta">Salta</option>
                  <option value="San Luis">San Luis</option>
                  <option value="San Juan">San Juan</option>
                  <option value="Santa Cruz">Santa Cruz</option>
                  <option value="Santa Fé">Santa Fé</option>
                  <option value="Santiago del Estero">
                    Santiago del Estero
                  </option>
                  <option value="Tierra del Fuego, Antártida e islas del Atlántico Sur">
                    Tierra del Fuego, Antártida e islas del Atlántico Sur
                  </option>
                  <option value="Tucumán">Tucumán</option>
                </select>
                <p className={styles.field_input__error_msg}>
                  Por favor, completá la provincia. Lo necesitamos para
                  ofrecerte una mejor atención.
                </p>
                <label htmlFor="provincia" className={styles.field__label}>
                  Provincia
                </label>
              </div>
              <div
                className={`${styles.form__field} ${styles.form__field__select} ${styles.plan__select}`}
                style={{ gridColumn: 1 / 3 }}
              >
                <select
                  className={styles.field__input}
                  name="selected-plan"
                  id="selected-plan"
                  v-model="form.selectedPlan"
                >
                  <option value="" disabled>
                    ¿Qué plan o servicio te interesa?
                  </option>
                  <option value="rt-clasico">Plan: RT Clásico</option>
                  <option value="rt-flexible">Plan: RT Flexible</option>
                  <option value="rt-optimo">Plan: RT Óptimo</option>
                  <option value="rt-avanzado">Plan: RT Avanzado</option>
                  <option value="rt-contado">
                    Beneficio: YPF Ruta Contado
                  </option>
                  <option value="Servicios-seguridad-integrados">
                    Servicio: Servicios de seguridad integrados
                  </option>
                  <option value="Integración-de-patios">
                    Servicio: Integración de patios
                  </option>
                  <option value="Filler">Servicio: Filler</option>
                </select>
                <label htmlFor="selected-plan" className={styles.field__label}>
                  Planes
                </label>
              </div>
              <div
                className={`${styles.form__field} ${styles.form__field__textarea}`}
              >
                <textarea
                  className={styles.field__input}
                  name="comments"
                  id="comments"
                  placeholder="Consulta o Mensaje"
                  v-model="form.comments"
                  maxLength="512"
                ></textarea>
                <label htmlFor="comments" className={styles.field__label}>
                  Consulta
                </label>
              </div>
              <div className={styles.form__switch_container}>
                <label
                  className={styles.form__switch_title}
                  htmlFor="hasYpfRuta"
                >
                  ¿Tenes YPF Ruta?
                </label>
                <div
                  onClick={() => setOn(!on)}
                  className={
                    on
                      ? `${styles.form__switch} ${styles.active}`
                      : styles.form__switch
                  }
                >
                  <input
                    className={styles.form__switch_input}
                    type="button"
                    name="route"
                    id="hasYpfRuta"
                  />
                </div>
              </div>
              <div className={styles.form__submit_container}>
                <div style={{ marginBottom: 1.7 + 'rem' }}>
                  {/* CAPTCHA */}

                  {/* <vue-recaptcha
                  v-show="showRecaptcha"
                  :siteKey="siteKey"
                  @verify="recaptchaVerified"
                  @expire="recaptchaExpired"
                  @fail="recaptchaFailed"
                  ref="vueRecaptcha">
				          </vue-recaptcha> */}
                  <p className={styles.field_input__error_msg}>
                    Aceptá el captcha por favor
                  </p>
                </div>
                <button
                  className={`button button--primary ${styles.form__submit_button}`}
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>

            {/* fin form */}
          </div>
        </div>
      </section>
    </>
  )
}

export default FormAdherirme
