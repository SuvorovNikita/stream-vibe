import classNames from "classnames"
import "./Section.scss"

const Section = (props) => {
  const { clasName, title, titleId, description, actions, children } = props
  return (
    <section
      className={classNames(clasName, "section container")}
      aria-label={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__description">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && <div className="section__actions">{actions}</div>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
