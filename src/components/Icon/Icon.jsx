import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"
import "./Icon.scss"

const Icon = (props) => {
  const { className, name, hasFill = false } = props

  return (
    <span className={classNames(className, "icon")}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}

export default Icon
