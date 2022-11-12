import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from '../context/FeedbackContext.js'

function FeedbackForm() {
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
    }
  }, [feedbackEdit])

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if(text === ""){
      setBtnDisable(true)
      setMessage(null)
    }else if(text !== "" && text.trim().length <= 10){
      setMessage("Text must be at list 10 characters")
      setBtnDisable(true)
    }else {
      setBtnDisable(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        text, 
        rating,
      }

      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.id, newFeedback)
      }else{
        addFeedback(newFeedback)
      }

      setText('')
    }
  }

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating)=> setRating(rating)} />
          <div className="input-group">
            <input onChange={handleTextChange} type="text"placeholder="Write a review" value={text}/>
            <Button type="submit" isDisable={btnDisable} >Send</Button>
          </div>

          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </div>
  )
}

export default FeedbackForm