import '../App.css'

function Button({clickHandler, id, text}) {

  return (
      <button className="remove-btn" onClick={() => clickHandler(id)}>
          {text}
        </button>
  )
}

export default Button
