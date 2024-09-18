import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {name}, {greeting}
    </h1>
  )
}
Welcome.defaultProps = {
  name: 'kiran',
  greeting: 'oye',
}
export default Welcome
